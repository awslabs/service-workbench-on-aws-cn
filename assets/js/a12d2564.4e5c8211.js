"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[7914],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||l[m]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},4996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return c}});var r=n(2263),o=n(3919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,c=a.forcePrependBaseUrl,i=void 0!==c&&c,p=a.absolute,s=void 0!==p&&p;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(i)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(a,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},5472:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=n(4996),i=["components"],p={id:"create_index_project",title:"Create indexes and projects",sidebar_label:"Create indexes and projects"},s=void 0,u={unversionedId:"deployment/post_deployment/create_index_project",id:"deployment/post_deployment/create_index_project",isDocsHomePage:!1,title:"Create indexes and projects",description:"Now that you have onboarded a hosting account, you can create indexes and projects associated to this account.",source:"@site/docs/deployment/post_deployment/create_index_project.md",sourceDirName:"deployment/post_deployment",slug:"/deployment/post_deployment/create_index_project",permalink:"/service-workbench-on-aws-cn/deployment/post_deployment/create_index_project",editUrl:"https://github.com/awslabs/go-research-on-aws/website/docs/deployment/post_deployment/create_index_project.md",tags:[],version:"current",frontMatter:{id:"create_index_project",title:"Create indexes and projects",sidebar_label:"Create indexes and projects"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Create or add accounts",permalink:"/service-workbench-on-aws-cn/deployment/post_deployment/aws_accounts"},next:{title:"Create an administrator user",permalink:"/service-workbench-on-aws-cn/deployment/post_deployment/create_admin_user"}},l=[],d={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Now that you have onboarded a hosting account, you can create indexes and projects associated to this account."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Projects")," and ",(0,a.kt)("strong",{parentName:"p"},"Indexes")," form a hierarchy under ",(0,a.kt)("strong",{parentName:"p"},"Accounts"),". Each account can have multiple ",(0,a.kt)("strong",{parentName:"p"},"Indexes"),", each ",(0,a.kt)("strong",{parentName:"p"},"Index")," can have multiple ",(0,a.kt)("strong",{parentName:"p"},"Projects"),". ",(0,a.kt)("strong",{parentName:"p"},"Projects")," are attached to ",(0,a.kt)("strong",{parentName:"p"},"Users"),", so you must create the ",(0,a.kt)("strong",{parentName:"p"},"Projects")," first."),(0,a.kt)("p",null,"After you create an ",(0,a.kt)("a",{parentName:"p",href:"/deployment/post_deployment/link_aws_account"},"Account")," in the ",(0,a.kt)("strong",{parentName:"p"},"Accounts")," tab of the administrative interface, create an ",(0,a.kt)("strong",{parentName:"p"},"Index")," that links to the account, by selecting the ",(0,a.kt)("strong",{parentName:"p"},"Account ID")," from the drop-down. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("strong",{parentName:"li"},"Indexes")," tab, choose ",(0,a.kt)("strong",{parentName:"li"},"Add Index"),". ")),(0,a.kt)("img",{src:(0,c.Z)("img/deployment/post_deployment/create_index_00.jpg")}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"Figure: Create an index"))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("strong",{parentName:"li"},"Project")," that links to the new Index. In the ",(0,a.kt)("strong",{parentName:"li"},"Projects")," tab, choose ",(0,a.kt)("strong",{parentName:"li"},"Add Project"),". ")),(0,a.kt)("img",{src:(0,c.Z)("img/deployment/post_deployment/create_index_01.jpg")}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"Figure: Create a project"))))}m.isMDXComponent=!0}}]);