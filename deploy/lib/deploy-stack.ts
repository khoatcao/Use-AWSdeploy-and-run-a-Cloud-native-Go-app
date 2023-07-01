import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import {Config} from './config'; 
import * as apprunner from '@aws-cdk/aws-apprunner-alpha';  
import * as assets from 'aws-cdk-lib/aws-ecr-assets';

export class DeployStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'DeployQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    // const table = new dynamodb.Table(this,'Table',{
    //   tableName: Config.getDynamoDBTableName(),
    //   partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
    // });
    // call the deployapprunner function 
    this.DeployAppRunner(props);
  }

  private DeployAppRunner(props?:cdk.StackProps){

    
    const imageAsset = new assets.DockerImageAsset(this, 'ImageAssets', {
      directory: ".",
      file: 'Dockerfile', 
    });

    new apprunner.Service(this,'Service', {
      source: apprunner.Source.fromAsset({
        imageConfiguration: { port: 8000 },
        asset: imageAsset,
      }) 
    });
  }

}
