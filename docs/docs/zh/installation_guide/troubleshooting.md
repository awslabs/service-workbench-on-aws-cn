---
id: troubleshooting
title: 故障排查
sidebar_label: 故障排查
---

**问题**：运行 `scripts/environment-deploy.sh $STAGE` 失败，并显示消息 `Uploaded file must be an non-empty zip`。

**解决方案**：出现此问题的原因是 [https://github.com/aws/aws-cdk/issues/12536](https://github.com/aws/aws) 中描述的 AWS CDK 的一个已知问题-cdk/issues/12536）。您需要将“Node.js”更新/下补丁到 12.x 版本。

**问题**：以 root 用户身份安装 Service Workbench 时出现依赖性问题。

**解决方案**：安装 Service Workbench 时使用 `ec2-user`。如果您以 root 用户身份安装，您可能会遇到依赖性问题。

**问题**：构建机器映像挂起并且无法在终端中产生任何输出。

**解决方法**：检查您是否有一个默认 VPC，并且它连接了一个互联网网关。如果默认 VPC 不可用或无法创建，则您可以手动创建连接互联网的 VPC。复制 `/main/solution/machine-images/config/settings/example.yml` 为您的 stage 创建类似的配置文件。在此文件中，为您的自定义 VPC 指定 `VPCId` 和 `subnetId`。