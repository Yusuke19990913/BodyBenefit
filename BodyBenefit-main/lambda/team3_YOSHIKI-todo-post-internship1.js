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
    Key:{
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
        const gender = data.Item.gender;
        const weight = data.Item.weight;
        const idealWeight = data.Item.idealWeight;
        const date = data.Item.date;
        const arm = data.Item.arm;
        const abs= data.Item.abs;
        const calf = data.Item.calf;
        const ass = data.Item.ass;
        const spine = data.Item.spine;
        const thigh = data.Item.thigh;
        
    }

});
var scanparam = {
    TableName: 'yoshiki-team-todo',
};
dynamo.scan(scanparam, function(err, data){
    if(err){
    response.statusCode = 500;
      response.body = JSON.stringify({
        message: "予期せぬエラーが発生しました scan",
      });
      callback(null, response);
      return;
    }else{
        response.body = JSON.stringify({
            todo: data.Items
        });
        callback(null, response);
        return;
    }
});
};
