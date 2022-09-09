"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[1999],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9201:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=(n(4996),["components"]),l={id:"index",title:"Deploying Service Workbench",sidebar_label:"Deploying Service Workbench"},c=void 0,s={unversionedId:"deployment/deployment/index",id:"deployment/deployment/index",title:"Deploying Service Workbench",description:"This section describes the process for deploying the Service Workbench.",source:"@site/docs/deployment/deployment/index.md",sourceDirName:"deployment/deployment",slug:"/deployment/deployment/",permalink:"/service-workbench-on-aws-cn/deployment/deployment/",draft:!1,editUrl:"https://github.com/awslabs/go-research-on-aws/website/docs/deployment/deployment/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Deploying Service Workbench",sidebar_label:"Deploying Service Workbench"}},p={},m=[{value:"Run the Main Deployment Script",id:"run-the-main-deployment-script",level:2},{value:"Deploy the Machine Images SDC",id:"deploy-the-machine-images-sdc",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section describes the process for deploying the Service Workbench."),(0,a.kt)("h2",{id:"run-the-main-deployment-script"},"Run the Main Deployment Script"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run the main deployment script using the command below. It takes 15-20 minutes to execute the command:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"scripts/environment-deploy.sh <stage>\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"After the deployment completes successfully, make a note of its ",(0,a.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cloudfront/?nc2=type_a"},"Amazon CloudFront")," URL and the ",(0,a.kt)("strong",{parentName:"li"},"root")," password. You can also retrieve this information later by running the following command: ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"scripts/get-info.sh <stage>\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Log in to your Service Workbench deployment using the ",(0,a.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cloudfront/?nc2=type_a"},"Amazon CloudFront")," URL and root user credentials. The ",(0,a.kt)("strong",{parentName:"li"},"root")," user must be used only to create administrators. For more information, see ",(0,a.kt)("a",{parentName:"li",href:"/deployment/post_deployment/index"},"Post Deployment"),".")),(0,a.kt)("h2",{id:"deploy-the-machine-images-sdc"},"Deploy the Machine Images SDC"),(0,a.kt)("p",null,"The machine images SDC provides the ability to launch Amazon EC2 images from within Service Workbench. The default Service Workbench installation currently provides ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/sagemaker/?nc2=type_a"},"Amazon Sagemaker"),", ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/emr/?nc2=type_a&whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc"},"Amazon EMR"),", and Linux-based and Windows-based Amazon EC2 as workspace options. The Amazon EC2 and Amazon EMR options will not be available unless you create the corresponding machine images."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"Note"),": You can create your own machine image if you do not wish to use the ones included in this SDC.")),(0,a.kt)("p",null,"To deploy the machine images SDC, follow the steps outlined in the readme file located in ",(0,a.kt)("inlineCode",{parentName:"p"},"main/solution/machine-images/README.md"),". Additionally, perform the following actions: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install Packer 1.6.0 by using ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/iamhsa/pkenv"},"pkenv"),". Packer 1.6.0 creates a custom AMI that is uploaded to the Service Workbench deployment."),(0,a.kt)("li",{parentName:"ol"},"Change directory to ",(0,a.kt)("inlineCode",{parentName:"li"},"/main/solution/machine-images"),". "),(0,a.kt)("li",{parentName:"ol"},"Run the command below. The command takes approximately 15 minutes to complete: ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpx sls build-image -s <mystage>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"}," If the above command does not work, you might have to fetch the custom AMI package created in step 1 with ",(0,a.kt)("inlineCode",{parentName:"strong"},"curl")," or ",(0,a.kt)("inlineCode",{parentName:"strong"},"wget"),", unzip the package, and copy it to the ",(0,a.kt)("inlineCode",{parentName:"strong"},"directory /usr/local/bin"),". Resume from step 2."))),(0,a.kt)("p",null,"For examples of how to build a custom AMI, refer to the following scripts:"),(0,a.kt)("p",null,"\u2013\t",(0,a.kt)("inlineCode",{parentName:"p"},"config/infra/packer-ec2-<platform>-workspace.json")),(0,a.kt)("p",null,"\u2013\t",(0,a.kt)("inlineCode",{parentName:"p"},"config/infra/provisioners/provision-hail.sh")))}d.isMDXComponent=!0}}]);