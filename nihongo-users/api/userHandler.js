const uuidv4 = require("uuid/v4");
const services = require("./services/services");
var AWS = require("aws-sdk");
AWS.config.update({ region: "eu-west-1" });
const docClient = new AWS.DynamoDB.DocumentClient();
const tableName = "usersTable2";

//https://github.com/servisbot/botarmy-barracks-v2/blob/master/src/app/index.js
//https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.03.html
//https://www.dynamodbguide.com/secondary-indexes/
//https://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/
//https://serverless.com/framework/docs/providers/aws/guide/services/
//https://stackoverflow.com/questions/10228951/dynamodb-and-user-login-table
//https://stackoverflow.com/questions/56602292/how-do-i-implement-a-dynamodb-global-secondary-index-with-infrastructure-as-code
//https://github.com/awslabs/aws-cloudformation-templates/blob/master/aws/services/DynamoDB/DynamoDB_Secondary_Indexes.yaml

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
    const body = JSON.parse(event.body);
    console.log("email is", body.email);
    const params = {
      TableName: tableName,
      Key: {
        email: body.email
      }
    };
    const res = await docClient.get(params).promise();

    let isValid = function(password1, password2) {
      if (password1 == password2) {
        return true;
      } else return false;
    };

    const validationResult = await isValid(res.Item.password, body.password);

    console.log(res.Item.password);
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "get user success",
        body: `${res.Item.password} vs ${body.password}, password match: ${validationResult}`
      })
    };
    return response;
  },
  getUser: async (event, context) => {
    const params = {
      TableName: tableName,
      Key: {
        //userId: "56c21fc6-76ee-4357-8670-5600c74b9ba4",
        email: event.pathParameters.email
      }
    };
    const res = await docClient.get(params).promise();
    console.log(res);
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "get user success",
        body: res
      })
    };
    return response;
  },

  deleteUser: async (event, context) => {
    const params = {
      TableName: tableName,
      Key: {
        //userId: "56c21fc6-76ee-4357-8670-5600c74b9ba4",
        email: event.pathParameters.email
      }
    };
    const res = await docClient.get(params).promise();
    const exists = !!res.Item;
    console.log(exists);
    console.log(res);
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "get user success",
        body: res
      })
    };
    return response;
  },

  getAllUsers: async (event, context) => {
    const params = {
      TableName: tableName
    };
    const res = await docClient.scan(params).promise();
    console.log(res);
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "get user success",
        body: res
      })
    };
    return response;
  },

  deleteUser: async (event, context) => {
    return message("delete users function invoked");
  }
};
