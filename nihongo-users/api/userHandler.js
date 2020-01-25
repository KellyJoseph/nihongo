const uuidv4 = require("uuid/v4");
const services = require("./services/services");
var AWS = require("aws-sdk");
AWS.config.update({ region: "eu-west-1" });
var docClient = new AWS.DynamoDB.DocumentClient();
var tableName = "usersTable";

module.exports = {
  registerUser: async (event, context) => {
    console.log("welcome to register function!!");
    const id = uuidv4();
    console.log("welcome to register function!! 2");

    let body;

    console.log("welcome to register function!! 3");

    if (event.body !== null && event.body !== undefined) {
      body = JSON.parse(event.body);
    }

    console.log("welcome to register function!! 4");

    const isValid = await services.validateUser(body);

    console.log("welcome to register function!!5");

    if (1 === 1) {
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
      const response = await docClient.put(params).promise();
      console.log(response);
      /*
      console.log("Adding a new item...");
      console.log(" Adding params", params);
      const result = docClient.put(params, function(err, data) {
        if (err) {
          console.error(
            "Unable to add item. Error JSON:",
            JSON.stringify(err, null, 2)
          );
        } else {
          console.log("Added item:", JSON.stringify(data, null, 2));
        }
      });
      console.log("result-=-=-=-=-=-=-=-=");
      console.log(result);
      */
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
