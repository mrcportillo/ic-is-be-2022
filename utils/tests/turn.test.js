import Turn from '../../models/Turn';
import { getEstimatedMinutesByType } from '../turn';

describe('turn utils', () => {
  describe('getEstimatedMinutesByType', () => {
    test('should use VIP time by turn', () => {
      expect(getEstimatedMinutesByType(Turn.TURN_TYPES.VIP, 1)).toBe(3);
      expect(getEstimatedMinutesByType(Turn.TURN_TYPES.VIP, 4)).toBe(12);
      expect(getEstimatedMinutesByType(Turn.TURN_TYPES.VIP, 10)).toBe(30);
      expect(getEstimatedMinutesByType(Turn.TURN_TYPES.VIP, 0)).toBe(0);
    });

    test('should use GENERAL time by turn', () => {
      expect(getEstimatedMinutesByType(Turn.TURN_TYPES.GENERAL, 1)).toBe(5);
      expect(getEstimatedMinutesByType(Turn.TURN_TYPES.GENERAL, 4)).toBe(20);
      expect(getEstimatedMinutesByType(Turn.TURN_TYPES.GENERAL, 10)).toBe(50);
      expect(getEstimatedMinutesByType(Turn.TURN_TYPES.GENERAL, 0)).toBe(0);
    });

    test('should use PREFERAL time by turn', () => {
      expect(getEstimatedMinutesByType(Turn.TURN_TYPES.PREFERAL, 1)).toBe(2);
      expect(getEstimatedMinutesByType(Turn.TURN_TYPES.PREFERAL, 4)).toBe(8);
      expect(getEstimatedMinutesByType(Turn.TURN_TYPES.PREFERAL, 10)).toBe(20);
      expect(getEstimatedMinutesByType(Turn.TURN_TYPES.PREFERAL, 0)).toBe(0);
    });
  });
});
