---
id: logs
title: 查看Service Workbench 日志
sidebar_label: 查看Service Workbench 日志
---

### 在 Amazon CloudWatch 中查看 Service Workbench 日志
Service Workbench 已启用 API Gateway 访问日志记录。日志位于 CloudWatch 中的 ```/aws/api-gateway/<name of your API>``` 日志组：


以下是访问日志的格式：
```
{
    “authorizer.principalId”：“u-000000000000”，
    “错误信息”： ”-”，
    "extendedRequestId": "ZuT4rGDNoAMFxXw=",
    "httpMethod": "GET",
    “identity.sourceIp”：“22.22.222.22”，
    “integration.error”：“-”，
    “integration.integrationStatus”：“200”，
    “integration.latency”：“79”，
    "integration.requestId": "67394741-90ae-4c6c-94fb-df8bf7be33ec",
    “integration.status”：“200”，
    "路径": "/dev/api/user-roles",
    "requestId": "468a1b4d-3015-4901-b749-37e4e0551029",
    “响应延迟”：“83”，
    “响应长度”：“819”，
    “阶段”：“开发”，
    “状态”：“200”
}
```
Lambda 日志也可在 CloudWatch 中使用，默认日志组名称为```/aws/lambda/<lambda function name>```。

### 可用指标

CloudWatch 中提供了 Lambda 和 API Gateway 的默认指标。有关可用指标的完整列表，请参阅：

 + [使用 AWS Lambda 函数指标 - AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics.html)
 + [Amazon API Gateway 维度和指标 - Amazon API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-metrics-and-dimensions.html)

Service Workbench 不会产生任何自定义指标。

