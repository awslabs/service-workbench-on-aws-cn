"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[9732],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7588:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"ec2install",title:"\u4f7f\u7528EC2 \u5b9e\u4f8b\u5b89\u88c5 Service Workbench",sidebar_label:"\u4f7f\u7528EC2 \u5b9e\u4f8b\u5b89\u88c5 Service Workbench"},c=void 0,p={unversionedId:"zh/installation_guide/installation/ec2install",id:"zh/installation_guide/installation/ec2install",isDocsHomePage:!1,title:"\u4f7f\u7528EC2 \u5b9e\u4f8b\u5b89\u88c5 Service Workbench",description:"1. \u4f7f\u7528\u6b64\u94fe\u63a5\u4e0b\u8f7d AWS \u4e0a\u7684 Service Workbench \u6e90\u4ee3\u7801\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4:",source:"@site/docs/zh/installation_guide/installation/ec2install.md",sourceDirName:"zh/installation_guide/installation",slug:"/zh/installation_guide/installation/ec2install",permalink:"/service-workbench-on-aws-cn/zh/installation_guide/installation/ec2install",editUrl:"https://github.com/awslabs/go-research-on-aws/website/docs/zh/installation_guide/installation/ec2install.md",tags:[],version:"current",frontMatter:{id:"ec2install",title:"\u4f7f\u7528EC2 \u5b9e\u4f8b\u5b89\u88c5 Service Workbench",sidebar_label:"\u4f7f\u7528EC2 \u5b9e\u4f8b\u5b89\u88c5 Service Workbench"},sidebar:"serviceWorkbenchSidebar",previous:{title:"\u5b89\u88c5 AMIs",permalink:"/service-workbench-on-aws-cn/zh/installation_guide/installation/ami-install"},next:{title:"\u642d\u5efa RStudio ALB workspace",permalink:"/service-workbench-on-aws-cn/zh/installation_guide/installation/rstudio"}},s=[],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u6b64\u94fe\u63a5\u4e0b\u8f7d AWS \u4e0a\u7684 Service Workbench \u6e90\u4ee3\u7801\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo yum install -y git\ngit clone https://github.com/awslabs/service-workbench-on-aws-cn.git\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4e3a\u60a8\u7684\u5b89\u88c5\u521b\u5efa\u4e00\u4e2a\u4e3b Service Workbench on AWS \u914d\u7f6e\u6587\u4ef6\u3002\u505a\u5982\u4e0b\u64cd\u4f5c:"),(0,i.kt)("p",{parentName:"li"},"  a. \u521b\u5efa\u4e00\u4e2a\u5305\u542b\u5b89\u88c5Stage name\u7684\u73af\u5883\u53d8\u91cf\u3002Stage name\u5305\u542b\u5728 Amazon S3 \u5b58\u50a8\u6876\u7684\u540d\u79f0\u4e2d\u3002\u56e0\u6b64\uff0c\u5b83\u5fc5\u987b\u4e0e S3 \u517c\u5bb9\u3002"),(0,i.kt)("p",{parentName:"li"},"  \u4f8b\u5b50:\n",(0,i.kt)("inlineCode",{parentName:"p"},"export STAGE_NAME=dev")),(0,i.kt)("p",{parentName:"li"},"  \u6ce8\u610f:\u5728\u6253\u5f00\u65b0\u7684\u7ec8\u7aef\u7a97\u53e3\u65f6\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\u3002"),(0,i.kt)("p",{parentName:"li"},"  b. \u5728\u4e3b\u914d\u7f6e\u76ee\u5f55 (",(0,i.kt)("inlineCode",{parentName:"p"},"main/config/settings"),") \u4e2d\uff0c\u4f7f\u7528\u5efa\u8bae\u7684Stage name demo \u590d\u5236\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6\u3002\u8fd9\u5c06\u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"dev.yml")," \u6587\u4ef6\u3002"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"cp example.yml ${STAGE_NAME}.yml")),(0,i.kt)("p",{parentName:"li"},"  c. \u5728\u65b0\u521b\u5efa\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u53d6\u6d88\u6ce8\u91ca\u5e76\u8bbe\u7f6e\u4ee5\u4e0b\u503c\u7684\u503c:",(0,i.kt)("br",null)),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"awsRegion\uff08\u4f8b\u5982:",(0,i.kt)("inlineCode",{parentName:"li"},"us-east-1")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"li"},"eu-west-2"),"\uff09:\u786e\u4fdd\u5728\u4f7f\u7528 AWS \u7ba1\u7406\u63a7\u5236\u53f0\u65f6\u4f7f\u7528\u76f8\u540c\u7684\u533a\u57df\u3002",(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},"\u89e3\u51b3\u65b9\u6848\u540d\u79f0\uff08\u4f8b\u5982:",(0,i.kt)("inlineCode",{parentName:"li"},"sw"),"\uff09:\u89e3\u51b3\u65b9\u6848\u540d\u79f0\u7528\u4e8e S3 \u5b58\u50a8\u6876\u540d\u79f0\uff0c\u56e0\u6b64\u5fc5\u987b\u4e0e S3 \u517c\u5bb9\u3002",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"li"},"\u6ce8\u610f"),":\u786e\u4fdd\u503c\u540d\u79f0\u524d\u6ca1\u6709\u524d\u5bfc\u7a7a\u683c\u3002"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8fd0\u884c\u4e3b\u5b89\u88c5\u811a\u672c\u3002\u8fd9\u5927\u7ea6\u9700\u8981 20 \u5206\u949f\u3002\n",(0,i.kt)("inlineCode",{parentName:"p"},"./scripts/environment-deploy.sh ${STAGE_NAME}"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5b8c\u6210\u4e0a\u8ff0\u6b65\u9aa4\u540e\uff0c\u83b7\u53d6 root \u5bc6\u7801\u548c\u7f51\u7ad9 URL\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u518d\u6b21\u663e\u793a URL \u548c root \u5bc6\u7801:\n",(0,i.kt)("inlineCode",{parentName:"p"},"scripts/get-info.sh ${STAGE_NAME}"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4f7f\u7528\u7528\u6237\u201c",(0,i.kt)("a",{parentName:"p",href:"mailto:root@example.com"},"root@example.com"),"\u201d\uff0c\u4f7f\u7528 URL \u548c root\u7684 \u5bc6\u7801\u9a8c\u8bc1 Service Workbench \u662f\u5426\u6b63\u5728\u8fd0\u884c\u3002 \u5982\u679c\u662fOIDC IdP\uff0c\u8bf7\u4eceOIDC IdP\u83b7\u5f97root \u7528\u6237\u5bc6\u7801"))))}m.isMDXComponent=!0}}]);