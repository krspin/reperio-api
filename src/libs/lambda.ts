import middy from "@middy/core"
import middyJsonBodyParser from "@middy/http-json-body-parser"

export const middyfy = (lambda) => {
  return middy(baseHandler(lambda)).use(middyJsonBodyParser())
}

const baseHandler = (lambda) => {
  return async function (event, context, callback) {
    let body: unknown | {[key: string]: string | number};
    let statusCode: number;

    try {
      body = await lambda(event, context, callback);
      statusCode = 200;
    } catch (e) {
      body = { error: e.message };
      statusCode = 500;
    };

    return {
      statusCode,
      body: JSON.stringify(body),
      /**
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      }
      **/
    };
  }
}
