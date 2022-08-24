"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[1638],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2865:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"components",title:"Service Workbench installation components",sidebar_label:"Installation components"},s=void 0,c={unversionedId:"installation_guide/components",id:"installation_guide/components",isDocsHomePage:!1,title:"Service Workbench installation components",description:"Serverless framework and projects",source:"@site/docs/installation_guide/components.md",sourceDirName:"installation_guide",slug:"/installation_guide/components",permalink:"/service-workbench-on-aws-cn/installation_guide/components",editUrl:"https://github.com/awslabs/go-research-on-aws/website/docs/installation_guide/components.md",tags:[],version:"current",frontMatter:{id:"components",title:"Service Workbench installation components",sidebar_label:"Installation components"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Service Workbench architecture",permalink:"/service-workbench-on-aws-cn/installation_guide/architecture"},next:{title:"Overview",permalink:"/service-workbench-on-aws-cn/installation_guide/installation/pre-installation/overview"}},u=[{value:"Serverless framework and projects",id:"serverless-framework-and-projects",children:[],level:3},{value:"Continuous integration/continuous delivery",id:"continuous-integrationcontinuous-delivery",children:[],level:3}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"serverless-framework-and-projects"},"Serverless framework and projects"),(0,o.kt)("p",null,"Service Workbench on AWS is a serverless environment that is deployed using an event-driven API framework. Its components are spread across ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/operatorguide/intro.html"},"AWS Lambda")," instances, static webpages using ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/cloudfront/"},"Amazon CloudFront"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html"},"Amazon S3"),". It can use Amazon Cognito for authentication. Service Workbench relies on ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/servicecatalog/?aws-service-catalog.sort-by=item.additionalFields.createdDate&aws-service-catalog.sort-order=desc"},"AWS Service Catalog")," to host and manage ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html"},"AWS CloudFormation")," templates that define the Workspaces. Service Workbench contains five serverless projects. You can find these components under the ",(0,o.kt)("inlineCode",{parentName:"p"},"<service_workbench>/main/solution")," directory."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Component"),(0,o.kt)("th",{parentName:"tr",align:null},"Installation Directory"),(0,o.kt)("th",{parentName:"tr",align:null},"What does it contain?"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Infrastructure"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"solution/infrastructure/")),(0,o.kt)("td",{parentName:"tr",align:null},"The following AWS resources are created as part of this component deployment:",(0,o.kt)("br",null),(0,o.kt)("ul",null,(0,o.kt)("li",null,"S3 bucket is used for logging the following actions:",(0,o.kt)("ul",null,(0,o.kt)("li",null," Studying data uploads."),(0,o.kt)("li",null,"Accessing CloudFormation templates\u2019 bucket."),(0,o.kt)("li",null,"Accessing CloudFront distribution service."),(0,o.kt)("li",null,"Hosting the static Service Workbench website.")),(0,o.kt)("li",null,"CloudFront distribution service to accelerate Service Workbench website access based on user location."))))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Backend"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"solution/backend/")),(0,o.kt)("td",{parentName:"tr",align:null},"After the environment has been deployed, the backend component creates and configures the following AWS resources:",(0,o.kt)("br",null),(0,o.kt)("b",null,"S3 bucket"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Stores uploaded study data. This bucket also receives an encryption key from ",(0,o.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/kms/latest/developerguide/overview.html"},"AWS Key Management Service")," for encrypting this data and making it available to the Service Workbench website."),(0,o.kt)("li",null,"Stores bootstrap scripts. These scripts are used to launch the Workspace instances like SageMaker, EC2, Amazon EMR."),(0,o.kt)("li",null,"Sets up IAM roles and policies for accessing Lambda functions and invoking step functions.")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html"},"Amazon DynamoDB")),(0,o.kt)("td",{parentName:"tr",align:null},"Backend SDC creates DynamoDB tables"),(0,o.kt)("td",{parentName:"tr",align:null},"Stores information concerning user authentication, AWS accounts, workflows, access tokens, study data etc. This component is also responsible for deploying the following Lambda functions/services:",(0,o.kt)("br",null),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Authentication layer handler - Handles the authentication layer for API handlers."),(0,o.kt)("li",null,"Open data scrape handler - Handles scraping the metadata from the AWS open data registry."),(0,o.kt)("li",null,"API handler - Provides a path for public and protected API operations."),(0,o.kt)("li",null,"Workflow loop runner - Invoked by AWS Step Functions.")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Edge Lambda"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"main/solution/edge-lambda")),(0,o.kt)("td",{parentName:"tr",align:null},"An inline JavaScript interceptor function that adds security headers to the CloudFront output response. This function is declared inline because the code requires API Gateway URL for the backend API operations.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Machine images"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"solution/machine-images/")),(0,o.kt)("td",{parentName:"tr",align:null},"Deploys spot instances using machine images for EC2 and Amazon EMR templates.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Prepare master accounts"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"main/solution/prepare-master-acc")),(0,o.kt)("td",{parentName:"tr",align:null},"Creates a master IAM role for organization access.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Post deployment"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"solution/post-deployment/")),(0,o.kt)("td",{parentName:"tr",align:null},"Creates an IAM role for the post deployment function with policies granting permission to S3 buckets, DynamoDB tables, KMS encryption key, CloudFront, and Lambda functions.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"User interface"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"solution/ui/")),(0,o.kt)("td",{parentName:"tr",align:null},"Contains code used to create and support the UI functionality of the application.")))),(0,o.kt)("h3",{id:"continuous-integrationcontinuous-delivery"},"Continuous integration/continuous delivery"),(0,o.kt)("p",null,"Service Workbench includes the continuous integration/continuous delivery feature:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cicd/cicd-pipeline/serverless.yml")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cicd/cicd-source/serverless.yml"))))}p.isMDXComponent=!0}}]);