exports.handler = async(event) => {
  var response = {
			statusCode: 200,
			body:		'ok1'
		};
		
  var AWS = require('aws-sdk');
    AWS.config.region = 'us-east-2';
  var lambda = new AWS.Lambda();
  
  var params = {
    FunctionName: 'testInvoke1', // the lambda function we are going to invoke
    InvocationType: 'DryRun',
    Payload: '{ "name" : "Alex" }'
  };

  var teste = await lambda.invoke(params, (err, data) => {
    if (err)
      return 't000';
    else
      return data.Payload
  });
  console.log('t1');
  console.log(teste);
  console.log('t2');

  response.body = teste;
  
  return response;
  
};
