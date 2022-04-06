---
id: ec2
title: Installation using an EC2 instance
sidebar_label: Using EC2
---

## Use case for installation with an EC2 instance
If you are familiar with AWS EC2 instances or already use EC2, this installation method may be best for you.

## Create an EC2 instance
If you do not already have an available EC2 instance, follow these steps to create one:
1.	From the EC2 console, choose **Launch instances**.
2.	Choose **Select** for Amazon Linux 2 AMI (HVM) – Kernel 5.10, SSD Volume Type.
3.	Select an instance of **t2.medium** or larger. 
4.	Choose **Next: Configure Instance Details**.
5.	Select an IAM role with administrative permissions. 
If you do not have an available IAM, choose **Create new IAM role**. Once you have created a role, return to Configure Instance Details and choose refresh next to IAM role. The role should now be available.
:::note 
For more information on creating IAM admin roles, see [Creating your first IAM admin user and user group](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started_create-admin-group.html).
:::
6.  Choose **Next: Add Storage**.
7.	Change the size to at least 40 GB.
8.	Choose **Review and Launch**.
9.	Review the details of your instance and choose **Launch**.
10.	Select an existing key pair or create a new key pair for your instance.
11.	Choose **Launch Instances**.

## Connect to an EC2 instance
1.	From the EC2 console, select the instance that will host Service Workbench. Choose **Connect**.
2.	Select your connection method, and follow the onscreen directions.

## Install Node and Go
### Install Node
:::caution Important
[Node.js v14.x](https://nodejs.org/en/) is required. If you need to revert to v14.x, see the steps in Troubleshooting.
:::

    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
    source ~/.bashrc
    nvm install 14
    npm install -g serverless pnpm hygen

### Install Go
    cd ~
    wget -c https://golang.org/dl/go1.15.2.linux-amd64.tar.gz
    sudo tar -C /usr/local -xvzf go1.15.2.linux-amd64.tar.gz
    echo "PATH=$PATH:/usr/local/go/bin" >> ~/.bashrc
    source ~/.bashrc
    go version

## Clone the GitHub directory
1.	From terminal, install git:  
```sudo yum install -y git```
2.	Clone the git repository:  
```git clone https://github.com/awslabs/service-workbench-on-aws.git```

## Prepare the environment file
1.	Open the Service Workbench folder:  
```cd service-workbench-on-aws/```
2.	Navigate to the main configuration directory:  
```cd main/config/settings```
3.	Make a copy of the example.yml file and rename it. For this example, we will rename the file to dev.yml.  
```cp example.yml dev.yml```
4.	Open the newly created configuration file to edit:  
```vim dev```
5.	Uncomment and set the following values:  
a.	awsRegion  
Ensure you use the same AWS Region where you use the AWS Management Console.  
b.	solutionName
6.	To quit editing, press ESC and then enter:  
```:wq```

## Run the install script
Return to the root directory before launching. If you changed the copied configuration file name to a name other than dev, use that in the place of dev.
1.	Run the installation script:  
```./scripts/environment-deploy.sh dev```
2.	Note the URL and password provided. You can display the URL and password again with:  
```scripts/get-info.sh dev```

The install may take up to an hour. Once successfully installed you will receive a success message and login details.  

![Successful install result](/img/consoleoutput.png)

Take note of the website URL and temporary password. To login to Service Workbench, paste the provided URL in your browser. Choose **Login**. Your user name will be root@example.com and the password will be the provided output at the end of the install. You will be prompted to change your password on login.