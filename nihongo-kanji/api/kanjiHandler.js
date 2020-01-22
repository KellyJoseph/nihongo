module.exports = {
  postKanji: async (event, context) => {
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
  getKanji: async (event, context) => {
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
  getAllKanji: async (event, context) => {
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
  deleteKanji: async (event, context) => {
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
