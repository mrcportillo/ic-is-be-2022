import { nanoid } from 'nanoid';

let general_positions = 0;
let vip_positions = 0;

class Turn {
  static TURN_TYPES = {
    GENERAL: 'GENERAL',
    VIP: 'VIP',
  };

  constructor(type) {
    this.id = nanoid(5);
    this.type = type;
    this.date = new Date().toISOString();
    if (type === Turn.TURN_TYPES.VIP) {
      this.positions_before = vip_positions;
      vip_positions++;
      this.position = vip_positions;
      this.estimated_minutes = vip_positions * 3;
    } else {
      this.positions_before = general_positions;
      general_positions++;
      this.position = general_positions;
      this.estimated_minutes = general_positions * 5;
    }
  }

  static create(type = Turn.TURN_TYPES.GENERAL) {
    return new Turn(type.toUpperCase());
  }
}

export default Turn;
