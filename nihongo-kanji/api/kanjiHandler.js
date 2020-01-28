var AWS = require("aws-sdk");
AWS.config.update({ region: "eu-west-1" });
const docClient = new AWS.DynamoDB.DocumentClient();
const tableName = "kanjiTable";

//Hiragana: Unicode: 3040-309F
//Katakana: Unicode: 30A0–30FF

module.exports = {
  postKanji: async (event, context) => {
    let body;
    if (event.body !== null && event.body !== undefined) {
      body = JSON.parse(event.body);
    }
    var params = {
      TableName: tableName,
      Item: {
        kanji: body.kanji,
        unicode: body.unicode,
        grade: body.grade,
        meaning: body.meaning,
        kunyomi: body.kunyomi,
        onyomi: body.onyomi,
        option1: body.option1,
        option2: body.option2,
        option3: body.option3,
        option4: body.option4
      }
    };
    const res = await docClient.put(params).promise();
    const response = {
      statusCode: res.statusCode,
      body: JSON.stringify({
        message: "post kanji operation complete?",
        body: res.body
      })
    };
    return response;
  },
  getAllN5Kanji: async (event, context) => {
    const params = {
      TableName: tableName
    };
    const res = await docClient.scan(params).promise();
    console.log(res);
    const response = {
      statusCode: res.statusCode,
      body: JSON.stringify({
        message: "get all kanji operation complete?",
        body: res.Items
      })
    };
    return response;
  }
};
