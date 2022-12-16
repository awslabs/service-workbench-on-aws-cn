"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[3601],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,k=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return n?o.createElement(k,r(r({ref:t},u),{},{components:n})):o.createElement(k,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9937:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],s={id:"accessing_a_workspace",title:"Accessing a Workspace",sidebar_label:"Accessing a Workspace"},c=void 0,l={unversionedId:"user_guide/sidebar/common/workspaces/accessing_a_workspace",id:"user_guide/sidebar/common/workspaces/accessing_a_workspace",title:"Accessing a Workspace",description:"You can connect to Workspaces that you have access to. To access a Workspace, follow these steps:",source:"@site/docs/user_guide/sidebar/common/workspaces/accessing_a_workspace.md",sourceDirName:"user_guide/sidebar/common/workspaces",slug:"/user_guide/sidebar/common/workspaces/accessing_a_workspace",permalink:"/service-workbench-on-aws-cn/user_guide/sidebar/common/workspaces/accessing_a_workspace",draft:!1,editUrl:"https://github.com/awslabs/go-research-on-aws/website/docs/user_guide/sidebar/common/workspaces/accessing_a_workspace.md",tags:[],version:"current",frontMatter:{id:"accessing_a_workspace",title:"Accessing a Workspace",sidebar_label:"Accessing a Workspace"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Creating a Workspace",permalink:"/service-workbench-on-aws-cn/user_guide/sidebar/common/workspaces/create_workspace_study"},next:{title:"Terminating a Workspace",permalink:"/service-workbench-on-aws-cn/user_guide/sidebar/common/workspaces/terminating_a_workspace"}},u={},p=[{value:"Connect to SageMaker and EMR worksapce",id:"connect-to-sagemaker-and-emr-worksapce",level:3},{value:"Connect to EC2 Linux",id:"connect-to-ec2-linux",level:3},{value:"SSH",id:"ssh",level:4},{value:"Session Manager",id:"session-manager",level:4},{value:"Connect to EC2 Windows",id:"connect-to-ec2-windows",level:3},{value:"Connect to RStudio",id:"connect-to-rstudio",level:3},{value:"Start and Stop workspace",id:"start-and-stop-workspace",level:3},{value:"Common connection issues",id:"common-connection-issues",level:3}],d={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can connect to Workspaces that you have access to. To access a Workspace, follow these steps:"),(0,i.kt)("p",null,"In the portal navigate to the ",(0,i.kt)("strong",{parentName:"p"},"Workspaces")," page using the menu on the left.\nIn the list of Workspaces, find the Workspace that you want to connect to."),(0,i.kt)("h3",{id:"connect-to-sagemaker-and-emr-worksapce"},"Connect to SageMaker and EMR worksapce"),(0,i.kt)("p",null,"Click on the ",(0,i.kt)("strong",{parentName:"p"},"Connect")," button, the Workspace must be in the ",(0,i.kt)("strong",{parentName:"p"},"Ready")," state to access it.\nThe selected studies will show up as mounted directories in the Jupyter notebook running on the workspace (EMR or SageMaker).\nThese study directories will contain files uploaded to the corresponding study.\nAny files uploaded to the study from the Service Workbench will automatically appear in the mounted study directories\nafter a short delay."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: the password for EMR instance is 'go-research-on-aws'")),(0,i.kt)("p",null,"To change the default password for Jupyter Notebook instances, contact your Solution Architect, raise an AWS support case, or follow these instructions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Generate a SHA1 hash for your password choice."),(0,i.kt)("li",{parentName:"ol"},"Locate line 51 in ",(0,i.kt)("inlineCode",{parentName:"li"},"main/solution/machine-images/config/infra/provisioners/provision-hail.sh"),":",(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("inlineCode",{parentName:"li"},"s/sha1:<salt1>:<hash1>/sha1:<salt2>:<hash2>/")),(0,i.kt)("li",{parentName:"ol"},"Update ",(0,i.kt)("inlineCode",{parentName:"li"},"<salt2>")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"<hash2>")," to match your password\u2019s corresponding values."),(0,i.kt)("li",{parentName:"ol"},"On your local repo, navigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"main/solution/machine-images"),"."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpx sls build-image -s <stage>")," to create a new AMI for EMR environment types."),(0,i.kt)("li",{parentName:"ol"},"Use the generated AMI ID in the environment type configuration key AmId. Your selected password becomes active.")),(0,i.kt)("h3",{id:"connect-to-ec2-linux"},"Connect to EC2 Linux"),(0,i.kt)("p",null,"Currently, Service Workbench supports two ways to connect EC2 Linux, SSH and Session Manager."),(0,i.kt)("h4",{id:"ssh"},"SSH"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click the connections button shown in EC2 Linux instance"),(0,i.kt)("li",{parentName:"ol"},"Click Create Key button, download the key file (This is the only chance to download the key file)"),(0,i.kt)("li",{parentName:"ol"},"Save the key file locally and run ",(0,i.kt)("inlineCode",{parentName:"li"},"chmod 600")," to restrict access to the key file"),(0,i.kt)("li",{parentName:"ol"},"Click \u2018Use this SSH Key\u2019 button and follow the instructions to link to EC2 instance"),(0,i.kt)("li",{parentName:"ol"},"If the 60 seconds count down on the page times out, simply click \u2018Use this SSH Key\u2019 button again and continue"),(0,i.kt)("li",{parentName:"ol"},"SSH to the EC2 Linux machine using the command shown on the screen. Note that you may need to adjust the path of the private key on your local machine."),(0,i.kt)("li",{parentName:"ol"},"Once you SSH, the selected studies will show up as mounted directories on the EC2 Linux instance. These study directories will contain files uploaded to the corresponding study. Any files uploaded to the study from the Service Workbench will automatically appear in the mounted study directories after a short delay.")),(0,i.kt)("h4",{id:"session-manager"},"Session Manager"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click the connections button shown in EC2 Linux instance"),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("inlineCode",{parentName:"li"},"SSM Connections"),", click ",(0,i.kt)("inlineCode",{parentName:"li"},"Connect")," to access EC2 Linux as ",(0,i.kt)("inlineCode",{parentName:"li"},"ssm-user")," user."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo su ec2-user")," to change to ",(0,i.kt)("inlineCode",{parentName:"li"},"ec2-user")," user."),(0,i.kt)("li",{parentName:"ol"},"The selected studies will show up as mounted directories on the EC2 Linux instance ",(0,i.kt)("inlineCode",{parentName:"li"},"/home/ec2-user")," folder. These study directories will contain files uploaded to the corresponding study. Any files uploaded to the study from the Service Workbench will automatically appear in the mounted study directories after a short delay.")),(0,i.kt)("h3",{id:"connect-to-ec2-windows"},"Connect to EC2 Windows"),(0,i.kt)("p",null,"Click the connections button, follow the instruction to link to the instance using a local RDP client."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: A warning message may pop up for EC2 certificate. This is a normal behavior as the EC2 Windows instance has self\nsigned SSL cert. Click continue to get connected.")),(0,i.kt)("p",null,'Once you RDP, the selected studies will show up as directories on the EC2 Windows instance in "D" drive.\nThese study directories will contain files uploaded to the corresponding study.'),(0,i.kt)("p",null,"For EC2 Windows, the selected study data is copied to the attached EBS volumes as opposed to being FUSE mounted in case of other workspace types.\nIf the selected study is writeable, the local changes are synchronized back to S3 as soon as possible."),(0,i.kt)("p",null,"It uses a custom S3 Synchronizer tool (i.e., ",(0,i.kt)("inlineCode",{parentName:"p"},"c:\\workdir\\s3-synchronizer.exe"),") tool to sync changes from S3 to local EBS volumes and vice versa."),(0,i.kt)("p",null,"Please be aware of the following limitations specific to EC2 Windows Workspace Types:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"LIMITATIONS:")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"S3 to Local Sync Limitations:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the selected study is Read-Only, any changes made under the locally mapped study directory and it's subdirectories will be ",(0,i.kt)("strong",{parentName:"li"},"LOST")," after the periodic sync. No local changes will persist."),(0,i.kt)("li",{parentName:"ul"},"There will be delay of at least the duration equal to the periodic download interval plus the download time for the S3 changes to reflect on local EBS volumes."),(0,i.kt)("li",{parentName:"ul"},"Deleting a subdirectory in studies S3 location will leave the corresponding subdirectory as empty directory on local EBS volume. ")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Local to S3 Sync Limitations:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Will not upload changes from local to S3 if there is no change in file size (bytes)"),(0,i.kt)("li",{parentName:"ul"},"Will not upload changes from local to S3 if the file is empty (i.e., zero bytes)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Conflict resolution is undefined:")," i.e., if a file is modified in S3 and locally at the same time, the behavior is undefined. Whichever change gets synchronized first may win.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"S3 Synchronizer tool:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The synchronizer is automatically started when the EC2 Windows instance is launched"),(0,i.kt)("li",{parentName:"ul"},"You can check if S3 Synchronizer tool is running or not by looking for ",(0,i.kt)("inlineCode",{parentName:"li"},"s3-synchronizer.exe")," in Windows Task Manager"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Stopping:")," To stop the synchronizer, right click on the ",(0,i.kt)("inlineCode",{parentName:"li"},"s3-synchronizer.exe")," in Windows Task Manager and select ",(0,i.kt)("inlineCode",{parentName:"li"},"End task")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Starting:")," To start the synchronizer, run the powershell script ",(0,i.kt)("inlineCode",{parentName:"li"},"c:\\workdir\\start-s3-synchronizer.ps1")," (right click, select ",(0,i.kt)("inlineCode",{parentName:"li"},"Run with Powershell"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Troubleshooting:")," View log files ",(0,i.kt)("inlineCode",{parentName:"li"},"c:\\workdir\\s3-synchronizer-stderr.txt")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"c:\\workdir\\s3-synchronizer-stdout.txt")," ")),(0,i.kt)("h3",{id:"connect-to-rstudio"},"Connect to RStudio"),(0,i.kt)("p",null,"You can connect to RStudio workspace type by using the template and AMI provided in AWS ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/RLOpenCatalyst/Service_Workbench_Templates"},"partner\u2019s repository"),". For more information about new RStudio enhancements, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/deployment/post_deployment/aws_accounts#creating-rstudio-alb-workspace"},"Create RStudio ALB workspace")," section of ",(0,i.kt)("em",{parentName:"p"},"Service Workbench Post Deployment Guide"),"."),(0,i.kt)("h3",{id:"start-and-stop-workspace"},"Start and Stop workspace"),(0,i.kt)("p",null,"EC2 Windows, EC2 Linux, RStudio and SageMaker workspaces can be stopped when not in use. Click the stop button to stop the workspace, and click the start button to start the workspace again. "),(0,i.kt)("h3",{id:"common-connection-issues"},"Common connection issues"),(0,i.kt)("p",null,"Connection to workspace is restricted to specific CIDR block."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check if your public IP is covered by the restricted CIDR block of the workspace."),(0,i.kt)("li",{parentName:"ul"},"Check if workspace type configuration has hard-coded value in field 'AccessFromCIDRBlock'. (Admin only)"),(0,i.kt)("li",{parentName:"ul"},"If you're using VPN, your public IP address might change. Try disconnect VPN, and then connect to workspace.")))}h.isMDXComponent=!0}}]);