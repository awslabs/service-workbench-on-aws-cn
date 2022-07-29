"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[1120],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(g,a(a({ref:n},s),{},{components:t})):r.createElement(g,a({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1753:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],l={id:"solutions",title:"AWS\u89e3\u51b3\u65b9\u6848\u5b89\u88c5\u65b9\u5f0f\u5347\u7ea7",sidebar_label:"AWS\u89e3\u51b3\u65b9\u6848\u5b89\u88c5\u65b9\u5f0f\u5347\u7ea7"},c=void 0,u={unversionedId:"zh/installation_guide/upgrading/solutions",id:"zh/installation_guide/upgrading/solutions",isDocsHomePage:!1,title:"AWS\u89e3\u51b3\u65b9\u6848\u5b89\u88c5\u65b9\u5f0f\u5347\u7ea7",description:"\u6b64\u8fc7\u7a0b\u7528\u4e8e\u5347\u7ea7\u4ece AWS \u89e3\u51b3\u65b9\u6848\u81ea\u52a8\u5b89\u88c5\u7684 Service Workbench \u5b89\u88c5\u3002\u5728\u6b64\u5b89\u88c5\u6a21\u578b\u4e2d\uff0cCloudFormation \u6a21\u677f\u542f\u52a8\u5b89\u88c5\uff0c\u8be5\u5b89\u88c5\u7531 AWS CodeBuild \u9879\u76ee\u6267\u884c\u3002\u8981\u5347\u7ea7 Service Workbench \u90e8\u7f72\uff0c\u60a8\u9700\u8981\u8bbf\u95ee Service Workbench \u5b89\u88c5\u3002",source:"@site/docs/zh/installation_guide/upgrading/solutions.md",sourceDirName:"zh/installation_guide/upgrading",slug:"/zh/installation_guide/upgrading/solutions",permalink:"/service-workbench-on-aws-cn/zh/installation_guide/upgrading/solutions",editUrl:"https://github.com/awslabs/go-research-on-aws/website/docs/zh/installation_guide/upgrading/solutions.md",tags:[],version:"current",frontMatter:{id:"solutions",title:"AWS\u89e3\u51b3\u65b9\u6848\u5b89\u88c5\u65b9\u5f0f\u5347\u7ea7",sidebar_label:"AWS\u89e3\u51b3\u65b9\u6848\u5b89\u88c5\u65b9\u5f0f\u5347\u7ea7"},sidebar:"serviceWorkbenchSidebar",previous:{title:"\u901a\u8fc7\u547d\u4ee4\u884c\u5347\u7ea7Service Workbench",permalink:"/service-workbench-on-aws-cn/zh/installation_guide/upgrading/commandline"},next:{title:"\u7cfb\u7edf\u5347\u7ea7\u540e\u5904\u7406",permalink:"/service-workbench-on-aws-cn/zh/installation_guide/postupgrade"}},s=[],p={toc:s};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6b64\u8fc7\u7a0b\u7528\u4e8e\u5347\u7ea7\u4ece AWS \u89e3\u51b3\u65b9\u6848\u81ea\u52a8\u5b89\u88c5\u7684 Service Workbench \u5b89\u88c5\u3002\u5728\u6b64\u5b89\u88c5\u6a21\u578b\u4e2d\uff0cCloudFormation \u6a21\u677f\u542f\u52a8\u5b89\u88c5\uff0c\u8be5\u5b89\u88c5\u7531 AWS CodeBuild \u9879\u76ee\u6267\u884c\u3002\u8981\u5347\u7ea7 Service Workbench \u90e8\u7f72\uff0c\u60a8\u9700\u8981\u8bbf\u95ee Service Workbench \u5b89\u88c5\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u767b\u5f55\u5b89\u88c5 Service Workbench \u7684\u8d26\u6237\u7684 AWS \u7ba1\u7406\u63a7\u5236\u53f0\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6253\u5f00 AWS CodeBuild \u63a7\u5236\u53f0\u5e76\u627e\u5230\u540d\u4e3a\u201cswb-Setup\u201d\u7684 Service Workbench \u9879\u76ee\u3002\n3.\u8fdb\u5165\u9879\u76ee\uff0c\u70b9\u51fb\u6700\u8fd1\u4e00\u6b21\u6210\u529f\u6784\u5efa\uff0c\u6253\u5f00",(0,o.kt)("strong",{parentName:"li"},"Environment Variables"),"\u9009\u9879\u5361\u3002\u8bf7\u6ce8\u610f\u4ee5\u4e0b\u503c:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"}," - `OBJECT_KEY_NAME`:\u8bb0\u5f55\u6b64\u5b57\u7b26\u4e32\u4e2d\u7684\u7248\u672c\u53f7\uff08\u4f8b\u5982:'1.4.3'\uff09\uff0c\u7528\u4f5c\u4e0b\u8f7d Service Workbench \u6e90\u4ee3\u7801\u7684 URL \u7684\u4e00\u90e8\u5206\u3002\n - `SOLUTION_NAME`:\u9ed8\u8ba4\u503c\u4e3a`swb`\u3002\n - `STAGE_NAME`:\u9ed8\u8ba4\u503c\u4e3a`test`\u3002\n"))),(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("strong",{parentName:"li"},"\u6784\u5efa\u9879\u76ee"),"\u9875\u9762\u4e2d:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e",(0,o.kt)("strong",{parentName:"li"},"\u7f16\u8f91"),"\uff0c\u9009\u62e9",(0,o.kt)("strong",{parentName:"li"},"\u73af\u5883"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5c55\u5f00",(0,o.kt)("strong",{parentName:"li"},"\u9644\u52a0\u914d\u7f6e"),"\u90e8\u5206\u3002"))),(0,o.kt)("li",{parentName:"ol"},"\u7f16\u8f91 ",(0,o.kt)("inlineCode",{parentName:"li"},"OBJECT_KEY_NAME")," \u7684\u503c\u5e76\u5c06\u5176\u8bbe\u7f6e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"service-workbench-on-aws/v1.4.5"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u6709\u5fc5\u8981\uff0c\u8bbe\u7f6e ",(0,o.kt)("inlineCode",{parentName:"li"},"SOLUTION_NAME")," \u548c ",(0,o.kt)("inlineCode",{parentName:"li"},"STAGE_NAME")," \u7684\u503c\u4ee5\u5339\u914d\u4e4b\u524d\u4f7f\u7528\u7684\u503c\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,o.kt)("strong",{parentName:"li"},"Update environment"),"\uff0c\u8fd4\u56de\u5230 ",(0,o.kt)("strong",{parentName:"li"},"Build projects")," \u9875\u9762\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9",(0,o.kt)("strong",{parentName:"li"},"\u5f00\u59cb\u6784\u5efa"),"\u3002\u8be5\u9879\u76ee\u8fd0\u884c 20-30 \u5206\u949f\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u8bbf\u95ee\u7ad9\u70b9 URL \u6d4b\u8bd5\u90e8\u7f72\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6309\u7167 ",(0,o.kt)("a",{parentName:"li",href:"/installation_guide/postupgrade"},"\u5347\u7ea7\u540e")," \u90e8\u5206\u4e2d\u7684\u8bf4\u660e\u66f4\u65b0 Service Workbench \u4e2d\u7684\u6bcf\u4e2a\u5e10\u6237\u3002")))}d.isMDXComponent=!0}}]);