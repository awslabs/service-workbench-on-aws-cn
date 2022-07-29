---
id: components
title: Service Workbench 安装组件
sidebar_label: 安装组件
---

### 无服务器框架和项目

Service Workbench on AWS 是使用事件驱动的 API 框架部署的无服务器环境。它的组件分布在 [AWS Lambda](https://docs.aws.amazon.com/lambda/latest/operatorguide/intro.html) 实例、静态页面使用 [Amazon CloudFront](https://aws.amazon.com)、 和 [Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html)。它可以使用 Amazon Cognito 或其他OIDC IdPs 进行身份验证。 Service Workbench 依赖 [AWS Service Catalog](https://aws.amazon.com/servicecatalog/?aws-service-catalog.sort-by=item.additionalFields.createdDate&aws-service-catalog.sort-order=desc)托管和管理定义工作区的 [AWS CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html) 模板。 Service Workbench 包含五个无服务器架构的组件。您可以在 `<service_workbench>/main/solution` 目录下找到这些组件。

|组件 |安装目录 |它包含什么？ |
| ------------ | ------------ |----------|
|基础设施 | `solution/infrastructure/` |以下 AWS 资源是作为此组件部署的一部分创建的:<br /><ul><li>S3 存储桶用于记录以下操作:<ul><li> 研究数据上传。 </li><li>访问 CloudFormation 模板的存储桶。</li><li>访问 CloudFront 分发服务。</li><li>托管静态 Service Workbench 网站。</li></ul><li> CloudFront 分发服务，可根据用户位置加速 Service Workbench 网站访问。</li></li></ul> |
|后端 | `solution/backend/` |部署环境后，后端组件创建并配置以下AWS资源:<br /><b>S3存储桶</b><ul><li>存储上传的研究数据。此存储桶还从 [AWS Key Management Service](https://docs.aws.amazon.com/kms/latest/developerguide/overview.html) 接收加密密钥，用于加密此数据并将其提供给 Service Workbench 网站.</li><li>存储引导脚本。这些脚本用于启动 SageMaker、EC2、Amazon EMR 等 Workspace 实例。</li><li>设置 IAM 角色和策略以访问 Lambda 函数和调用步骤函数。</li></ul>|
|Edge Lambda | `main/solution/edge-lambda` |一种内联 JavaScript 拦截器函数，可将安全标头添加到 CloudFront 输出响应。此函数是内联声明的，因为代码需要 API Gateway URL 用于后端 API 操作。 |
|Machine images | `solution/machine-images/` |使用 machine images 部署EC2 和 Amazon EMR 模板。 |
|准备主账户 | `main/solution/prepare-master-acc` |为组织访问创建主 IAM 角色。 |
|Post deployment | `solution/post-deployment/` |为部署后函数创建一个 IAM 角色，其策略授予对 S3 存储桶、DynamoDB 表、KMS 加密密钥、CloudFront 和 Lambda 函数的权限。 |
|用户界面 | `solution/ui/` |包含用于创建和支持应用程序的 UI 功能的代码。 |

### 持续集成/持续交付

Service Workbench 包括持续集成/持续交付功能:
- `cicd/cicd-pipeline/serverless.yml`
- `cicd/cicd-source/serverless.yml`


