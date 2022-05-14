"use strict";

module.exports.main = async (event) => {
  const type = event.queryStringParameters.type;

  try {
    const rq = await fetch(configUrl);
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          type,
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
          message: "Something went worng",
          input: event,
        },
        null,
        2
      ),
    };
  }
};
