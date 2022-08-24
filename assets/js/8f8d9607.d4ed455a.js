"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[9963],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(2263),a=n(3919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,l=i.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},7224:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(4996),c=["components"],l={id:"architecture",title:"Service Workbench \u67b6\u6784",sidebar_label:"Service Workbench \u67b6\u6784"},s=void 0,u={unversionedId:"zh/installation_guide/architecture",id:"zh/installation_guide/architecture",isDocsHomePage:!1,title:"Service Workbench \u67b6\u6784",description:"Service Workbench \u96c6\u6210\u4e86\u73b0\u6709\u7684 AWS \u670d\u52a1\uff0c\u4f8b\u5982 Amazon CloudFront\u3001AWS Lambda \u548c AWS Step Functions\u3002 \u60a8\u53ef\u4ee5\u4f7f\u7528 Service Workbench \u521b\u5efa\u81ea\u5b9a\u4e49\u7684\u7814\u7a76\u73af\u5883\u6a21\u677f\u5e76\u4e0e\u5176\u4ed6\u7ec4\u7ec7\u5171\u4eab\u8fd9\u4e9b\u6a21\u677f\u3002Service Workbench \u8fd8\u96c6\u6210\u4e86 AWS Cost Explorer\u3001AWS Budgets \u548c AWS Organizations\uff0c\u4ece\u800c\u63d0\u4f9b\u6210\u672c\u900f\u660e\u5ea6\u3002",source:"@site/docs/zh/installation_guide/architecture.md",sourceDirName:"zh/installation_guide",slug:"/zh/installation_guide/architecture",permalink:"/service-workbench-on-aws-cn/zh/installation_guide/architecture",editUrl:"https://github.com/awslabs/go-research-on-aws/website/docs/zh/installation_guide/architecture.md",tags:[],version:"current",frontMatter:{id:"architecture",title:"Service Workbench \u67b6\u6784",sidebar_label:"Service Workbench \u67b6\u6784"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Service Workbench \u6982\u8ff0",permalink:"/service-workbench-on-aws-cn/zh/installation_guide/overview"},next:{title:"\u5b89\u88c5\u7ec4\u4ef6",permalink:"/service-workbench-on-aws-cn/zh/installation_guide/components"}},d=[{value:"\u4e3b\u8d26\u6237",id:"\u4e3b\u8d26\u6237",children:[],level:3},{value:"\u6258\u7ba1\u8d26\u6237",id:"\u6258\u7ba1\u8d26\u6237",children:[],level:3},{value:"\u8eab\u4efd\u8ba4\u8bc1",id:"\u8eab\u4efd\u8ba4\u8bc1",children:[],level:3},{value:"\u5b58\u50a8",id:"\u5b58\u50a8",children:[],level:3},{value:"AWS \u670d\u52a1\u76ee\u5f55",id:"aws-\u670d\u52a1\u76ee\u5f55",children:[],level:3},{value:"\u5de5\u4f5c\u533a\u7ba1\u7406",id:"\u5de5\u4f5c\u533a\u7ba1\u7406",children:[],level:3},{value:"\u6210\u672c\u63a7\u5236",id:"\u6210\u672c\u63a7\u5236",children:[{value:"\u8d26\u6237\u3001\u7d22\u5f15\u548c\u9879\u76ee",id:"\u8d26\u6237\u7d22\u5f15\u548c\u9879\u76ee",children:[],level:4},{value:"\u4eea\u8868\u677f",id:"\u4eea\u8868\u677f",children:[],level:4}],level:3},{value:"\u5de5\u4f5c\u533a\u5927\u5c0f",id:"\u5de5\u4f5c\u533a\u5927\u5c0f",children:[],level:3}],p={toc:d};function m(e){var t=e.components,l=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Service Workbench \u96c6\u6210\u4e86\u73b0\u6709\u7684 AWS \u670d\u52a1\uff0c\u4f8b\u5982 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html"},"Amazon CloudFront"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"},"AWS Lambda")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/lambda-stepfunctions.html"},"AWS Step Functions"),"\u3002 \u60a8\u53ef\u4ee5\u4f7f\u7528 Service Workbench \u521b\u5efa\u81ea\u5b9a\u4e49\u7684\u7814\u7a76\u73af\u5883\u6a21\u677f\u5e76\u4e0e\u5176\u4ed6\u7ec4\u7ec7\u5171\u4eab\u8fd9\u4e9b\u6a21\u677f\u3002Service Workbench \u8fd8\u96c6\u6210\u4e86 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-getting-started.html"},"AWS Cost Explorer"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html"},"AWS Budgets")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html"},"AWS Organizations"),"\uff0c\u4ece\u800c\u63d0\u4f9b\u6210\u672c\u900f\u660e\u5ea6\u3002"),(0,i.kt)("h3",{id:"\u4e3b\u8d26\u6237"},"\u4e3b\u8d26\u6237"),(0,i.kt)("p",null,"Service Workbench \u90e8\u7f72\u5728\u4e3b\u8d26\u6237\u4e2d\u7684\u67b6\u6784\u5982\u4e0b\u6240\u793a\u3002"),(0,i.kt)("img",{src:(0,o.Z)("img/deployment/installation/main_account.png")}),(0,i.kt)("h3",{id:"\u6258\u7ba1\u8d26\u6237"},"\u6258\u7ba1\u8d26\u6237"),(0,i.kt)("p",null,"Service Workbench \u90e8\u7f72\u8ba1\u7b97\u8d44\u6e90\u5230\u6258\u7ba1\u8d26\u6237\u3002"),(0,i.kt)("img",{src:(0,o.Z)("img/deployment/installation/hosting_account.png")}),(0,i.kt)("h3",{id:"\u8eab\u4efd\u8ba4\u8bc1"},"\u8eab\u4efd\u8ba4\u8bc1"),(0,i.kt)("p",null,"Service Workbench \u53ef\u4ee5\u4f7f\u7528 Amazon Cognito \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002 Amazon Cognito \u53ef\u4ee5\u4e0e\u4e0d\u540c\u7684\u8eab\u4efd\u9a8c\u8bc1\u63d0\u4f9b\u5546\u8054\u5408\uff0c\u4f8b\u5982 Active Directory\u3001Auth0 \u6216\u5176\u4ed6\u8eab\u4efd\u63d0\u4f9b\u5546\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"\u5728 Amazon Cognito \u4e0d\u53ef\u7528\u7684\u533a\u57df\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 OIDC \u63d0\u4f9b\u8eab\u4efd\u9a8c\u8bc1\u3002\n")))),(0,i.kt)("h3",{id:"\u5b58\u50a8"},"\u5b58\u50a8"),(0,i.kt)("p",null,"Service Workbench \u5c06\u6570\u636e\u96c6\u5206\u6210\u4e09\u79cd\u7c7b\u578b\uff1a\u6211\u7684\u6570\u636e\u96c6\u3001\u7ec4\u7ec7\u7684\u6570\u636e\u96c6\u548c\u5f00\u653e\u6570\u636e\u3002\u524d\u4e24\u79cd\u7c7b\u578b\u662f\u7531\u60a8\u6216\u6574\u4e2a\u7ec4\u7ec7\u6216\u56e2\u4f53\u5b58\u50a8\u548c\u7ef4\u62a4\u7684\u6570\u636e\u96c6\u3002\u5f00\u653e\u6570\u636e\u662f\u6307\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/opendata"},"AWS Open Data")," \u63d0\u4f9b\u7684\u6570\u636e\u3002\u901a\u8fc7\u4e0d\u65ad\u626b\u63cf\u5f00\u653e\u6570\u636e\u96c6\uff08datasets)\u53ef\u786e\u4fdd\u7528\u6237\u4f7f\u7528\u6700\u65b0\u7684\u5f00\u653e\u6570\u636e\u96c6\u3002"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"AWS Open Data \u4ec5\u9002\u7528\u4e8e\u90e8\u7f72\u5728\u5168\u7403\u533a\u57df\u7684\u60c5\u51b5\u3002\n")))),(0,i.kt)("h3",{id:"aws-\u670d\u52a1\u76ee\u5f55"},"AWS \u670d\u52a1\u76ee\u5f55"),(0,i.kt)("p",null,"Service Workbench \u7684\u5de5\u4f5c\u533a\u7ba1\u7406\u6700\u6838\u5fc3\u7684\u662f ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/servicecatalog"},"AWS Service Catalog"),"\u3002\u7cfb\u7edf\u4f1a\u67e5\u627e\u5e76\u7ba1\u7406\u7528\u4e8e\u5b9a\u4e49\u5de5\u4f5c\u533a\u7684\u7814\u7a76\u73af\u5883\u6a21\u677f\u3002\u5f53\u60a8\u60f3\u8981\u4f7f\u7528\u65b0\u7684\u5de5\u4f5c\u533a\u7c7b\u578b\u65f6\uff0c\u53ef\u4ee5\u5728 AWS Service Catalog \u4e2d\u5c06\u5176\u521b\u5efa\u4e3a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html"},"AWS CloudFormation \u6a21\u677f"),"\u3002"),(0,i.kt)("h3",{id:"\u5de5\u4f5c\u533a\u7ba1\u7406"},"\u5de5\u4f5c\u533a\u7ba1\u7406"),(0,i.kt)("p",null,"\u60a8\u4e0d\u4ec5\u53ef\u4ee5\u4f7f\u7528\u6a21\u677f\u914d\u7f6e\u73af\u5883\uff0c\u8fd8\u53ef\u4ee5\u8bbf\u95ee\u81ea\u5df1\u7684\u5de5\u4f5c\u533a\u3001\u67e5\u770b\u8d26\u5355\u8be6\u7ec6\u4fe1\u606f\u6216\u505c\u7528\u5b83\u4eec\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5202).Z})),(0,i.kt)("h3",{id:"\u6210\u672c\u63a7\u5236"},"\u6210\u672c\u63a7\u5236"),(0,i.kt)("h4",{id:"\u8d26\u6237\u7d22\u5f15\u548c\u9879\u76ee"},"\u8d26\u6237\u3001\u7d22\u5f15\u548c\u9879\u76ee"),(0,i.kt)("p",null,"Service Workbench \u4f7f\u7528 AWS \u8d26\u6237\u6765\u7ba1\u7406\u8ba1\u7b97\u5de5\u4f5c\u533a\u3002\u60a8\u53ef\u4ee5\u4e3a\u4e0d\u540c\u7684\u9879\u76ee\u3001\u6210\u672c\u4e2d\u5fc3\u6216\u5176\u4ed6\u76ee\u7684\u4f7f\u7528\u4e0d\u540c\u7684\u8d26\u6237\u5e76\u7ba1\u7406\u6210\u672c\u3002\u501f\u52a9\u81ea\u52a8\u521b\u5efa\u8d26\u6237\u7684\u529f\u80fd\uff0c\u7ba1\u7406\u5458\u53ef\u4ee5\u4f7f\u7528 Service Workbench \u754c\u9762\u5728\u76f8\u540c\u7684 AWS \u7ec4\u7ec7\u4e0b\u751f\u6210\u65b0\u7684 AWS \u5b50\u8d26\u6237\u3002"),(0,i.kt)("h4",{id:"\u4eea\u8868\u677f"},"\u4eea\u8868\u677f"),(0,i.kt)("p",null,"\u4eea\u8868\u677f\u5c06\u5c55\u793a\u60a8\u7684\u5de5\u4f5c\u533a\u6216\u9879\u76ee\u5df2\u7d2f\u79ef\u7684\u4f7f\u7528\u6210\u672c\uff0c\u8fd9\u6709\u52a9\u4e8e\u60a8\u4fdd\u6301\u5728\u9884\u7b97\u5185\u5e76\u53d1\u73b0\u6d88\u8017\u8d85\u51fa\u9884\u671f\u8d44\u6e90\u91cf\u7684\u5de5\u4f5c\u533a\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2449).Z})),(0,i.kt)("h3",{id:"\u5de5\u4f5c\u533a\u5927\u5c0f"},"\u5de5\u4f5c\u533a\u5927\u5c0f"),(0,i.kt)("p",null,"\u4ece\u6a21\u677f\u521b\u5efa\u5de5\u4f5c\u533a\u65f6\uff0c\u9664\u4e86\u591a\u79cd\u73af\u5883\u9009\u9879\u5916\uff0c\u60a8\u8fd8\u53ef\u4ee5\u9009\u62e9\u5de5\u4f5c\u533a\u7c7b\u578b\u3002\u7ba1\u7406\u5458\u53ef\u4ee5\u9884\u5b9a\u4e49\u8fd9\u4e9b\u5927\u5c0f\u5e76\u6839\u636e\u4e2a\u4eba\u6743\u9650\u5c06\u5b83\u4eec\u4e0e\u7528\u6237\u76f8\u5173\u8054\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4279).Z})))}m.isMDXComponent=!0},2449:function(e,t,n){t.Z=n.p+"assets/images/dashboard-fcfa09def3fe5bb32b7939fd81f6efdf.png"},5202:function(e,t,n){t.Z=n.p+"assets/images/workspace_management-53318420910ae6183aed295aafe8ba8b.png"},4279:function(e,t,n){t.Z=n.p+"assets/images/workspace_sizes-9baa6d5c940ea9107cad9163bd62574b.png"}}]);