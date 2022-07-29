"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[9963],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(2263),a=n(3919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,l=i.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(c)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+s:s}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},7224:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return h}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(4996),c=["components"],l={id:"architecture",title:"Service Workbench \u67b6\u6784",sidebar_label:"Service Workbench \u67b6\u6784"},u=void 0,s={unversionedId:"zh/installation_guide/architecture",id:"zh/installation_guide/architecture",isDocsHomePage:!1,title:"Service Workbench \u67b6\u6784",description:"Service Workbench \u96c6\u6210\u4e86\u73b0\u6709\u7684 AWS \u670d\u52a1\uff0c\u4f8b\u5982 Amazon CloudFront\u3001AWS Lambda \u548c AWS Step Functions\u3002 Service Workbench \u4f7f\u60a8\u80fd\u591f\u521b\u5efa\u81ea\u5df1\u7684\u81ea\u5b9a\u4e49\u7684\u7814\u7a76\u73af\u5883\u6a21\u677f\u5e76\u4e0e\u5176\u4ed6\u7ec4\u7ec7\u5171\u4eab\u8fd9\u4e9b\u6a21\u677f\u3002\u4e3a\u4e86\u63d0\u4f9b\u6210\u672c\u900f\u660e\u5ea6\uff0cService Workbench \u5df2\u4e0e AWS Cost Explorer\u3001AWS Budgets \u548c AWS Organizations \u96c6\u6210\u3002",source:"@site/docs/zh/installation_guide/architecture.md",sourceDirName:"zh/installation_guide",slug:"/zh/installation_guide/architecture",permalink:"/service-workbench-on-aws-cn/zh/installation_guide/architecture",editUrl:"https://github.com/awslabs/go-research-on-aws/website/docs/zh/installation_guide/architecture.md",tags:[],version:"current",frontMatter:{id:"architecture",title:"Service Workbench \u67b6\u6784",sidebar_label:"Service Workbench \u67b6\u6784"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Service Workbench \u6982\u8ff0",permalink:"/service-workbench-on-aws-cn/zh/installation_guide/overview"},next:{title:"\u5b89\u88c5\u7ec4\u4ef6",permalink:"/service-workbench-on-aws-cn/zh/installation_guide/components"}},d=[{value:"\u4e3b\u8d26\u53f7",id:"\u4e3b\u8d26\u53f7",children:[],level:3},{value:"\u6258\u7ba1\u8d26\u6237",id:"\u6258\u7ba1\u8d26\u6237",children:[],level:3},{value:"\u8eab\u4efd\u8ba4\u8bc1",id:"\u8eab\u4efd\u8ba4\u8bc1",children:[],level:3},{value:"\u5b58\u50a8",id:"\u5b58\u50a8",children:[],level:3},{value:"AWS \u670d\u52a1\u76ee\u5f55",id:"aws-\u670d\u52a1\u76ee\u5f55",children:[],level:3},{value:"\u5de5\u4f5c\u533a\u7ba1\u7406",id:"\u5de5\u4f5c\u533a\u7ba1\u7406",children:[],level:3},{value:"\u6210\u672c\u63a7\u5236",id:"\u6210\u672c\u63a7\u5236",children:[{value:"\u5e10\u6237\u3001\u7d22\u5f15\u548c\u9879\u76ee",id:"\u5e10\u6237\u7d22\u5f15\u548c\u9879\u76ee",children:[],level:4},{value:"\u4eea\u8868\u677f",id:"\u4eea\u8868\u677f",children:[],level:4}],level:3},{value:"\u5de5\u4f5c\u533a\u5927\u5c0f",id:"\u5de5\u4f5c\u533a\u5927\u5c0f",children:[],level:3}],p={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Service Workbench \u96c6\u6210\u4e86\u73b0\u6709\u7684 AWS \u670d\u52a1\uff0c\u4f8b\u5982 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html"},"Amazon CloudFront"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"},"AWS Lambda")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/lambda-stepfunctions.html"},"AWS Step Functions"),"\u3002 Service Workbench \u4f7f\u60a8\u80fd\u591f\u521b\u5efa\u81ea\u5df1\u7684\u81ea\u5b9a\u4e49\u7684\u7814\u7a76\u73af\u5883\u6a21\u677f\u5e76\u4e0e\u5176\u4ed6\u7ec4\u7ec7\u5171\u4eab\u8fd9\u4e9b\u6a21\u677f\u3002\u4e3a\u4e86\u63d0\u4f9b\u6210\u672c\u900f\u660e\u5ea6\uff0cService Workbench \u5df2\u4e0e ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-getting-started.html"},"AWS Cost Explorer"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html"},"AWS Budgets")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html"},"AWS Organizations")," \u96c6\u6210\u3002"),(0,i.kt)("h3",{id:"\u4e3b\u8d26\u53f7"},"\u4e3b\u8d26\u53f7"),(0,i.kt)("p",null,"\u8fd9\u662f\u90e8\u7f72 Service Workbench \u57fa\u7840\u67b6\u6784\u7684\u4e3b\u5e10\u6237\u3002"),(0,i.kt)("img",{src:(0,o.Z)("img/deployment/installation/main_account.png")}),(0,i.kt)("h3",{id:"\u6258\u7ba1\u8d26\u6237"},"\u6258\u7ba1\u8d26\u6237"),(0,i.kt)("p",null,"\u8fd9\u662f\u90e8\u7f72\u8ba1\u7b97\u8d44\u6e90\u7684\u5e10\u6237\u3002"),(0,i.kt)("img",{src:(0,o.Z)("img/deployment/installation/hosting_account.png")}),(0,i.kt)("h3",{id:"\u8eab\u4efd\u8ba4\u8bc1"},"\u8eab\u4efd\u8ba4\u8bc1"),(0,i.kt)("p",null,"AWS \u4e0a\u7684 Service Workbench \u53ef\u4ee5\u4f7f\u7528 OIDC IdP \u4f5c\u4e3a\u8eab\u4efd\u9a8c\u8bc1\u6765\u6e90\u3002"),(0,i.kt)("h3",{id:"\u5b58\u50a8"},"\u5b58\u50a8"),(0,i.kt)("p",null,"Service Workbench \u533a\u5206\u4e09\u79cd\u7c7b\u578b\u7684\u7814\u7a76\u6570\u636e:\u6211\u7684\u7814\u7a76\u6570\u636e\u3001\u7ec4\u7ec7\u7814\u7a76\u6570\u636e\u548c\u5f00\u653e\u6570\u636e\u3002\u524d\u4e24\u4e2a\u662f\u7531\u60a8\u6216\u6574\u4e2a\u7ec4\u7ec7\u6216\u56e2\u4f53\u5b58\u50a8\u548c\u7ef4\u62a4\u7684\u6570\u636e\u96c6\u3002\u5f00\u653e\u6570\u636e\u662f\u6307\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/opendata"},"AWS Open Data")," \u4e0a\u7684\u5f00\u653e\u6570\u636e\u63d0\u4f9b\u7684\u6570\u636e\u3002\u9488\u5bf9\u5f00\u653e\u6570\u636e\u96c6\u7684\u9891\u7e41\u626b\u63cf\u53ef\u786e\u4fdd\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u6700\u65b0\u7684\u5f00\u653e\u6570\u636e\u96c6\u3002"),(0,i.kt)("h3",{id:"aws-\u670d\u52a1\u76ee\u5f55"},"AWS \u670d\u52a1\u76ee\u5f55"),(0,i.kt)("p",null,"Service Workbench \u4e2d\u7684 Workspace \u7ba1\u7406\u7684\u6838\u5fc3\u662f ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/servicecatalog"},"AWS Service Catalog"),"\u3002\u5728\u8fd9\u91cc\uff0c\u7cfb\u7edf\u67e5\u627e\u5e76\u7ba1\u7406\u7528\u4e8e\u5b9a\u4e49\u5de5\u4f5c\u533a\u7684\u7814\u7a76\u73af\u5883\u6a21\u677f\u3002\u5f53\u60a8\u60f3\u8981\u4f7f\u7528\u65b0\u7684 Workspace \u7c7b\u578b\u65f6\uff0c\u53ef\u4ee5\u5728 AWS Service Catalog \u4e2d\u5c06\u5176\u521b\u5efa\u4e3a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html"},"AWS CloudFormation \u6a21\u677f"),"\u3002"),(0,i.kt)("h3",{id:"\u5de5\u4f5c\u533a\u7ba1\u7406"},"\u5de5\u4f5c\u533a\u7ba1\u7406"),(0,i.kt)("p",null,"\u9664\u4e86\u4f7f\u7528\u6a21\u677f\u914d\u7f6e\u73af\u5883\u5916\uff0c\u60a8\u8fd8\u53ef\u4ee5\u8bbf\u95ee\u60a8\u7684\u5de5\u4f5c\u533a\u3001\u67e5\u770b\u8d26\u5355\u8be6\u7ec6\u4fe1\u606f\u6216\u505c\u7528\u5b83\u4eec\u3002"),(0,i.kt)("img",{src:(0,o.Z)("img/deployment/installation/workspace_management.png")}),(0,i.kt)("h3",{id:"\u6210\u672c\u63a7\u5236"},"\u6210\u672c\u63a7\u5236"),(0,i.kt)("h4",{id:"\u5e10\u6237\u7d22\u5f15\u548c\u9879\u76ee"},"\u5e10\u6237\u3001\u7d22\u5f15\u548c\u9879\u76ee"),(0,i.kt)("p",null,"Service Workbench \u4f7f\u7528 AWS \u8d26\u6237\u6765\u7ba1\u7406\u8ba1\u7b97\u5de5\u4f5c\u533a\u3002\u8fd9\u6837\uff0c\u60a8\u53ef\u4ee5\u4e3a\u4e0d\u540c\u7684\u9879\u76ee\u3001\u6210\u672c\u4e2d\u5fc3\u6216\u5176\u4ed6\u76ee\u7684\u4f7f\u7528\u4e0d\u540c\u7684\u5e10\u6237\u5e76\u7ba1\u7406\u6210\u672c\u3002\u501f\u52a9\u81ea\u52a8\u521b\u5efa\u8d26\u53f7\u7684\u529f\u80fd\uff0c\u7ba1\u7406\u5458\u53ef\u4ee5\u4f7f\u7528 Service Workbench \u754c\u9762\u5728\u76f8\u540c\u7684 AWS \u7ec4\u7ec7\u4e0b\u751f\u6210\u65b0\u7684 AWS \u5b50\u8d26\u6237\u3002"),(0,i.kt)("h4",{id:"\u4eea\u8868\u677f"},"\u4eea\u8868\u677f"),(0,i.kt)("p",null,"\u4eea\u8868\u677f\u663e\u793a\u60a8\u7684\u5de5\u4f5c\u533a\u6216\u9879\u76ee\u5df2\u7d2f\u79ef\u7684\u4f7f\u7528\u6210\u672c\u7684\u5feb\u901f\u6982\u89c8\u3002\u8fd9\u6709\u52a9\u4e8e\u60a8\u4fdd\u6301\u9884\u7b97\u5e76\u53d1\u73b0\u6d88\u8017\u8d85\u51fa\u9884\u671f\u8d44\u6e90\u91cf\u7684\u5de5\u4f5c\u533a\u3002"),(0,i.kt)("img",{src:(0,o.Z)("img/deployment/installation/dashboard.png")}),(0,i.kt)("h3",{id:"\u5de5\u4f5c\u533a\u5927\u5c0f"},"\u5de5\u4f5c\u533a\u5927\u5c0f"),(0,i.kt)("p",null,"\u4ece\u6a21\u677f\u521b\u5efa\u5de5\u4f5c\u533a\u65f6\uff0c\u9664\u4e86\u591a\u79cd\u73af\u5883\u5927\u5c0f\u5916\uff0c\u60a8\u8fd8\u53ef\u4ee5\u9009\u62e9\u5de5\u4f5c\u533a\u7c7b\u578b\u3002\u7ba1\u7406\u5458\u53ef\u4ee5\u9884\u5b9a\u4e49\u8fd9\u4e9b\u5927\u5c0f\u5e76\u6839\u636e\u4e2a\u4eba\u6743\u9650\u5c06\u5b83\u4eec\u4e0e\u7528\u6237\u76f8\u5173\u8054\u3002"),(0,i.kt)("img",{src:(0,o.Z)("img/deployment/installation/workspace_sizes.png")}))}h.isMDXComponent=!0}}]);