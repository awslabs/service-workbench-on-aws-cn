---
id: install_problems
title: Troubleshoot installation issues
sidebar_label: During install
---
## Environment error during AWS Cloud9 install
![environment error](/img/enverror.png)
![failed to create environment](/img/failedtocreate.png)
Choose **Return to dashboard** to view the error reason. Re-try installation with the designated AWS Region selected for subnet.

## Install node version 14
    npm install -g n
    mkdir ~/.local
    N_PREFIX=$HOME/.local n 14
    sudo rm -rf /usr/local/node
    echo ‘export PATH=”$HOME/.local/bin:$PATH”’ >> ~/.bashrc
Close the current terminal and open a new terminal. Confirm the node version.

## Error logging into Service Workbench after install
![error logging in](/img/errorloggingin.png)  
Run the deploy script again.

## IAM role unavailable when creating EC2 instance
Choose the refresh button if the IAM role with admin permissions is unavailable. If it still does not appear, restart the creation of the EC2 instance.
:::note Tip
Best practice is to set up the IAM role before creating the EC2 instance.
:::
