"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[8401],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return m}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),s=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return r?t.createElement(f,c(c({ref:n},l),{},{components:r})):t.createElement(f,c({ref:n},l))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=p;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=r[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2337:function(e,n,r){r.r(n),r.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return d}});var t=r(7462),o=r(3366),i=(r(7294),r(3905)),c=["components"],a={id:"introduction",title:"AWS\u8d26\u6237\u4ecb\u7ecd",sidebar_label:"\u4ecb\u7ecd"},u=void 0,s={unversionedId:"zh/user_guide/sidebar/admin/accounts/aws_accounts/introduction",id:"zh/user_guide/sidebar/admin/accounts/aws_accounts/introduction",title:"AWS\u8d26\u6237\u4ecb\u7ecd",description:"Service Workbench \u4f7f\u7528\u4e24\u79cd\u7c7b\u578b\u7684\u8d26\u6237\u3002",source:"@site/docs/zh/user_guide/sidebar/admin/accounts/aws_accounts/introduction.md",sourceDirName:"zh/user_guide/sidebar/admin/accounts/aws_accounts",slug:"/zh/user_guide/sidebar/admin/accounts/aws_accounts/introduction",permalink:"/service-workbench-on-aws-cn/zh/user_guide/sidebar/admin/accounts/aws_accounts/introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"introduction",title:"AWS\u8d26\u6237\u4ecb\u7ecd",sidebar_label:"\u4ecb\u7ecd"},sidebar:"serviceWorkbenchSidebar",previous:{title:"\u521b\u5efa\u4e00\u4e2a\u65b0\u7d22\u5f15",permalink:"/service-workbench-on-aws-cn/zh/user_guide/sidebar/admin/accounts/indexes/create_new_index"},next:{title:"\u9080\u8bf7\u4e00\u4e2aAWS\u8d26\u6237",permalink:"/service-workbench-on-aws-cn/zh/user_guide/sidebar/admin/accounts/aws_accounts/invite_member_account"}},l={},d=[],p={toc:d};function m(e){var n=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Service Workbench \u4f7f\u7528\u4e24\u79cd\u7c7b\u578b\u7684\u8d26\u6237\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Main"),"\uff1a\u90e8\u7f72 Service Workbench \u7684\u8d26\u6237\u3002\u5c06\u4e3a\u6b64\u90e8\u7f72\u4e2d\u7684\u6240\u6709 AWS \u4f7f\u7528\u8d39\u7528\u4ed8\u8d39\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Hosting"),"\uff1a\u901a\u8fc7\u8d26\u6237\u52a0\u5165\u6d41\u7a0b\u5efa\u7acb\u7684\u4e0e Service Workbench \u4e3b\u8d26\u6237\u5173\u8054\u7684\u8d26\u6237\uff0c\u7528\u4e8e\u6258\u7ba1\u4e0e Service Workbench \u5de5\u4f5c\u533a\u5173\u8054\u7684\u8ba1\u7b97\u8d44\u6e90\uff08Amazon SageMaker \u7b14\u8bb0\u672c\u5b9e\u4f8b\u3001Amazon EC2 Windows \u548c Linux \u5b9e\u4f8b\u3001Amazon EMR \u96c6\u7fa4\uff09\u3002")),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u53c2\u9605\u6e90\u4ee3\u7801\u6587\u6863\u4e2d\u7684\u4ee5\u4e0b\u6587\u4ef6\uff0c\u4e86\u89e3\u6709\u5173 Service Workbench \u4e2d\u4e0d\u540c\u7c7b\u578b\u7684 AWS \u8d26\u6237\u7684\u66f4\u591a\u4fe1\u606f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"README.md")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"main/solution/prepare-master-acc/README.md"))))}m.isMDXComponent=!0}}]);