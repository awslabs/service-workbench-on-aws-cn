"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[6414],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return t?a.createElement(g,o(o({ref:n},u),{},{components:t})):a.createElement(g,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},545:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],l={id:"ec2install",title:"Installing Service Workbench using EC2 instance",sidebar_label:"Installation using EC2 instance"},s=void 0,c={unversionedId:"installation_guide/installation/ec2install",id:"installation_guide/installation/ec2install",title:"Installing Service Workbench using EC2 instance",description:"1. Download the Service Workbench on AWS source code using this link and then run the following commands:",source:"@site/docs/installation_guide/installation/ec2install.md",sourceDirName:"installation_guide/installation",slug:"/installation_guide/installation/ec2install",permalink:"/service-workbench-on-aws-cn/installation_guide/installation/ec2install",draft:!1,tags:[],version:"current",frontMatter:{id:"ec2install",title:"Installing Service Workbench using EC2 instance",sidebar_label:"Installation using EC2 instance"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Installing AMIs",permalink:"/service-workbench-on-aws-cn/installation_guide/installation/ami-install"},next:{title:"Installing using Cloud9",permalink:"/service-workbench-on-aws-cn/installation_guide/installation/cloud9install"}},u={},p=[],m={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download the Service Workbench on AWS source code using this link and then run the following commands:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo yum install -y git\ngit clone https://github.com/awslabs/service-workbench-on-aws-cn.git\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a main Service Workbench on AWS con\ufb01guration \ufb01le for your installation. To do this:"),(0,i.kt)("p",{parentName:"li"},"  a. Create an environment variable holding the stage name of your installation. The stage name is included in the name of the Amazon S3 storage bucket. Hence, it must be S3-compatible."),(0,i.kt)("p",{parentName:"li"},"  Example:\n",(0,i.kt)("inlineCode",{parentName:"p"},"export STAGE_NAME=dev")),(0,i.kt)("p",{parentName:"li"},"  Note: Set the environment variable when you open a new terminal window."),(0,i.kt)("p",{parentName:"li"},"  b. In the main con\ufb01guration directory (",(0,i.kt)("inlineCode",{parentName:"p"},"main/config/settings"),"), make a copy of the example con\ufb01guration \ufb01le using the suggested stage name demo. This creates the ",(0,i.kt)("inlineCode",{parentName:"p"},"dev.yml")," file."),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"cp example.yml ${STAGE_NAME}.yml")),(0,i.kt)("p",{parentName:"li"},"  c. In the newly created con\ufb01guration \ufb01le, uncomment and set values for the following values:",(0,i.kt)("br",null)),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"awsRegion (for example: ",(0,i.kt)("inlineCode",{parentName:"li"},"us-east-1")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"eu-west-2"),"): Ensure that you use the same Region when you are using the AWS Management Console.",(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},"solutionName (for example: ",(0,i.kt)("inlineCode",{parentName:"li"},"sw"),"): The solutionName is used in S3 bucket names so must be S3-compatible.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"li"},"Note"),": Ensure that there is no leading space before the value name."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the main installation script. This takes around 20 minutes.\n",(0,i.kt)("inlineCode",{parentName:"p"},"./scripts/environment-deploy.sh ${STAGE_NAME}"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once the preceding step has completed, capture the root password and website URL. You can display the URL and root password again by running the following command:\n",(0,i.kt)("inlineCode",{parentName:"p"},"scripts/get-info.sh ${STAGE_NAME}"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify that Service Workbench is running by using the URL and root password, using the user ",(0,i.kt)("inlineCode",{parentName:"p"},"root@example.com"),"."))))}d.isMDXComponent=!0}}]);