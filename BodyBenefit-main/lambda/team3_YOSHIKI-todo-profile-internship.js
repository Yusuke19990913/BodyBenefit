const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();
const tableName = "yoshiki-team-users";

exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ message: "" }),
  };

  const body = JSON.parse(event.body);

  const param = {
    TableName: tableName,
    Item:{
      username: body.username,
      password: body.password,
      token: body.token,
      gender: body.gender,
      weight: body.weight,
      idealWeight: body.idealWeight,
      date: body.date,
      arm: body.arm,
      abs: body.abs,
      calf: body.calf,
      ass: body.ass,
      spine: body.spine,
      thigh: body.thigh
    }
  };

  dynamo.put(param, function (err, data) {
    if (err) {
      response.statusCode = 500;
      response.body = JSON.stringify({
        message: "予期せぬエラーが発生しました",
      });
      callback(null, response);
      return;
    } else {
      response.body =JSON.stringify({
        message: "OK"
      });
      callback(null, response);
      return;
    }
  });
};
