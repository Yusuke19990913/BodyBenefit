const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();


exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ message: "" }),
  };

  const body = JSON.parse(event.body);
  const token = body.token;


 var param = {
    TableName: 'yoshiki-team-users',
    Key:{
         token
    }
};


  dynamo.delete(param, function (err, data) {
    if (err) {
      console.log(err);
      response.statusCode = 500;
      response.body = JSON.stringify({
        message: "予期せぬエラーが発生しました",
        err: err
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
