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


var params = {
    TableName: tableName,
    Key:{//取得したい項目をプライマリキー(及びソートキー)によって１つ指定
         token: body.token
    }
};
dynamo.get(params, function(err, data){
   if (err) {
      response.statusCode = 500;
      response.body = JSON.stringify({
        message: "予期せぬエラーが発生しました",
      });
      callback(null, response);
      return;
    }else{
        response.body = JSON.stringify({
            token: data.Item.token,
            username: data.Item.username,
            password: data.Item.password,
            token: data.Item.token,
            gender: data.Item.gender,
            weight: data.Item.weight,
            idealWeight: data.Item.idealWeight,
            date: data.Item.date,
            arm: data.Item.arm,
            abs: data.Item.abs,
            calf: data.Item.calf,
            ass: data.Item.ass,
            spine: data.Item.spine,
            thigh: data.Item.thigh
        });
        callback(null, response);
        return;
    }

});

};
