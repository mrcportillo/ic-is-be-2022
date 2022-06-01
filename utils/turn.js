import assert from 'assert';
import Turn from '../models/Turn';

const VIP_MINUTES_BY_TURN = 3;
const GENERAL_MINUTES_BY_TURN = 5;

const getEstimatedMinutesByType = (type, positionsBefore) => {
  assert(
    type && typeof type === 'string',
    'getEstimatedMinutesByType-type is not of type string'
  );
  assert(
    typeof positionsBefore === 'number',
    'getEstimatedMinutesByType-positionsBefore is not of type string'
  );

  if (type === Turn.TURN_TYPES.GENERAL) {
    return positionsBefore * GENERAL_MINUTES_BY_TURN;
  }

  if (type === Turn.TURN_TYPES.VIP) {
    return positionsBefore * VIP_MINUTES_BY_TURN;
  }
};

export { getEstimatedMinutesByType };
