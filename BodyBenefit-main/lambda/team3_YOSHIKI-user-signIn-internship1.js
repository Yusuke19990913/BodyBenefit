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
const crypto = require('crypto')
const N = 32
const token =crypto.randomBytes(N).toString('base64').substring(0, N)

  const param = {
    TableName: tableName,
    Item:{
      address: body.address,
      password: body.password,
      token: token
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
        message: "OK",
        token: token
      });
      callback(null, response);
      return;
    }
  });
};
