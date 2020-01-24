const uuidv4 = require("uuid/v4");
const services = require("./services/services");

module.exports = {
  registerUser: async (event, context) => {
    const id = uuidv4();
    let body;
    if (event.body !== null && event.body !== undefined) {
      body = JSON.parse(event.body);
    }

    const isValid = await services.validateUser(body);
    var newUser = {
      id: id,
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      password: body.password
    };

    if (isValid) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: isValid,
          method: event.httpMethod,
          path: event.path,
          query: event.queryStringParameters,
          params: event.pathParameters,
          body: newUser
        })
      };
    } else {
      return {
        statusCode: 300,
        body: JSON.stringify({
          message: isValid,
          method: event.httpMethod,
          path: event.path,
          query: event.queryStringParameters,
          params: event.pathParameters,
          body: "missing fields"
        })
      };
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: isValid,
        method: event.httpMethod,
        path: event.path,
        query: event.queryStringParameters,
        params: event.pathParameters,
        body: newUser
      })
    };
    return response;
  },
  authenticateUser: async (event, context) => {
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
  getUser: async (event, context) => {
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
  getAllUsers: async (event, context) => {
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
  deleteUser: async (event, context) => {
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
