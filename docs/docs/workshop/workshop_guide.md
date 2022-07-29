---
id: workshop_guide
title: 动手实践
sidebar_label: 动手实践
---

Service Workbench on AWS 是一种云解决方案，可提供对数据、工具和计算能力的安全访问。 使用 Service Workbench，研究人员可以在安全且经过配置的环境中进行研究。 Service Workbench 支持创建基本的研究设置。 它简化了数据访问并提供了成本透明度。
Service Workbench on AWS 的详细介绍请参考[Service Workbench](../zh/introduction)

该手动实践默认在 **cn-northwest-1** region 进行。

## 前提条件

- 准备AWS账户，启用AWS成本管理器，请参考[AWS 账户准备](../zh/installation_guide/installation/pre-installation/tool-req)

- 准备一个 ICP 许可的域名

- 准备 OIDC 供应商, 目前我们支持Authing， KeyCloak on AWS 和 Okta， workshop以Authing 为例进行实验，参考[Authing申请](../zh/installation_guide/installation/pre-installation/oidc-providers#authing-option-authingcn-oidc-客户端) 创建一个Authing application和root user

- 在 **cn-northwest-1** 准备一个 Linux EC2 Instance，并在 EC2 instance 上安装所需要的软件，后续将通过该 EC2 instance 部署 Service Workbench   
    - 启动一个Linux EC2 Instance， 
        - AMI选择 **Amazon Linux 2 AMI (HVM) - Kernel 5.10, SSD Volume Type**
        - 类型: **t2.medium**
        - EBS 建议40 GB
    - 创建一个IAM user，授权**AdministratorAccess** 权限，保存AK/SK
    - SSH 到 EC2 Instance, 配置aws config 和 credentials, 执行下面命令，并填入相关信息 
        ```
        aws configure
        ```

    - 安装必要的软件
        ```
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
        source ~/.bashrc
        nvm install 14
        npm install -g pnpm@5.18.9
        npm install -g serverless hygen

        sudo yum install golang
        ```

        执行下面命令验证是否安装成功
        ```
        serverless -v
        go version
        ```



## 部署 Service Workbench

- 通过 EC2 Instance 部署 Service Workbench
    - 获取 Service Workbench 源码
    ```
    sudo yum install -y git
    cd ~
    git clone https://github.com/awslabs/service-workbench-on-aws-cn.git
    ```

    - 准备Stage Name环境变量和Stage配置文件
    ```
    echo 'export STAGE_NAME=dev' >> ~/.bashrc 
    source ~/.bashrc
    cd ~/service-workbench-on-aws-cn/main/config/settings
    cp workshop-cn.yml ${STAGE_NAME}.yml
    ```      

    - 配置${STAGE_NAME}.yml 文件,请确保设定如下配置：
    ```        
    oidcIssuer: xxx
    oidcClientId: xxx
    
    rootUserEmail: xxx
    rootUserFirstName: xxx
    rootUserLastName: xxx    

    hostedZoneId: 
    domainName: 
    ```

    - 部署Service Workbench
    ```
    cd ~/service-workbench-on-aws-cn
    go env -w GO111MODULE=on
    go env -w GOPROXY=https://goproxy.cn,direct    
    ./scripts/environment-deploy.sh ${STAGE_NAME}
    ```
    部署大概15 ~ 20分钟，如果出现下面的输出，代码Service Workbench部署成功
    [![](img/swb-deploy-success.png)](img/swb-deploy-success.png)

    部署成功后访问`Website URL` 域名，如果出现登陆页面这代表部署成功

## 使用 Service Workbench
- 添加一个Researcher 用户，参考[添加一个用户](../zh/user_guide/sidebar/admin/users/add_federate_user.md)

- 添加一个AWS Account，参考[添加一个AWS Account](../zh/user_guide/sidebar/admin/accounts/aws_accounts/invite_member_account)

- 创建一个索引，参考[创建一个索引](../zh/user_guide/sidebar/admin/accounts/indexes/create_new_index)

- 创建一个Project，参考[创建一个Project](../zh/user_guide/sidebar/admin/accounts/projects/create_project)

- 将Project授权给用户，参考[授权Project给用户](../zh/user_guide/sidebar/admin/accounts/projects/add_user_to_project)

<a name="import_type"></a>

- 导入内置的workspace type

    - 导入 Sagemaker workspace type, 参考[导入Sagemaker](../zh/post_deployment/import_service_catalog_products#amazon-sagemaker-的配置)
    
    - 导入 Amazon EC2 Linux workspace type, 参考[导入Workspace](../zh/post_deployment/import_service_catalog_products#导入工作区)

- 创建一个Study，参考[Studies](../zh/user_guide/sidebar/common/studies/introduction)

- 创建一个workspace，将study data自动mount到workspace中

- 访问workspace
    - 访问 Amazon EC2 Linux workspace
    - 访问 Sagemaker workspace

- 结束workspace， 参考[结束Workspace](../zh/user_guide/sidebar/common/workspaces/terminating_a_workspace) 

## 生成 Workspace 需要使用的 AMIs
本章节介绍如何通过 packer生成AMIs，包括 EC2 Linux和 EC2 Windows，详细说明参考[安装AMIs](../zh/installation_guide/installation/ami-install)
- 安装 Packer
```
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://rpm.releases.hashicorp.com/AmazonLinux/hashicorp.repo
sudo yum -y install packer
```   
- 生成 AMIs
```
cd ~/service-workbench-on-aws-cn/main/solution/machine-images
pnpx sls build-image -s ${STAGE_NAME}
```

## 创建 Rstudio Workspace
RStudio workspace type 使用了AWS合作伙伴提供的模版和AMI，详细内容请[Rstudio Workspace](../zh/installation_guide/installation/rstudio.md)
- 获取 Rstudio 代码
```
cd ~
git clone https://github.com/RLOpenCatalyst/Service_Workbench_Templates.git
```
- 访问 [Parameter Store](https://cn-northwest-1.console.amazonaws.cn/systems-manager/parameters?region=cn-northwest-1),获取 `workshop/jwt/secret` 的值。
- 创建secret.txt 文件，内容为`workshop/jwt/secret` 的值. 
```
cd ~/Service_Workbench_Templates/RStudio/machine-images/config/infra/files/rstudio
vi secret.txt
```
- Build Rstudio AMI
    - 安装 packer, 参考[Install Packer](https://learn.hashicorp.com/tutorials/packer/get-started-install-cli)
    ```
    sudo yum install -y yum-utils
    sudo yum-config-manager --add-repo https://rpm.releases.hashicorp.com/AmazonLinux/hashicorp.repo
    sudo yum -y install packer
    ```
    - 配置`~/Service_Workbench_Templates/RStudio/machine-images/config/infra/configuration.json` 中的下列配置项
    ```
        "aws_access_key": "xxx",
        "aws_secret_key": "xxx",
        "awsRegion": "cn-northwest-1",
        "vpcId": "xxx",
        "subnetId": "xxx",
        "amiName": "Rstudio",
        "awsProfile": "default",
        "stageName": "dev"
    ```
    其中vpcId和subnetId填入default的VPC和Subnet即可。

    - Build Rstudio AMI
    ```
    cd ~/Service_Workbench_Templates/RStudio/machine-images/config/infra
    nohup packer build -var-file=configuration.json packer-ec2-rstudio-workspace.json >> ~/nohup.log 2>&1 &
    tail -f ~/nohup.log 
    ```

- 将Rstudio workspace template导入到Service Workbench中
    - 拷贝 `~/service-workbench-on-aws-cn/main/config/settings/$STAGE_NAME.yml` 到 `~/Service_Workbench_Templates/RStudio/machine-images/config/infra`
    ```
    cp ~/service-workbench-on-aws-cn/main/config/settings/$STAGE_NAME.yml ~/Service_Workbench_Templates/RStudio/machine-images/config/infra
    ```
    - 访问 [service Catalog Portfolio](https://cn-northwest-1.console.amazonaws.cn/servicecatalog/home?region=cn-northwest-1#portfolios/?activeTab=localAdminPortfolios) 获取在部署Service Workbench过程中生成的`dev-nx-workshop` Portfolio Id.
    - 添加`portfolioId`和`awsProfile`到 `~/Service_Workbench_Templates/RStudio/machine-images/config/infra/$STAGE_NAME.yml` 的最后，内容如下：
    ```
    portfolioId: port-xxx
    awsProfile: default
    ```
    - 导入 Rstudio workspace template
    ```
    cd ~/Service_Workbench_Templates/RStudio/machine-images/config/infra/
    pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple -r requirements.txt
    python3 create-rstudio.py
    ```
    访问 [service Catalog Portfolios](https://cn-northwest-1.console.amazonaws.cn/servicecatalog/home?region=cn-northwest-1#portfolios/?activeTab=localAdminPortfolios)， 查看`EC2-RStudio-Server`是否已经添加成功

- 配置Rstudio Workspace type
    - 访问[Amazon Certificate Manager](https://cn-northwest-1.console.amazonaws.cn/acm/home?region=cn-northwest-1#/certificates/list)， 创建一个证书。
        在`Fully qualified domain name`添加 `Service Workbench Domain`和`*.Service Workbench Domain`.
    - 点击进入证书，将`Domains` 中的`CNAME name` 和 `CNAME value` 保存。
    - 访问[Route 53](https://cn-northwest-1.console.amazonaws.cn/route53/v2/hostedzones), 在之前创建好的Host Zone中创建一个 CNAME 类型的记录，记录名为上面创建的证书中的`CNAME name`，值为`CNAME value`.
    - 返回[Amazon Certificate Manager](https://cn-northwest-1.console.amazonaws.cn/acm/home?region=cn-northwest-1#/certificates/list)，等待证书状态变成`已颁发`状态
    - 参考 [导入 Workspace type](#import_type)，将EC2-RStudio-Server Workspace type导入，并配置Workspace Type, 需要填入下列配置：
    ```
    ACMSSLCertARN
    AmiId
    InstanceType
    ```


## 导入自定义的 workspace 模版
Service Workbench 除了内置的workspace template以外，还支持客户自定义workspace template，本章节将动手添加一个workspace template。
跟随手动实践创建一个内置反欺诈实验的Sagemaker Workspace Type
- 准备定制的workspace 模版

    - 准备模版中需要的反欺诈 Jupyter Notebook 脚本
    ```
    cd ~
    git clone https://github.com/awslabs/realtime-fraud-detection-with-gnn-on-dgl.git
    cp -r ~/realtime-fraud-detection-with-gnn-on-dgl/src/sagemaker ~/service-workbench-on-aws-cn/main/solution/post-deployment/config/environment-files/
    ```

    - 准备为SageMaker Notebook中提前预设环境所需要的脚本，在`~/service-workbench-on-aws-cn/main/solution/post-deployment/config/environment-files/` 路径下创建 `customize.sh` 文件，内容如下：
    ```
    #!/bin/bash
    set -e
    sudo -u ec2-user -i <<'EOF'
    cp -rf /usr/local/share/workspace-environment/sagemaker ~/SageMaker/
    cd ~/SageMaker/
    echo 'DGL == 0.6.*
    SageMaker >= 2.40.0, < 3.0.0
    awscli >= 1.18.140
    torch >= 1.6.0, < 1.7.0
    pandas
    sklearn
    matplotlib' >> requirements.txt

    nohup pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple -r requirements.txt &
    EOF
    ```

    - 以内置的SageMaker Workspace type为基础创建定制模版
    ```
    cd ~/service-workbench-on-aws-cn/addons/addon-base-raas/packages/base-raas-cfn-templates/src/templates/service-catalog/
    cp sagemaker-notebook-instance.cfn.yml sagemaker-notebook-instance-customize.cfn.yml
    ```
    - 添加定制的内容到`sagemaker-notebook-instance-customize.cfn.yml`

        - 在`OnStart:` section 中添加定制内容, 包括下载上面创建的customize.sh脚本以及执行该脚本：
        ```
                    Fn::Base64: !Sub |
                    ...
    
                    aws s3 cp --region "${AWS::Region}" "${EnvironmentInstanceFiles}/customize.sh" "/tmp"
                    chmod 500 "/tmp/customize.sh"
                    /tmp/customize.sh
        ```

        - 在sagemaker-notebook-instance-customize.cfn.yml模版授权role必要的权限

            - 添加下面权限给InstanceRolePermissionBoundary

            ```
                      - Effect: Allow
                        Action: 'ecr:*'
                        Resource: '*'
            ```
            - 授权 `IAMRole` 权限, 创建下面的policy

            ```
                    - PolicyName: !Join ['-', [Ref: Namespace, 'customize-policy']]
                      PolicyDocument:
                        Version: '2012-10-17'
                        Statement:
                        - Effect: 'Allow'
                            Action: 's3:*'
                            Resource: !Sub 'arn:${AWS::Partition}:s3:::aws-gcr-solutions-assets/*'
                        - Effect: 'Allow'
                            Action: 'ecr:GetAuthorizationToken'
                            Resource: '*'
                        - Effect: 'Allow'
                            Action: 'ecr:BatchGetImage'
                            Resource: '*'                      
            ```

- 将模版导入Service Catalog
    - 将模版添加到Service Workbench 配置文件中
    ```
    cd ~/service-workbench-on-aws-cn/addons/addon-base-raas/packages/base-raas-post-deployment/lib/steps/
    vi create-service-catalog-portfolio.js
    ```
    内容如下到 `productsToCreate` 列表中：
    ```
      {
        filename: 'sagemaker-notebook-instance-customize',
        displayName: 'Sagemaker Customize',
        description: `An Amazon SageMaker Jupyter Notebook \n* Realtime Fraud Detection with Gnn On Dgl`,
      },
    ```

    - 将新创建的导入到Service Workbench中
    ```
    cd ~/service-workbench-on-aws-cn
    ./scripts/environment-deploy.sh ${STAGE_NAME}

    ```

    部署完成之后以Admin的身份访问Service Workbench， 进入`Workspace Types`, 如果页面显示`Sagemaker Customize` Workspace type, 代表定制的模版已经部署到了Service Workbench，参考 [导入 Workspace type](#import_type) 导入workspace type 进行即可。


## 删除 Service Workbench
参考[卸载 Service Workbench](../zh/installation_guide/uninstall) 卸载Service Workbench
