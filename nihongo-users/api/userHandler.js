const uuidv4 = require("uuid/v4");
const services = require("./services/services");
var AWS = require("aws-sdk");
AWS.config.update({ region: "eu-west-1" });
const docClient = new AWS.DynamoDB.DocumentClient();
const tableName = "usersTable";

//https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.03.html
//https://www.dynamodbguide.com/secondary-indexes/
//https://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/
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
            message: "User successfully created",
            body: event.body
          })
        };
        return response;
      } catch (e) {
        const response = {
          statusCode: e.statusCode,
          body: JSON.stringify({
            message: "failed to write new user to dynamo",
            body: event.body
          })
        };
        return response;
      }
    } else {
      const response = {
        statusCode: 500,
        body: JSON.stringify({
          message: "invalid user profile fields"
        })
      };
      return response;
    }
  },

  authenticateUser: async (event, context) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "authenticate function invoked"
      })
    };
    return response;
  },
  getUser: async (event, context) => {
    const params = {
      TableName: tableName,
      Key: {
        userId: "56c21fc6-76ee-4357-8670-5600c74b9ba4",
        email: "finn@gmail.com"
      }
    };
    const res = await docClient.get(params).promise();
    const exists = !!res.Item;
    console.log(exists);
    console.log(res);
    return res;
  },

  getAllUsers: async (event, context) => {
    return message("get all users function invoked");
  },

  deleteUser: async (event, context) => {
    return message("delete users function invoked");
  }
};
