import { nanoid } from 'nanoid';

let positions = 1;

class Turn {
  static TURN_TYPES = {
    GENERAL: 'GENERAL',
    VIP: 'VIP',
  };

  constructor(type) {
    this.id = nanoid(5);
    this.position = this.id;
    this.positions_before = positions++;
    this.estimated_minutes = positions * 5;
    this.type = type;
    this.date = new Date().toISOString();
  }

  static create(type = 'GENERAL') {
    return new Turn(type);
  }
}

export default Turn;
