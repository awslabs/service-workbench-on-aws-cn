"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[9421],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=i(n),k=a,g=m["".concat(p,".").concat(k)]||m[k]||u[k]||o;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4930:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(4996),c=["components"],p={id:"link_aws_account",title:"\u521b\u5efa\u548c\u6dfb\u52a0\u4e00\u4e2aAWS Account",sidebar_label:"\u521b\u5efa\u548c\u6dfb\u52a0\u4e00\u4e2aAWS Account"},i=void 0,s={unversionedId:"zh/post_deployment/link_aws_account",id:"zh/post_deployment/link_aws_account",title:"\u521b\u5efa\u548c\u6dfb\u52a0\u4e00\u4e2aAWS Account",description:"Service Workbench \u4e2d\u6709\u4e24\u7c7b AWS \u8d26\u6237\uff1a\u5185\u90e8\u8d26\u6237\u548c\u5916\u90e8\u8d26\u6237\u3002",source:"@site/docs/zh/post_deployment/link_aws_account.md",sourceDirName:"zh/post_deployment",slug:"/zh/post_deployment/link_aws_account",permalink:"/service-workbench-on-aws-cn/zh/post_deployment/link_aws_account",draft:!1,editUrl:"https://github.com/awslabs/go-research-on-aws/website/docs/zh/post_deployment/link_aws_account.md",tags:[],version:"current",frontMatter:{id:"link_aws_account",title:"\u521b\u5efa\u548c\u6dfb\u52a0\u4e00\u4e2aAWS Account",sidebar_label:"\u521b\u5efa\u548c\u6dfb\u52a0\u4e00\u4e2aAWS Account"}},u={},m=[{value:"\u521b\u5efa AWS \u7ec4\u7ec7",id:"\u521b\u5efa-aws-\u7ec4\u7ec7",level:2},{value:"\u83b7\u53d6\u4e3b\u8d26\u6237\u89d2\u8272 ARN",id:"\u83b7\u53d6\u4e3b\u8d26\u6237\u89d2\u8272-arn",level:2},{value:"\u521b\u5efa AWS \u8d26\u6237",id:"\u521b\u5efa-aws-\u8d26\u6237",level:3},{value:"\u6dfb\u52a0\u5916\u90e8 AWS \u8d26\u6237",id:"\u6dfb\u52a0\u5916\u90e8-aws-\u8d26\u6237",level:2}],k={toc:m};function g(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Service Workbench \u4e2d\u6709\u4e24\u7c7b AWS \u8d26\u6237\uff1a",(0,o.kt)("strong",{parentName:"p"},"\u5185\u90e8\u8d26\u6237"),"\u548c",(0,o.kt)("strong",{parentName:"p"},"\u5916\u90e8\u8d26\u6237"),"\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u5185\u90e8\u8d26\u6237"),"\uff1a\u5185\u90e8\u8d26\u6237\u662f\u4e0e\u60a8\u90e8\u7f72 Service Workbench \u7684 AWS \u8d26\u6237\u76f8\u5173\u8054\u7684\u8d26\u6237\u3002\u94fe\u63a5\u5230\u5185\u90e8\u8d26\u6237\u7684\u7528\u6237\u90fd\u5c06\u88ab\u8ba1\u5165\u8be5 AWS \u8d26\u6237\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u5916\u90e8\u8d26\u6237"),"\uff1a\u5916\u90e8\u8d26\u6237\u63d0\u4f9b\u81ea\u5df1\u7684 AWS \u8d26\u6237\uff0c\u94fe\u63a5\u5230\u5916\u90e8\u8d26\u6237\u7684\u7528\u6237\u5c06\u5411\u5916\u90e8 AWS \u8d26\u6237\u6536\u8d39\u3002\u8fd9\u5c31\u662f\u5916\u90e8\u7814\u7a76\u4eba\u5458\u53ef\u4ee5\u5728 Service Workbench \u5185\u534f\u4f5c\u548c\u5171\u4eab\u6570\u636e\u7684\u65b9\u5f0f\uff0c\u4f46\u4ecd\u9700\u5bf9\u81ea\u5df1\u7684\u8ba1\u8d39\u8d1f\u8d23\u3002")),(0,o.kt)("p",null,"\u9996\u6b21\u4ee5 ",(0,o.kt)("strong",{parentName:"p"},"root")," \u7528\u6237\u8eab\u4efd\u767b\u5f55 Service Workbench Web \u754c\u9762\u540e\uff0c\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u4fa7\u8fb9\u680f\u4e2d\uff0c\u5355\u51fb\u201c",(0,o.kt)("strong",{parentName:"li"},"\u8d26\u6237"),"\u201d\u4ee5\u663e\u793a\u201c",(0,o.kt)("strong",{parentName:"li"},"\u8d26\u6237"),"\u201d\u9875\u9762\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u201c",(0,o.kt)("strong",{parentName:"li"},"\u8d26\u6237"),"\u201d\u9875\u9762\u4e0a\uff0c\u5728 Service Workbench \u4e2d\u521b\u5efa\u4e00\u4e2a ",(0,o.kt)("strong",{parentName:"li"},"AWS Account"),"\u3002")),(0,o.kt)("h2",{id:"\u521b\u5efa-aws-\u7ec4\u7ec7"},"\u521b\u5efa AWS \u7ec4\u7ec7"),(0,o.kt)("p",null,"\u5728 AWS \u7ba1\u7406\u63a7\u5236\u53f0\u4e2d\uff0c\u5728 ",(0,o.kt)("strong",{parentName:"p"},"Master")," \u8d26\u6237\u4e2d\u521b\u5efa\u4e00\u4e2a AWS \u7ec4\u7ec7\u3002\u6ca1\u6709\u8981\u8bbe\u7f6e\u7684\u914d\u7f6e\uff1b Service Workbench \u5c06\u5728 AWS \u7ec4\u7ec7\u4e2d\u4e3a\u6b64\u90e8\u7f72\u521b\u5efa\u4e00\u4e2a\u65b0\u8d26\u6237\uff0c\u4ee5\u90e8\u7f72\u65f6\u4f7f\u7528\u7684 ",(0,o.kt)("strong",{parentName:"p"},"Stage Name")," \u547d\u540d\u3002\u5982\u679c\u60a8\u5df2\u521b\u5efa AWS \u7ec4\u7ec7\uff0c\u5219\u65e0\u9700\u8fdb\u4e00\u6b65\u64cd\u4f5c\u3002"),(0,o.kt)("h2",{id:"\u83b7\u53d6\u4e3b\u8d26\u6237\u89d2\u8272-arn"},"\u83b7\u53d6\u4e3b\u8d26\u6237\u89d2\u8272 ARN"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u9605\u8bfb\u6587\u4ef6\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"main/solution/prepare-master-acc/README.md"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5c06\u76ee\u5f55\u66f4\u6539\u4e3a",(0,o.kt)("strong",{parentName:"li"},"\u6839\u6587\u4ef6\u5939"),"\u5e76\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002\u6267\u884c\u6b64\u547d\u4ee4\u5927\u7ea6\u9700\u8981 8 \u5206\u949f\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"`scripts/master-account-deploy.sh <stage>`\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"**\u56fe 2** \u4e2d\u63cf\u8ff0\u4e86\u6b64\u547d\u4ee4\u7684\u8f93\u51fa\u3002\n<img src={useBaseUrl('img/deployment/post_deployment/service_information_00')} />\n**_\u56fe2\uff1a\u670d\u52a1\u4fe1\u606f_**\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u4ece\u4e0a\u4e00\u6b65\u7684\u8f93\u51fa\u4e2d\u590d\u5236 ",(0,o.kt)("strong",{parentName:"li"},"Master Role ARN")," \u7684\u503c\u3002\u6b64\u503c\u662f\u65b0\u521b\u5efa\u7684 ",(0,o.kt)("strong",{parentName:"li"},"Master")," \u89d2\u8272\u7684 ARN\u3002")),(0,o.kt)("h3",{id:"\u521b\u5efa-aws-\u8d26\u6237"},"\u521b\u5efa AWS \u8d26\u6237"),(0,o.kt)("p",null,"\u8fd9\u5c06\u521b\u5efa\u4e00\u4e2a\u8d26\u6237\uff0c\u5176\u5e10\u5355\u5c06\u8f6c\u5230 ",(0,o.kt)("strong",{parentName:"p"},"Main")," \u8d26\u6237\u3002 ",(0,o.kt)("strong",{parentName:"p"},"Main")," \u8d26\u6237\u662f\u90e8\u7f72 Service Workbench \u7684\u8d26\u6237\u3002\u53c2\u89c1",(0,o.kt)("strong",{parentName:"p"},"\u56fe 3"),"\u3002"),(0,o.kt)("img",{src:(0,l.Z)("img/deployment/post_deployment/create_account_00.jpg")}),"**_\u56fe 3\uff1a\u521b\u5efa AWS \u8d26\u6237_**",(0,o.kt)("p",null,"\u8981\u521b\u5efa AWS \u8d26\u6237\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728 Service Workbench \u63a7\u5236\u53f0\u4e2d\uff0c\u5bfc\u822a\u5230\u201c",(0,o.kt)("strong",{parentName:"li"},"\u8d26\u6237 > AWS Accounts"),"\u201d\u5e76\u5355\u51fb\u201c",(0,o.kt)("strong",{parentName:"li"},"Create AWS Account"),"\u201d\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6307\u5b9a\u4ee5\u4e0b\u8be6\u7ec6\u4fe1\u606f\uff1a\n\u2013 \u5728\u201c",(0,o.kt)("strong",{parentName:"li"},"Role ARN"),"\u201d\u4e2d\uff0c\u586b\u5199\u4ece\u4e0a\u4e00\u6b65\u590d\u5236\u7684 ",(0,o.kt)("strong",{parentName:"li"},"Master Role ARN"),"\u3002\n\u2013 \u60a8\u5728\u6b64\u5904\u6307\u5b9a\u7684",(0,o.kt)("strong",{parentName:"li"},"\u7535\u5b50\u90ae\u4ef6\u5730\u5740")," \u5728 AWS \u7ec4\u7ec7\u4e2d\u5fc5\u987b\u662f\u552f\u4e00\u7684\u3002\n\u2013 ",(0,o.kt)("strong",{parentName:"li"},"External ID")," \u9ed8\u8ba4\u4e3a\u5b57\u7b26\u4e32\u5de5\u4f5c\u53f0\u3002\u6709\u5173\u5982\u4f55\u5c06\u5176\u914d\u7f6e\u4e3a\u53e6\u4e00\u4e2a\u503c\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"li",href:"/deployment/reference/iam_role"},"IAM \u89d2\u8272"),"\u3002")),(0,o.kt)("p",null,"\u4e00\u5206\u949f\u540e\uff0c\u201c",(0,o.kt)("strong",{parentName:"p"},"AWS \u8d26\u6237"),"\u201d\u9009\u9879\u5361\u4e2d\u5c06\u663e\u793a\u4ee5\u4e0b\u4fe1\u606f\uff1a\n\u2013 \u201c",(0,o.kt)("em",{parentName:"p"},"\u5c1d\u8bd5\u521b\u5efa\u8d26\u6237 ID\uff1axxx"),"\u201d\u3002\n\u2013 \u201c",(0,o.kt)("strong",{parentName:"p"},"Workflows > Provision Account"),"\u201d\u4e2d\u6b63\u5728\u8fdb\u884c\u5de5\u4f5c\u6d41\uff08\u8bf7\u53c2\u9605\u4fa7\u8fb9\u680f\u7684\u201cAccounts\u201d\u9875\u9762\u3002\uff09"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"\u6ce8\u610f"),"\uff1a\u5982\u679c\u60a8\u770b\u5230\u9519\u8bef\u6d88\u606f\uff0c\u4f8b\u5982\u201cStop Internal State Account ID not found\u201d\uff0c\u8bf7\u5728\u60a8\u7684 ",(0,o.kt)("strong",{parentName:"em"},"Master")," \u8d26\u6237\u7684\u63a7\u5236\u53f0\u4e2d\u68c0\u67e5 AWS \u7ec4\u7ec7\u3002\u60a8\u7684\u8d26\u6237\u4e0d\u5f97\u5c5e\u4e8e\u73b0\u6709 AWS \u7ec4\u7ec7\u3002\u60a8\u5fc5\u987b\u62e5\u6709\u73b0\u6709\u7684 AWS \u7ec4\u7ec7\u6216\u80fd\u591f\u521b\u5efa\u65b0\u7684 AWS \u7ec4\u7ec7\u3002")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\uff08\u53ef\u9009\uff09\u5728 AWS \u63a7\u5236\u53f0\u4e2d\uff0c\u60a8\u53ef\u4ee5\u68c0\u67e5\u6b64\u811a\u672c\u90e8\u7f72\u7684\u4ee5\u4e0b\u8d44\u6e90\uff1a\n\u2013 \u5728 AWS CloudFormation \u4e2d\uff0c\u5806\u6808\u51c6\u5907\u4e3b\u673a\u5c06\u8fd0\u884c\u3002\u5b83\u521b\u5efa ",(0,o.kt)("strong",{parentName:"li"},"Master")," \u89d2\u8272\uff0c\u5176\u8f93\u51fa\u662f ",(0,o.kt)("strong",{parentName:"li"},"Master Role ARN"),"\u3002\n\u2013 \u5728 AWS Organization \u4e2d\uff0c\u65b0\u8d26\u6237\u5c06\u663e\u793a\u5728 ",(0,o.kt)("strong",{parentName:"li"},"Master")," \u8d26\u6237\u4e2d\n\u2013 \u5728 AWS IAM \u4e2d\uff0c\u5c06\u521b\u5efa\u65b0\u7684 ",(0,o.kt)("strong",{parentName:"li"},"Master")," \u89d2\u8272\u3002\n\u6dfb\u52a0\u8d26\u6237\u540e\uff0c\u5b83\u4f1a\u5217\u5728\u201c",(0,o.kt)("strong",{parentName:"li"},"AWS Accounts"),"\u201d\u4e2d\uff0c\u5982",(0,o.kt)("strong",{parentName:"li"},"\u56fe 4")," \u6240\u793a\u3002")),(0,o.kt)("img",{src:(0,l.Z)("img/deployment/post_deployment/create_account_02.jpg")}),"**_\u56fe 4\uff1aAWS \u8d26\u6237\u793a\u4f8b_**",(0,o.kt)("h2",{id:"\u6dfb\u52a0\u5916\u90e8-aws-\u8d26\u6237"},"\u6dfb\u52a0\u5916\u90e8 AWS \u8d26\u6237"),(0,o.kt)("p",null,"\u8fd9\u5c06\u521b\u5efa\u4e00\u4e2a\u8d26\u6237\uff0c\u5176\u8d26\u5355\u5c06\u8f6c\u5230\u5916\u90e8 AWS \u8d26\u6237\uff0c\u4f8b\u5982\u5916\u90e8\u7814\u7a76\u4eba\u5458\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u90e8\u7f72\u4e0b\u9762\u7684\u6587\u4ef6\u3002\u5b83\u5c06\u8f93\u51fa Role ARN\u3001VPC ID \u7b49\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u63d2\u4ef6/addon-base-raas/packages/base-raas-cfn-templates/src/templates/onboard-account.cfn.yml\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u5728 Service Workbench \u7ba1\u7406\u754c\u9762\u4e2d\uff0c\u5355\u51fb\u7ba1\u7406\u5458\u767b\u5f55\u7684\u201c",(0,o.kt)("strong",{parentName:"li"},"AWS Accounts"),"\u201d\u9009\u9879\u5361\u3002\u53c2\u89c1",(0,o.kt)("strong",{parentName:"li"},"\u56fe 5"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u201c",(0,o.kt)("strong",{parentName:"li"},"\u6dfb\u52a0 AWS \u8d26\u6237"),"\u201d\u5e76\u8f93\u5165\u8d26\u6237\u4fe1\u606f\u3002")),(0,o.kt)("img",{src:(0,l.Z)("img/deployment/post_deployment/create_account_01.jpg")}),"**_\u56fe 5\uff1a\u6dfb\u52a0 AWS \u8d26\u6237_**")}g.isMDXComponent=!0}}]);