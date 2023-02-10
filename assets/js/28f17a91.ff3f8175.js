"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[7308],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=p(n),k=a,d=u["".concat(s,".").concat(k)]||u[k]||m[k]||l;return n?r.createElement(d,i(i({ref:e},c),{},{components:n})):r.createElement(d,i({ref:e},c))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=n(4996),o=["components"],s={id:"instance-req",title:"EC2 \u5b9e\u4f8b\u8981\u6c42",sidebar_label:"EC2 \u5b9e\u4f8b\u8981\u6c42"},p=void 0,c={unversionedId:"zh/installation_guide/installation/pre-installation/instance-req",id:"zh/installation_guide/installation/pre-installation/instance-req",title:"EC2 \u5b9e\u4f8b\u8981\u6c42",description:"|\u7ae0\u8282 |\u8bf4\u660e |",source:"@site/docs/zh/installation_guide/installation/pre-installation/instance-req.md",sourceDirName:"zh/installation_guide/installation/pre-installation",slug:"/zh/installation_guide/installation/pre-installation/instance-req",permalink:"/service-workbench-on-aws-cn/zh/installation_guide/installation/pre-installation/instance-req",draft:!1,tags:[],version:"current",frontMatter:{id:"instance-req",title:"EC2 \u5b9e\u4f8b\u8981\u6c42",sidebar_label:"EC2 \u5b9e\u4f8b\u8981\u6c42"},sidebar:"serviceWorkbenchSidebar",previous:{title:"\u8f6f\u4ef6\u8981\u6c42",permalink:"/service-workbench-on-aws-cn/zh/installation_guide/installation/pre-installation/software-req"},next:{title:"\u914d\u7f6e\u8bbe\u7f6e",permalink:"/service-workbench-on-aws-cn/zh/installation_guide/installation/pre-installation/conf-settings"}},m={},u=[{value:"\u521b\u5efa\u4e00\u4e2a EC2 \u5b9e\u4f8b",id:"\u521b\u5efa\u4e00\u4e2a-ec2-\u5b9e\u4f8b",level:3},{value:"\u914d\u7f6e EC2 \u5b9e\u4f8b",id:"\u914d\u7f6e-ec2-\u5b9e\u4f8b",level:3},{value:"\u521b\u5efa\u65b0\u7684 IAM \u89d2\u8272",id:"\u521b\u5efa\u65b0\u7684-iam-\u89d2\u8272",level:4},{value:"\u5c06\u89d2\u8272\u6dfb\u52a0\u5230\u73b0\u6709\u5b9e\u4f8b",id:"\u5c06\u89d2\u8272\u6dfb\u52a0\u5230\u73b0\u6709\u5b9e\u4f8b",level:4},{value:"\u5728 EC2 \u5b9e\u4f8b\u4e0a\u5b89\u88c5\u6240\u9700\u7684\u8f6f\u4ef6",id:"\u5728-ec2-\u5b9e\u4f8b\u4e0a\u5b89\u88c5\u6240\u9700\u7684\u8f6f\u4ef6",level:3}],k={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7ae0\u8282"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#createinst"},"\u521b\u5efa EC2 \u5b9e\u4f8b")),(0,l.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u6709\u5173\u4e3a Service Workbench \u5b89\u88c5\u9009\u62e9 EC2 \u5b9e\u4f8b\u5927\u5c0f\u7684\u4fe1\u606f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#confinst"},"\u914d\u7f6e EC2 \u5b9e\u4f8b")),(0,l.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0\u914d\u7f6e EC2 \u5b9e\u4f8b\u3001\u521b\u5efa IAM \u89d2\u8272\u4ee5\u53ca\u5c06\u7ba1\u7406\u5458\u89d2\u8272\u5206\u914d\u7ed9 EC2 \u5b9e\u4f8b\u7684\u8fc7\u7a0b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#install"},"\u5728EC2\u5b9e\u4f8b\u4e0a\u5b89\u88c5\u6240\u9700\u8f6f\u4ef6")),(0,l.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0\u514b\u9686\u5305\u542b Service Workbench \u5b89\u88c5\u7684 Git \u76ee\u5f55\u7684\u547d\u4ee4\u3002")))),(0,l.kt)("h3",{id:"\u521b\u5efa\u4e00\u4e2a-ec2-\u5b9e\u4f8b"},"\u521b\u5efa\u4e00\u4e2a EC2 \u5b9e\u4f8b"),(0,l.kt)("a",{name:"createinst"}),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u521b\u5efa\u5177\u6709\u4ee5\u4e0b\u89c4\u683c\u7684 EC2 \u5b9e\u4f8b:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Amazon EC2 \u5b9e\u4f8b\u7c7b\u578b\uff1a\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"T2.medium")," \u6216\u66f4\u5927\u89c4\u683c\u7684Amazon EC2 \u5b9e\u4f8b\u3002\u66f4\u5927\u7684\u673a\u5668\u6709\u66f4\u5feb\u7684\u7f51\u7edc\uff0c\u66f4\u5927\u7684\u78c1\u76d8\u6709\u66f4\u9ad8\u7684\u6027\u80fd\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u91cd\u8981\u63d0\u793a"),"\uff1a\u5efa\u8bae\u5b89\u88c5\u6240\u9700\u7684\u78c1\u76d8\u9a71\u52a8\u5668\u5927\u5c0f\u4e3a 40 GB\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"VPC \u548c\u5b50\u7f51\uff1a\u4f7f\u7528\u9ed8\u8ba4\u7684 VPC \u548c\u5b50\u7f51\u3002"),(0,l.kt)("li",{parentName:"ul"},"AWS IAM \u89d2\u8272\uff1a\u5c06\u5177\u6709\u8db3\u591f\u6743\u9650\u7684 AWS IAM \u89d2\u8272\u9644\u52a0\u5230\u60a8\u7684\u5b9e\u4f8b\uff0c\u4f8b\u5982\u7ba1\u7406\u5458\u8bbf\u95ee\u6743\u9650\u3002")),(0,l.kt)("h3",{id:"\u914d\u7f6e-ec2-\u5b9e\u4f8b"},"\u914d\u7f6e EC2 \u5b9e\u4f8b"),(0,l.kt)("a",{name:"confinst"}),(0,l.kt)("p",null,"\u53ef\u4ee5\u4e3a Amazon EC2 \u5b9e\u4f8b\u5206\u914d\u4e00\u4e2a\u5305\u542b AWS IAM \u89d2\u8272\u7684\u5b9e\u4f8b\u914d\u7f6e\u6587\u4ef6\u3002 AWS IAM \u89d2\u8272\u4e3a Amazon EC2 \u5b9e\u4f8b\u63d0\u4f9b\u4e00\u7ec4\u6743\u9650\u3002 Amazon EC2 \u5b9e\u4f8b\u6267\u884c\u7531\u5176 AWS IAM \u89d2\u8272\u5b9a\u4e49\u7684\u64cd\u4f5c\u3002\u5411 Amazon EC2 \u5b9e\u4f8b\u6dfb\u52a0 AWS IAM \u89d2\u8272\u53ef\u8ba9\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u5b89\u5168\u5730\u8fdb\u884c API \u8c03\u7528\uff0c\u4ece\u800c\u51cf\u5c11\u7ba1\u7406\u5b89\u5168\u51ed\u8bc1\u7684\u9700\u8981\u3002\nService Workbench \u90e8\u7f72\u5e94\u7528\u7a0b\u5e8f\u5fc5\u987b\u80fd\u591f\u521b\u5efa AWS \u8d44\u6e90\u3002\u6ee1\u8db3\u6b64\u8981\u6c42\u7684\u6700\u7b80\u5355\u65b9\u6cd5\u662f\u4e3a Amazon EC2 \u5b9e\u4f8b\u63d0\u4f9b\u7ba1\u7406\u5458\u89d2\u8272\u3002"),(0,l.kt)("h4",{id:"\u521b\u5efa\u65b0\u7684-iam-\u89d2\u8272"},"\u521b\u5efa\u65b0\u7684 IAM \u89d2\u8272"),(0,l.kt)("p",null,"\u5728\u521b\u5efa\u65b0\u7684 Amazon EC2 \u5b9e\u4f8b\u65f6\uff0c\u53ef\u4ee5\u5c06\u5b9e\u4f8b\u914d\u7f6e\u6587\u4ef6\u5206\u914d\u7ed9 Amazon EC2 \u5b9e\u4f8b\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4f4d\u4e8e AWS IAM \u89d2\u8272\u4e0b\u62c9\u5217\u8868\u65c1\u8fb9\u7684",(0,l.kt)("strong",{parentName:"li"},"\u521b\u5efa\u65b0\u7684 IAM \u89d2\u8272"),"\u3002\u8981\u7ee7\u7eed\u8be5\u8fc7\u7a0b\uff0c\u8bf7\u7a81\u51fa\u663e\u793a Amazon EC2 \u5e76\u7ee7\u7eed\u5230\u6743\u9650\u914d\u7f6e\u3002")),(0,l.kt)("img",{src:(0,i.Z)("img/deployment/installation/iam1.png")}),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u5bf9\u4e8e ",(0,l.kt)("strong",{parentName:"li"},"Permissions"),"\uff0c\u4ece\u8fc7\u6ee4\u5668\u4e2d\u9009\u62e9 ",(0,l.kt)("strong",{parentName:"li"},"AdministratorAccess")," \u5e76\u7ee7\u7eed\u5230 ",(0,l.kt)("strong",{parentName:"li"},"tags"),"\u3002")),(0,l.kt)("img",{src:(0,i.Z)("img/deployment/installation/iam2.png")}),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u5728 ",(0,l.kt)("strong",{parentName:"li"},"Review")," \u9875\u9762\u4e2d\uff0c\u8f93\u5165\u89d2\u8272\u540d\u79f0\u3002")),(0,l.kt)("img",{src:(0,i.Z)("img/deployment/installation/iam3.png")}),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u8fd4\u56de ",(0,l.kt)("strong",{parentName:"li"},"Amazon EC2")," \u9009\u9879\u5361\uff0c\u5237\u65b0 ",(0,l.kt)("strong",{parentName:"li"},"IAM \u89d2\u8272")," \u4e0b\u62c9\u83dc\u5355\uff0c\u7136\u540e\u9009\u62e9\u60a8\u7684\u7ba1\u7406\u5458\u89d2\u8272\u4ee5\u9644\u52a0\u5230\u65b0\u7684 Amazon EC2 \u5b9e\u4f8b\u3002")),(0,l.kt)("img",{src:(0,i.Z)("img/deployment/installation/iam4.png")}),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa Amazon EC2 \u5b9e\u4f8b\u3002")),(0,l.kt)("h4",{id:"\u5c06\u89d2\u8272\u6dfb\u52a0\u5230\u73b0\u6709\u5b9e\u4f8b"},"\u5c06\u89d2\u8272\u6dfb\u52a0\u5230\u73b0\u6709\u5b9e\u4f8b"),(0,l.kt)("p",null,"\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u5c06\u89d2\u8272\u6dfb\u52a0\u5230\u5df2\u5728\u8fd0\u884c\u7684 Amazon EC2 \u5b9e\u4f8b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5728 EC2 \u63a7\u5236\u53f0\u4e2d\u9009\u62e9 Amazon EC2 \u5b9e\u4f8b\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728 ",(0,l.kt)("strong",{parentName:"li"},"Actions")," \u83dc\u5355\u4e0a\uff0c\u9009\u62e9 ",(0,l.kt)("strong",{parentName:"li"},"Security, Modify IAM role"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728 ",(0,l.kt)("strong",{parentName:"li"},"Modify IAM role")," \u5c4f\u5e55\u4e2d\uff0c\u9009\u62e9\u60a8\u521b\u5efa\u7684\u89d2\u8272\u5e76\u9009\u62e9 ",(0,l.kt)("strong",{parentName:"li"},"Update IAM role"),"\u3002")),(0,l.kt)("h3",{id:"\u5728-ec2-\u5b9e\u4f8b\u4e0a\u5b89\u88c5\u6240\u9700\u7684\u8f6f\u4ef6"},"\u5728 EC2 \u5b9e\u4f8b\u4e0a\u5b89\u88c5\u6240\u9700\u7684\u8f6f\u4ef6"),(0,l.kt)("a",{name:"\u5b89\u88c5"}),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5728 EC2 \u5b9e\u4f8b\u4e0a\u5b89\u88c5\u7528\u4e8e\u5728 AWS \u4e0a\u5b89\u88c5 Service Workbench \u7684\u5fc5\u5907\u8f6f\u4ef6\uff08serverless \u548c pnpm\uff09\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash\nsource ~/.bashrc\nnvm install 14\nnpm install -g pnpm@5.18.9\nnpm install -g serverless hygen\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u68c0\u67e5serverless\u662f\u5426\u5b89\u88c5\u6210\u529f\u3002")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"serverless -v")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u8981\u5728 Service Workbench \u4e2d\u90e8\u7f72 Windows \u5de5\u4f5c\u533a\uff0c\u5fc5\u987b\u5728\u90e8\u7f72\u524d\u5b89\u88c5Go lang\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo yum install golang\n")),(0,l.kt)("p",null,"\u5982\u679c\u90e8\u7f72\u5230\u4e9a\u9a6c\u900a\u4e91\u79d1\u6280\u4e2d\u56fd\u533a\u57df\uff0c\u8bf7\u6267\u884c\u4e0b\u9762\u547d\u4ee4\u4fdd\u8bc1 golang \u6b63\u5e38\u8fd0\u884c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"go env -w GO111MODULE=on\ngo env -w GOPROXY=https://goproxy.cn,direct\n")),(0,l.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u8bf7\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"go version"),"\u67e5\u770b\u7248\u672c\uff0c\u7248\u672c\u5e94\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"1.13.7"),"\u6216\u66f4\u9ad8\u7248\u672c\u3002"))}d.isMDXComponent=!0}}]);