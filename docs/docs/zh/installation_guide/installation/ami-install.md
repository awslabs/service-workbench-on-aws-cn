---
id: ami-install
title: 安装 AMIs
sidebar_label: 安装 AMIs
---

import useBaseUrl from '@docusaurus/useBaseUrl';

您可以通过创建和配置 EC2 实例或通过创建 Cloud9 实例来安装 Service Workbench。本节介绍使用这两个选项之一安装 Service Workbench 的步骤。

### 为 EC2 工作区(Workspace)安装 AMI

为了使用基于 EC2 的工作区，您必须首先为这些工作区安装 EC2 AMI。这个过程可以在 `environment-deploy.sh` 运行时并行运行。要同时运行两者，请打开另一个到您的 EC2 实例的 SSH 或 SSM 会话。
1. 为基于 EC2 的工作区构建 AMI。

     + 安装packer程序, 参考[Installing Packer](https://learn.hashicorp.com/tutorials/packer/get-started-install-cli)
     + 切换到包含机器映像源的目录并构建 AMI。确保在运行此命令之前已设置环境变量“STAGE_NAME”。
2. 在 Service Workbench `main/solution/machine-images` 目录中:
      `pnpx sls build-image -s ${STAGE_NAME}`

### 验证 AMI 是否已创建
在 Amazon EC2 服务控制台中，在左侧导航中选择 AMI。您应该会看到 EC2-LINUX、EC2-WINDOWS 和 Amazon EMR 的 AMI。

<img src={useBaseUrl('img/deployment/installation/AMI.png')} />

**警告**:每个 AMI 构建都会产生一组新的 AMI。