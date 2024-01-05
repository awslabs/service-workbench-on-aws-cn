"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[5021],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,b=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(b,c(c({ref:t},l),{},{components:n})):r.createElement(b,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3396:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={id:"set_account_budget",title:"Set AWS Account Budget",sidebar_label:"Set AWS Account Budget"},u=void 0,s={unversionedId:"user_guide/sidebar/admin/accounts/aws_accounts/set_account_budget",id:"user_guide/sidebar/admin/accounts/aws_accounts/set_account_budget",title:"Set AWS Account Budget",description:"Set AWS Account Budget",source:"@site/docs/user_guide/sidebar/admin/accounts/aws_accounts/set_account_budget.md",sourceDirName:"user_guide/sidebar/admin/accounts/aws_accounts",slug:"/user_guide/sidebar/admin/accounts/aws_accounts/set_account_budget",permalink:"/service-workbench-on-aws-cn/user_guide/sidebar/admin/accounts/aws_accounts/set_account_budget",draft:!1,tags:[],version:"current",frontMatter:{id:"set_account_budget",title:"Set AWS Account Budget",sidebar_label:"Set AWS Account Budget"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Invite an AWS Member Account",permalink:"/service-workbench-on-aws-cn/user_guide/sidebar/admin/accounts/aws_accounts/invite_member_account"},next:{title:"Master Account Role",permalink:"/service-workbench-on-aws-cn/user_guide/sidebar/admin/accounts/aws_accounts/master_role"}},l={},d=[{value:"Set AWS Account Budget",id:"set-aws-account-budget",level:2}],p={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"set-aws-account-budget"},"Set AWS Account Budget"),(0,a.kt)("p",null,"To set budget for an AWS account, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the portal navigate to the ",(0,a.kt)("strong",{parentName:"li"},"Accounts")," page using the menu on the left."),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("strong",{parentName:"li"},"AWS Accounts")," tab along the top."),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Budget Detail")," button."),(0,a.kt)("li",{parentName:"ol"},"Provide Budget Limit, start date and end date (End date needs to be less than a year from start date)"),(0,a.kt)("li",{parentName:"ol"},"Provide notification thresholds and email "),(0,a.kt)("li",{parentName:"ol"},"Thresholds and email are interdependent, please fill them both to get notification or remove both to turn off notification")),(0,a.kt)("p",null,"Once the budget is set, AWS Budget will be monitoring the actual spent of the corresponding AWS account. Alert will be sent\nto the notification email address when the actual spent breach each of the thresholds. "),(0,a.kt)("p",null,"Alert will also be sent 7 days prior to budget end date. If notification email is set, budget end date alert will be\nsent to the notification email. if notification email is not set, budget end date alert will be sent to the email address\nthe AWS account is registered under."))}f.isMDXComponent=!0}}]);