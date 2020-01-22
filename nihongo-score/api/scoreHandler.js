module.exports = {
  postScore: async (event, context) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "createChatMessage",
        method: event.httpMethod,
        path: event.path,
        query: event.queryStringParameters,
        params: event.pathParameters,
        body: event.body
      })
    };
    return response;
  },
  getScore: async (event, context) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "createChatMessage",
        method: event.httpMethod,
        path: event.path,
        query: event.queryStringParameters,
        params: event.pathParameters,
        body: event.body
      })
    };
    return response;
  },
  getAllScores: async (event, context) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "createChatMessage",
        method: event.httpMethod,
        path: event.path,
        query: event.queryStringParameters,
        params: event.pathParameters,
        body: event.body
      })
    };
    return response;
  },
  deleteScore: async (event, context) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "createChatMessage",
        method: event.httpMethod,
        path: event.path,
        query: event.queryStringParameters,
        params: event.pathParameters,
        body: event.body
      })
    };
    return response;
  }
};
