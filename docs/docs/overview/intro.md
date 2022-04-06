---
id: introduction
title: Service Workbench Introduction
sidebar_label: Introduction
---
The Service Workbench on AWS cloud-based solution provides secure access to data, tooling, and compute power. With Service Workbench, researchers can perform research in a securely pre-configured environment. Service Workbench enables the creation of baseline research templates, simplifying data access and providing cost transparency.

Service Workbench on AWS is a serverless environment deployed using an event-driven API framework. Its components array across [AWS Lambda](https://docs.aws.amazon.com/lambda/latest/operatorguide/intro.html) instances, static webpages with [Amazon CloudFront](https://aws.amazon.com/cloudfront/), and [Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html). For authentication, it can pair with [Amazon Cognito](https://aws.amazon.com/cognito/). Service Workbench relies on [AWS Service Catalog](https://aws.amazon.com/servicecatalog/?aws-service-catalog.sort-by=item.additionalFields.createdDate&aws-service-catalog.sort-order=desc) to host and manage [AWS CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html) templates that define Workspaces. 

You can explore the components of Service Workbench in the **<service_workbench>/main/solution** directory.
