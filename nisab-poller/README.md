Deploying the Lambda function
===
	scheduled task working? Thu May 05 16:41:57 GMT+630 2016

Preparing AWS
===
1. Create S3 Bucket eg. 
	```zakat-dev-justgiving-com```

2. Configure S3 CORS eg.
	```
	<CORSConfiguration>
		<CORSRule>
			<AllowedOrigin>*</AllowedOrigin>
			<AllowedMethod>GET</AllowedMethod>
		</CORSRule>
	</CORSConfiguration>
	```

3. Create an AWS role for the lambda function with a policy document as follows:

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:*"
            ],
            "Resource": [
                "arn:aws:s3:::zakat-dev-justgiving-com",
                "arn:aws:s3:::zakat-dev-justgiving-com/*"
            ]
        }
    ]
}
```

4. Take note of the Role ARN



Preparing the deploy
====
0. In this directory execute ```npm install```

1. Install node-lambda using ```npm install -g node-lambda```

2. Create a file called ```.env``` in this folder using this template, filling in the values marked with ***
```
AWS_ENVIRONMENT=development
AWS_ACCESS_KEY_ID=***
AWS_SECRET_ACCESS_KEY=***
AWS_SESSION_TOKEN=
AWS_ROLE_ARN=***
AWS_REGION=eu-west-1
AWS_FUNCTION_NAME=ZakatNisabPollAndSave
AWS_HANDLER=index.handler
AWS_MEMORY_SIZE=128
AWS_TIMEOUT=30
AWS_DESCRIPTION=
AWS_RUNTIME=nodejs4.3
AWS_VPC_SUBNETS=
AWS_VPC_SECURITY_GROUPS=
EXCLUDE_GLOBS="event.json"
PACKAGE_DIRECTORY=build

3. Check that everything is working by testing locally ```node-lambda run```
4. Deploy ```node-lambda deploy```
5. Log into AWS Console for Lambda (https://eu-west-1.console.aws.amazon.com/lambda/)
6. Find the function 'ZakatNisabPollAndSave'
7. Click "Test". You should get a response "Execution result: succeeded"""

Setting up scheduling
====
1. Log into AWS Console for Lambda (https://eu-west-1.console.aws.amazon.com/lambda/)
2. Find the function 'ZakatNisabPollAndSave'
3. Click "Event Sources"
4. Click "Add Event Source"
5. Select "CloudWatch - Schedule"
6. Set Rule Name to "ZakatPollThresholds"
7. Set Schedule Express to rate (1 day)
8. Click "Submit"
