---
id: cloud9
title: Installation using AWS Cloud9
sidebar_label: Using AWS Cloud9
---

Installation of Service Workbench using AWS Cloud9 offers a shorter path to getting started. Use this method if you are not already using EC2.

## Create the AWS Cloud9 instance
1.	Go to the AWS Cloud9 product page. 
2.	Choose **Create environment**.
3.	Enter a name and description for the AWS Cloud9 environment.
4.	Choose **Next step**.
5.	Configure your Environment settings:  
    a. Environment type—Create a new EC2 instance for environment (direct access)  
    b. Instance type—m5.large  
    c. Platform—Amazon Linux 2  

:::note 
Keep all other settings in the default selections.
:::
6. Choose **Next step**.
7.	Review your environment name and settings and click Create environment.

Your environment should load a welcome screen and command line interface.

## Modify the volume
1.	In the Cloud9 menu, choose **Go To Your Dashboard**. 
2.	Use the **Services** menu to go to **EC2**.
3.	From the left navigation, choose **Volumes**.
4.	Select the volume associated with your AWS Cloud9 instance.
5.	From the **Actions** menu, choose **Modify Volume**.
6.	Increase the size to at least 40 GB.
7.	Choose **Modify**, and then choose **Modify** again to confirm.

For more information about modifying the volume, see [Resize an Amazon EBS volume used by an environment.](https://docs.aws.amazon.com/cloud9/latest/user-guide/move-environment.html#move-environment-resize)


## Configure the AWS Cloud9 environment
Return to the AWS Cloud9 command line environment to complete the following steps.

1.	Verify the file size by entering the command:
```df -hT```
2.	To increase the partition size, enter:
```sudo growpart /dev/nvme0n1 1```
3.	Increase the file system inside the partition:
```sudo xfs_growfs -d /```
4.	Verify that the file size increased by entering:
```df -hT```
5.	Check the node version by entering:
```node --version```

:::caution Important
Node.js v14.x is required. If you must revert to v14.x, see the steps in .
:::

6.	Install the node package manager:
```npm install -g pnpm```
7.	A serverless packer is necessary to build AMIs. Follow the [README](https://github.com/awslabs/service-workbench-on-aws/blob/b20208099d5acf51816ee4efd5b5bb3bf6d22fc8/addons/addon-base-raas/packages/serverless-packer/README.md) instructions to install. Open a new terminal window after you complete the installation.


## Clone the GitHub directory
1.	From the terminal, clone the GitHub directory:
```git clone https://github.com/awslabs/service-workbench-on-aws.git```  
The Git directory is now available on your instance.
2.	Ensure you are working from the service-workbench-on-aws folder for the remainder of the process:
```cd service-workbench-on-aws/```


## Prepare the environment file
1.	From the toggletree, navigate to select **example.yml**:
**main**> **config** > **settings** > **example.yml**
2.	Copy the example.yml file and rename it.   
**Example:** dev.yml
3.	In the copied file, uncomment the following:  
    a. **awsRegion:** us-east-1  
    b. **solutionName:** sw  
    c. **envType:** dev  
    d. **createServiceCatalogPortfolio:** true
 
4.	Save the copied file.


## Run the install script
1.	Ensure you are working from the service-workbench-on-aws folder:
```cd service-workbench-on-aws/```
2.	Deploy the install script:
```scripts/environment-deploy.sh <copied file name>```  
**Example:** ```scripts/environment-deploy.sh dev```

The install may take up to an hour. Once successfully installed you will receive a success message and login details.

For more information about logging in to Service Workbench, see [Login and setup user account].

### hello
    jhjhg hj