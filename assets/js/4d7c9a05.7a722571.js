"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[7234],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8963:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"troubleshooting",title:"\u6545\u969c\u6392\u67e5",sidebar_label:"\u6545\u969c\u6392\u67e5"},s=void 0,c={unversionedId:"zh/installation_guide/troubleshooting",id:"zh/installation_guide/troubleshooting",isDocsHomePage:!1,title:"\u6545\u969c\u6392\u67e5",description:"\u95ee\u9898: \u8fd0\u884c scripts/environment-deploy.sh $STAGE \u5931\u8d25\u5e76\u663e\u793a\u6d88\u606f Uploaded file must be an non-empty zip\u3002",source:"@site/docs/zh/installation_guide/troubleshooting.md",sourceDirName:"zh/installation_guide",slug:"/zh/installation_guide/troubleshooting",permalink:"/service-workbench-on-aws-cn/zh/installation_guide/troubleshooting",editUrl:"https://github.com/awslabs/go-research-on-aws/website/docs/zh/installation_guide/troubleshooting.md",tags:[],version:"current",frontMatter:{id:"troubleshooting",title:"\u6545\u969c\u6392\u67e5",sidebar_label:"\u6545\u969c\u6392\u67e5"},sidebar:"serviceWorkbenchSidebar",previous:{title:"\u5378\u8f7d Service Workbench",permalink:"/service-workbench-on-aws-cn/zh/installation_guide/uninstall"},next:{title:"\u5b89\u88c5\u540e\u6982\u89c8",permalink:"/service-workbench-on-aws-cn/zh/post_deployment/index"}},u=[],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u95ee\u9898"),": \u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts/environment-deploy.sh $STAGE")," \u5931\u8d25\u5e76\u663e\u793a\u6d88\u606f ",(0,i.kt)("inlineCode",{parentName:"p"},"Uploaded file must be an non-empty zip"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u65b9\u6848"),":\u51fa\u73b0\u6b64\u95ee\u9898\u7684\u539f\u56e0\u662f ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/aws/aws"},"https://github.com/aws/aws-cdk/issues/12536")," \u4e2d\u63cf\u8ff0\u7684 AWS CDK \u7684\u4e00\u4e2a\u5df2\u77e5\u95ee\u9898-cdk/issues/12536\uff09\u3002\u5c06\u201cNode.js\u201d\u66f4\u65b0/\u4e0b\u8865\u4e01\u5230 12.x \u7248\u672c\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u95ee\u9898"),":\u4ee5 root \u7528\u6237\u8eab\u4efd\u5b89\u88c5 Service Workbench \u65f6\u7684\u4f9d\u8d56\u6027\u95ee\u9898\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u65b9\u6848"),":\u5b89\u88c5 Service Workbench \u65f6\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"ec2-user"),"\u3002\u5982\u679c\u60a8\u4ee5 root \u7528\u6237\u8eab\u4efd\u5b89\u88c5\uff0c\u60a8\u53ef\u80fd\u4f1a\u9047\u5230\u4f9d\u8d56\u6027\u95ee\u9898\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u95ee\u9898"),":\u6784\u5efa\u673a\u5668\u6620\u50cf\u6302\u8d77\u5e76\u4e14\u65e0\u6cd5\u5728\u7ec8\u7aef\u4e2d\u751f\u6210\u4efb\u4f55\u8f93\u51fa\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u65b9\u6cd5"),":\u68c0\u67e5\u60a8\u662f\u5426\u6709\u4e00\u4e2a\u9ed8\u8ba4 VPC\uff0c\u5e76\u4e14\u5b83\u8fde\u63a5\u4e86\u4e00\u4e2a\u4e92\u8054\u7f51\u7f51\u5173\u3002\u5982\u679c\u9ed8\u8ba4 VPC \u4e0d\u53ef\u7528\u6216\u65e0\u6cd5\u521b\u5efa\uff0c\u5219\u60a8\u53ef\u4ee5\u624b\u52a8\u521b\u5efa\u8fde\u63a5\u4e92\u8054\u7f51\u7684 VPC\u3002\u590d\u5236 ",(0,i.kt)("inlineCode",{parentName:"p"},"/main/solution/machine-images/config/settings/example.yml")," \u4e3a\u60a8\u7684\u821e\u53f0\u521b\u5efa\u7c7b\u4f3c\u7684\u914d\u7f6e\u6587\u4ef6\u3002\u5728\u6b64\u6587\u4ef6\u4e2d\uff0c\u4e3a\u60a8\u7684\u81ea\u5b9a\u4e49 VPC \u6307\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"VPCd")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"subnetId"),"\u3002"))}m.isMDXComponent=!0}}]);