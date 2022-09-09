"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[4366],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,y=m["".concat(s,".").concat(d)]||m[d]||l[d]||a;return r?n.createElement(y,c(c({ref:t},u),{},{components:r})):n.createElement(y,c({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9945:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=r(4996),i=["components"],s={id:"create_admin_user",title:"Create an administrator user",sidebar_label:"Create an administrator user"},p=void 0,u={unversionedId:"deployment/post_deployment/create_admin_user",id:"deployment/post_deployment/create_admin_user",title:"Create an administrator user",description:"Once you create an Account and an Index and Project, you must create an administrator user in the \u2018Users\u2019 tab. See Figure 7.",source:"@site/docs/deployment/post_deployment/create_admin_user.md",sourceDirName:"deployment/post_deployment",slug:"/deployment/post_deployment/create_admin_user",permalink:"/service-workbench-on-aws-cn/deployment/post_deployment/create_admin_user",draft:!1,editUrl:"https://github.com/awslabs/go-research-on-aws/website/docs/deployment/post_deployment/create_admin_user.md",tags:[],version:"current",frontMatter:{id:"create_admin_user",title:"Create an administrator user",sidebar_label:"Create an administrator user"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Create indexes and projects",permalink:"/service-workbench-on-aws-cn/deployment/post_deployment/create_index_project"},next:{title:"Import AWS Service Catalog products",permalink:"/service-workbench-on-aws-cn/deployment/post_deployment/import_service_catalog_products"}},l={},m=[],d={toc:m};function y(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Once you create an ",(0,a.kt)("a",{parentName:"p",href:"/deployment/post_deployment/link_aws_account"},"Account")," and an ",(0,a.kt)("a",{parentName:"p",href:"/deployment/post_deployment/create_index_project"},"Index and Project"),", you must create an administrator user in the \u2018",(0,a.kt)("strong",{parentName:"p"},"Users"),"\u2019 tab. See ",(0,a.kt)("strong",{parentName:"p"},"Figure 7"),"."),(0,a.kt)("img",{src:(0,c.Z)("img/deployment/post_deployment/create_user_00.jpg")}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"Figure: Create an administrator"))," "),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"Note"),": A root user account will already be created, however, you must not routinely use the root user account.")," "),(0,a.kt)("p",null,"For testing purposes, you can create a local user by choosing  ",(0,a.kt)("strong",{parentName:"p"},"Add Local User"),". Assign the user the administrator\u2019s role, and associate the user with the ",(0,a.kt)("strong",{parentName:"p"},"Project")," you created, and set the status to ",(0,a.kt)("strong",{parentName:"p"},"Active"),". "),(0,a.kt)("img",{src:(0,c.Z)("img/deployment/post_deployment/create_user_01.jpg")}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"Figure: Add local user"))),(0,a.kt)("p",null,"In production environments we highly recommend using an IDP. For more details, refer to the ",(0,a.kt)("em",{parentName:"p"},"Service Workbench Configuration Guide"),"."))}y.isMDXComponent=!0}}]);