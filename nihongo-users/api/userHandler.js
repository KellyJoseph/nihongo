const uuidv4 = require("uuid/v4");
const services = require("./services/services");
var AWS = require("aws-sdk");
AWS.config.update({ region: "eu-west-1" });
var docClient = new AWS.DynamoDB.DocumentClient();
var tableName = "usersTable";

//https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.03.html
//https://www.dynamodbguide.com/secondary-indexes/
//https://serverless.com/framework/docs/providers/aws/guide/services/

module.exports = {
  registerUser: async (event, context) => {
    const id = uuidv4();
    let body;
    if (event.body !== null && event.body !== undefined) {
      body = JSON.parse(event.body);
    }

    const isValid = await services.validateUser(body);

    console.log("isvalid result is...");
    console.log(isValid);

    if (isValid) {
      var params = {
        TableName: tableName,
        Item: {
          userId: id,
          firstName: body.firstName,
          lastName: body.lastName,
          email: body.email,
          password: body.password
        }
      };

      console.log("Adding a new item...");
      console.log(" Adding params", params);

      try {
        await docClient.put(params).promise();
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
      } catch (e) {
        const response = {
          statusCode: e.statusCode,
          body: JSON.stringify({
            message: "failed to write new user to dynamo",
            method: event.httpMethod,
            path: event.path,
            query: event.queryStringParameters,
            params: event.pathParameters,
            body: event.body
          })
        };
        return response;
      }
      /*
      docClient.put(params, function(err, data) {
        if (err) {
          console.error(
            "Unable to add item. Error JSON:",
            JSON.stringify(err, null, 2)
          );
        } else {
          console.log("Added item:", JSON.stringify(data, null, 2));
        }
      }).promise();

      */
    } else {
      const response = {
        statusCode: 500,
        body: JSON.stringify({
          message: "invalid user profile fields",
          method: event.httpMethod,
          path: event.path,
          query: event.queryStringParameters,
          params: event.pathParameters,
          body: event.body
        })
      };
      return response;
    }
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
