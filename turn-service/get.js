const { default: Turn } = require('../models/Turn');

module.exports.main = (event) => {
  const type = event.queryStringParameters.type;
  try {
    const turn = Turn.create(
      type === Turn.TURN_TYPES.VIP
        ? Turn.TURN_TYPES.VIP
        : Turn.TURN_TYPES.GENERAL
    );
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          turn,
        },
        null,
        2
      ),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify(
        {
          message: 'Something went worng',
          input: event,
        },
        null,
        2
      ),
    };
  }
};
