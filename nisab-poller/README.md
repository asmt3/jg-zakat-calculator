# Deploying the Lambda function
This deployment process makes use of the [Node-Lambda](https://www.npmjs.com/package/node-lambda) module

## Preparing AWS

1. Create S3 Bucket eg. 

    ``` zakat-dev-justgiving-com ```

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



## Preparing the deploy

1. In this directory execute ```npm install```

2. Install node-lambda using ```npm install -g node-lambda```

3. Create a file called ```.env``` in this folder using this template, filling in the values marked with ***

    ```
    AWS_ENVIRONMENT=production
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
    S3_BUCKET_NAME="zakat-dev-justgiving-com"
    NISAB_FILE_NAME="nisab-daily.json"
    ```

4. Check that everything is working by testing locally ```node-lambda run``` . This should upload JSON file to DEV S3


## Deploying
1. Create a file called ```deploy.env``` in this folder, using this template, filling in the values marked with ***
    ```
        S3_BUCKET_NAME="***"
        NISAB_FILE_NAME="nisab-daily.json"
    ```

2. Deploy ```node-lambda deploy```
3. Log into AWS Console for Lambda (https://eu-west-1.console.aws.amazon.com/lambda/)
4. Find the function 'ZakatNisabPollAndSave'
5. Click "Test". You should get a response "Execution result: succeeded" and you should see function output like this:

    ```
    {
      "url": "https://s3-eu-west-1.amazonaws.com/zakat-dev-justgiving-com/nisab-daily.json",
      "nisab": {
        "timestamp_ms": 1463425740000,
        "currencies": [
          {
            "timestamp_ms": 1463425740000,
            "code": "EUR",
            "threshold_au": 3352.39,
            "threshold_ag": 289.42
          },
          {
            "timestamp_ms": 1463425740000,
            "code": "GBP",
            "threshold_au": 2636.53,
            "threshold_ag": 227.62
          },

          ...

          {
            "timestamp_ms": 1463425740000,
            "code": "HKD",
            "threshold_au": 29467.78,
            "threshold_ag": 2544.02
          }
        ]
      }
    }
    ```

    The log output should also contain the phrase:
    "Completed Uploading Nisab" along with the URL of the produced JSON file

## Setting up scheduling
1. Log into AWS Console for Lambda (https://eu-west-1.console.aws.amazon.com/lambda/)
2. Find the function 'ZakatNisabPollAndSave'
3. Click "Event Sources"
4. Click "Add Event Source"
5. Select "CloudWatch - Schedule"
6. Set Rule Name to "ZakatPollThresholds"
7. Set Schedule Express to rate (1 day)
8. Click "Submit"

## Configuring the frontend
Make sure that the value of ```nisabSourceURL``` in the config.js matches the location of the JSON file produced by this scraper
