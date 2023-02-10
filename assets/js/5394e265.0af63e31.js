"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[4032],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,f=c["".concat(p,".").concat(d)]||c[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4582:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"configuration",title:"Configuration",sidebar_label:"Configuration"},p=void 0,s={unversionedId:"deployment/pre_deployment/configuration",id:"deployment/pre_deployment/configuration",title:"Configuration",description:"**Note**: Setting the configuration is required. If you are deploying a simple installation, you can use the default configuration.",source:"@site/docs/deployment/pre_deployment/configuration.md",sourceDirName:"deployment/pre_deployment",slug:"/deployment/pre_deployment/configuration",permalink:"/service-workbench-on-aws-cn/deployment/pre_deployment/configuration",draft:!1,tags:[],version:"current",frontMatter:{id:"configuration",title:"Configuration",sidebar_label:"Configuration"}},m={},u=[{value:"Stage Name",id:"stage-name",level:2},{value:"Separately Deployable Components",id:"separately-deployable-components",level:2},{value:"Prepare Main Configuration File",id:"prepare-main-configuration-file",level:2},{value:"(Optional) Custom Domain names",id:"optional-custom-domain-names",level:2},{value:"Namespace",id:"namespace",level:2},{value:"(Optional) Prepare SDC Configuration Files",id:"optional-prepare-sdc-configuration-files",level:2}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Note"),": Setting the configuration is required. If you are deploying a simple installation, you can use the default configuration.")),(0,o.kt)("h2",{id:"stage-name"},"Stage Name"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"Stage Name")," is used to allow multiple Service Workbench deployments from the same account. The ",(0,o.kt)("strong",{parentName:"p"},"Stage Name")," will be the name of the configuration files and forms part of the name of the AWS resources created in this deployment. For limitations in ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"Amazon Simple Storage Service (Amazon S3)")," deployment buckets, the ",(0,o.kt)("strong",{parentName:"p"},"Stage Name")," should not be longer than 5 characters. Buckets are the fundamental containers in Amazon S3 for data storage."),(0,o.kt)("p",null,"You can select your own ",(0,o.kt)("strong",{parentName:"p"},"Stage Name"),"; if you are planning to deploy the solution only once, a common convention, is to use your own login. In the following sections of the guide, customized ",(0,o.kt)("strong",{parentName:"p"},"Stage Name")," is represented as ",(0,o.kt)("inlineCode",{parentName:"p"},"<stage>"),"."),(0,o.kt)("h2",{id:"separately-deployable-components"},"Separately Deployable Components"),(0,o.kt)("p",null,"The Service Workbench code is divided into multiple (currently 7) Separately Deployable Components (SDCs) with names such as ",(0,o.kt)("strong",{parentName:"p"},"backend"),", ",(0,o.kt)("strong",{parentName:"p"},"UI"),", ",(0,o.kt)("strong",{parentName:"p"},"post-deployment"),", ",(0,o.kt)("strong",{parentName:"p"},"edge-lambda"),", ",(0,o.kt)("strong",{parentName:"p"},"infrastructure"),", ",(0,o.kt)("strong",{parentName:"p"},"machine-images"),", and ",(0,o.kt)("strong",{parentName:"p"},"prepare-aster-acc"),". Each SDC has a directory in the location, ",(0,o.kt)("inlineCode",{parentName:"p"},"main/solution"),". While you can run the script that\u2019s located in the root folder of the project that deploys all SDCs in a sequence, you can also deploy each SDC separately using individual scripts."),(0,o.kt)("h2",{id:"prepare-main-configuration-file"},"Prepare Main Configuration File"),(0,o.kt)("p",null,"You can make a copy of the sample global config file, name it for your stage, and modify it. The current default values for the main configuration are stored in the default file in the directory, ",(0,o.kt)("inlineCode",{parentName:"p"},"main/config/settings/.defaults.yml"),". If the stage-named settings file is not available, the values are read from this default file."),(0,o.kt)("p",null,"To create a custom (stage-named) settings file, in the directory, ",(0,o.kt)("inlineCode",{parentName:"p"},"main/config/settings"),", copy ",(0,o.kt)("inlineCode",{parentName:"p"},"example.yml")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"<stage>.yml")," and edit this new file. Default values are read from ",(0,o.kt)("inlineCode",{parentName:"p"},".defaults.yml")," unless the values are overridden in this file and have the values described in ",(0,o.kt)("strong",{parentName:"p"},"Table 2"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"Configuration")),(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"Value")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"awsRegion"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"us-east-1"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"awsProfile"),(0,o.kt)("td",{parentName:"tr",align:"left"},"No default; set this to your current AWS profile unless using a default or instance profile.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"solutionName"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"sw"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"envName"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Same as stage name.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"envType"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"prod"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"enableExternalResearchers"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"false"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Table 2: Configuration Values"))),(0,o.kt)("h2",{id:"optional-custom-domain-names"},"(Optional) Custom Domain names"),(0,o.kt)("p",null,"To use a custom domain name, provide the following two values, (1) the domain name itself (2) the ARN for the manually-created TLS certificate to use from ACM."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"domainName: `host.domain.toplevel`\n\ncertificateArn: `<ARN>`\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Note"),": The current implementation assumes that DNS is handled elsewhere; a future improvement will automatically handle creation of the cert and Route53 entries.")),(0,o.kt)("h2",{id:"namespace"},"Namespace"),(0,o.kt)("p",null,"The name of many deployed resources include a namespace string such\nas ",(0,o.kt)("inlineCode",{parentName:"p"},"mystage-va-sw"),". This string is made up by concatenating the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Environment name"),(0,o.kt)("li",{parentName:"ul"},"Region short name (eg: ",(0,o.kt)("inlineCode",{parentName:"li"},"va")," for US-East-1, ",(0,o.kt)("inlineCode",{parentName:"li"},"or")," for US-West-2,\ndefined in ",(0,o.kt)("inlineCode",{parentName:"li"},".defaults.yml"),")"),(0,o.kt)("li",{parentName:"ul"},"Solution name")),(0,o.kt)("h2",{id:"optional-prepare-sdc-configuration-files"},"(Optional) Prepare SDC Configuration Files"),(0,o.kt)("p",null,"Each SDC has a ",(0,o.kt)("inlineCode",{parentName:"p"},"config/settings")," directory, where you can place customized settings. Settings files are named after your ",(0,o.kt)("strong",{parentName:"p"},"Stage Name"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"<mystagename.yml>"),". Some of the SDC settings directories contain an ",(0,o.kt)("inlineCode",{parentName:"p"},"example.yml")," file that may be copied and renamed as a settings file for that SDC. Otherwise, a default file ",(0,o.kt)("inlineCode",{parentName:"p"},".defaults.yml")," in that directory is read and used regardless of the ",(0,o.kt)("strong",{parentName:"p"},"Stage Name"),"."))}d.isMDXComponent=!0}}]);