---
id: ami-install
title: Installing AMIs
sidebar_label: Installing AMIs
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can install Service Workbench either by creating and configuring an EC2 instance or by creating a Cloud9 instance. This section describes the steps to install Service Workbench by using either of the two options.

### Installing AMIs for EC2 Workspace

In order to use EC2-based Workspaces, you must ﬁrst install EC2 AMIs for these Workspaces.
1. Build AMIs for EC2-based workspaces. This takes up to 15 minutes and may run in parallel with the main install script.

     + Install packer from the root of your home directory, refer [Installing Packer](https://learn.hashicorp.com/tutorials/packer/get-started-install-cli):
     + Change to the directory containing the machine image source and build the AMIs. Ensure that the environment variable `STAGE_NAME` has been set before running this command. 
2. Verify that the AMIs have been created. In the Service Workbench `/main/solutions/machine-images` directory:

      `pnpx sls build-image -s ${STAGE_NAME}`

In the Amazon EC2 service console, select AMI in the left-hand navigation. You should see AMIs for EC2-LINUX, EC2-RSTUDIO, EC2-WINDOWS, and Amazon EMR.

<img src={useBaseUrl('img/deployment/installation/AMI.png')} />

**Warning**: Each AMI build results in a new set of AMIs.
