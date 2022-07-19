---
id: cicd
title: CI/CD
sidebar_label: CI/CD
---

我们建议您为此解决方案设置 CI/CD 管道。本节将概述如何执行此操作。

## 术语

* **源账户:** 包含 CodeCommit 存储库和源代码的 AWS 账户
* **目标账户:** 解决方案需要部署到的 AWS 账户。 CodePipeline 也部署在目标账户中。
* **暂存环境:** 为在将解决方案部署到最终目标环境之前运行集成测试或手动测试而创建的解决方案环境。
* **目标环境:** 需要部署代码的目标解决方案环境。

## CI/CD 管道如何工作

在高层次上，管道的工作方式如下:

1. 指定分支的已配置存储库上源账户中的每次提交都会触发 CloudWatch 事件。
2. CloudWatch 规则将事件推送到目标账户的默认事件总线。
3. 目标账户中的 CloudWatch 规则触发 CodePipeline。
4.管道包含以下阶段并按顺序执行。管道在任何阶段失败时停止，并通过配置的 SNS 主题通知用户。
   1. **Source:** 此阶段从指定分支的 CodeCommit 存储库中获取代码并将其上传到 S3 存储桶。此 S3 存储桶称为工件存储桶，由 CodePipeline 用于将工件从一个阶段传递到另一个阶段。
   2. **Build-And-Deploy-To-Staging-Env:** 此阶段使用 [AWS CodeBuild](https://aws.amazon.com/codebuild/) 执行构建和部署。它从工件 S3 存储桶下载代码并安装依赖项、执行静态代码分析、运行单元测试并部署到暂存环境。只有在设置文件中将 `createStagingEnv` 设置设置为 `true` 时，才会创建此阶段。开发人员可以将 `createStagingEnv` 设置为 `false` 以跳过创建和部署到暂存环境并直接将更改推送到他们的目标开发环境。对于更高的环境（例如 `demo` 或 `production`），此标志应设置为 `true`，以确保在推送到目标环境之前在暂存环境中部署和测试代码。
   3. **Test-Staging-Env:** 此阶段使用 [AWS CodeBuild](https://aws.amazon.com/codebuild/) 对暂存环境执行集成测试。只有在设置文件中将 `createStagingEnv` 设置设置为 `true` 时，才会创建此阶段。开发人员可以将 `createStagingEnv` 设置为 `false` 以跳过创建和部署到暂存环境并直接将更改推送到他们的目标开发环境。
   4. **Push-To-Target-Env:**此阶段用于手动批准部署到目标环境。管道将在此阶段暂停并等待人工批准。用户将通过配置的 SNS 主题收到电子邮件通知。通知电子邮件地址是通过设置文件中的“emailForNotifications”设置来配置的。只有在设置文件中将 `requireManualApproval` 设置设置为 `true` 时，才会创建此阶段。将 `requireManualApproval` 设置为 `false` 将导致自动传播到目标环境。
   5. **Build-and-Deploy-to-Target-Env:** 此阶段使用 [AWS CodeBuild](https://aws.amazon.com/codebuild/) 执行构建和部署。它从工件 S3 存储桶下载代码并安装依赖项、执行静态代码分析、运行单元测试并部署到目标环境。
   6. **Test-Target-Env:** 此阶段使用 [AWS CodeBuild](https://aws.amazon.com/codebuild/) 针对目标环境执行集成测试。仅当设置文件中的 `runTestsAgainstTargetEnv` 设置设置为 `true` 时，才会创建此阶段。开发人员可以将`createStagingEnv`设置为`false`，`requireManualApproval`设置为`false`，将`runTestsAgainstTargetEnv`设置为`true`，跳过创建和部署到暂存环境，直接将更改推送到目标开发环境，无需手动批准并运行直接针对他们的目标开发环境进行集成测试。

## 部署 CI/CD 管道

按照以下步骤部署 CI/CD 管道:

### 1. 将 `cicd-source` 堆栈部署到源帐户

首先在 `cicd/cicd-source/config/settings` 中为您要为其创建 CI/CD 管道的环境创建一个设置文件。例如，要为 `dev` 环境创建 CI/CD 管道，请在 `cicd/cicd-source/config/settings/` 中创建一个 `dev.yml` 文件。

您可以通过复制示例 `demo.yml` 文件来创建设置文件。请根据您的环境调整设置。阅读文件中的内联注释以获取有关每个设置的信息。
在刚刚创建的设置文件中，将以下设置设置为`"*"`

```重击
工件S3BucketArn:“*”
工件KmsKeyArn:“*”
```

您现在可以部署 `cicd-source` 堆栈。

```重击
cd cicd/cicd-源
pnpx sls deploy --stage <环境名称>
```

### 2. 将 `cicd-pipeline` 堆栈部署到目标帐户

在 ` 中创建一个设置文件