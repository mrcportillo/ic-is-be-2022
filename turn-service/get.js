import Turn from '../models/Turn';

const HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
};

exports.main = (event, context, callback) => {
  const type = event.queryStringParameters?.type;

  try {
    const turn = Turn.create(type);

    callback(null, {
      statusCode: 200,
      headers: HEADERS,
      body: JSON.stringify({ turn }),
    });
  } catch (e) {
    callback(null, {
      statusCode: 500,
      headers: HEADERS,
      body: JSON.stringify({
        message: 'Something went worng',
        input: event,
      }),
    });
  }
};
