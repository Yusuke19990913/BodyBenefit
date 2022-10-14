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

  const address = body.address;
  const password = body.password;
  let user = null;
  var params = {
    TableName : tableName
};

dynamo.scan(params, function(err, data){
    if(err){
      response.statusCode = 500;
      response.body = JSON.stringify({
        message: "予期せぬエラーが発生しました",
      });
      callback(null, response);
      return;
    }else{
       data.Items.forEach(function(item, index){
           if(item.address == address) {
             if(item.password == password){
               user=item.token
             }
           }
           });
           if (user ===null) {
            response.body =JSON.stringify({
            message: "メールアドレスとパスワードが違います。",
          });
          callback(null, response);
          return;
           } else {
          response.body =JSON.stringify({
            message: "OK",
            token: user
          });
          callback(null, response);
          return;
           }
    }
});

};
