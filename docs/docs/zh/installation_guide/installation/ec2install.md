---
id: ec2install
title: 使用 EC2 实例安装 Service Workbench
sidebar_label: 使用 EC2 实例安装 Service Workbench
---

1. 运行以下命令，下载 AWS 上的 Service Workbench 源代码:
```
sudo yum install -y git
git clone https://github.com/awslabs/service-workbench-on-aws-cn.git
```

2. 创建一个主 Service Workbench on AWS 配置文件。操作如下:

      a. 创建一个包含安装Stage name的环境变量。Stage name包含在 Amazon S3 存储桶的名称中。因此，它必须与 S3 兼容。
      
      例如：
      `export STAGE_NAME=dev`

      **注意**：在打开新的终端窗口时设置环境变量。

      b. 在主配置目录 (`main/config/settings`) 中，使用建议的Stage name demo 复制示例配置文件。这将创建 `dev.yml` 文件。
      
      `cp example.yml ${STAGE_NAME}.yml`
   
      c. 在新创建的配置文件中，取消注释并设置以下值:<br />
       - awsRegion（例如，`us-east-1` 或 `eu-west-2`）。确保在使用 AWS 管理控制台时使用相同的区域。<br />
       - 解决方案名称（例如，`sw`）。解决方案名称用于 S3 存储桶名称，因此必须与 S3 兼容。<br />
       **注意**：确保在值名称前没有前导空格。

3. 运行主安装脚本。这大约需要 20 分钟。
`./scripts/environment-deploy.sh ${STAGE_NAME}`
4. 完成上述步骤后，获取 root 密码和网站 URL。您可以通过运行以下命令再次显示 URL 和 root 密码：
`scripts/get-info.sh ${STAGE_NAME}`
5. 使用用户“root@example.com”，并使用 URL 和 root的 密码验证 Service Workbench 是否正在运行。 如果您采用了OIDC IdP，请从OIDC IdP获得root 用户密码。

