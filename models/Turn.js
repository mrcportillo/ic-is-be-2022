import { nanoid } from 'nanoid';
import { getEstimatedMinutesByType } from '../utils/turn';

let general_positions = 0;
let vip_positions = 0;
let preferal_positions = 0;

class Turn {
  static TURN_TYPES = {
    GENERAL: 'GENERAL',
    VIP: 'VIP',
    PREFERAL: 'PREFERAL'
  };

  constructor(type) {
    this.id = nanoid(5);
    this.type = type;
    this.date = new Date().toISOString();
    if (type === Turn.TURN_TYPES.VIP) {
      this.positions_before = vip_positions;
      vip_positions++;
      this.position = vip_positions;
      this.estimated_minutes = getEstimatedMinutesByType(
        Turn.TURN_TYPES.VIP,
        vip_positions
      );
    }
    if (type == Turn.TURN_TYPES.GENERAL) {
      this.positions_before = general_positions;
      general_positions++;
      this.position = general_positions;
      this.estimated_minutes = getEstimatedMinutesByType(
        Turn.TURN_TYPES.GENERAL,
        general_positions
      );
    }
    if (type == Turn.TURN_TYPES.PREFERAL) {
      this.positions_before = preferal_positions;
      preferal_positions++;
      this.position = preferal_positions;
      this.estimated_minutes = getEstimatedMinutesByType(
        Turn.TURN_TYPES.PREFERAL,
        preferal_positions
      );
    }
  }

  static create(type = Turn.TURN_TYPES.GENERAL) {
    return new Turn(type.toUpperCase());
  }
}

export default Turn;
