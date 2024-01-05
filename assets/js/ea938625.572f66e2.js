"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[83],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,h=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(h,c(c({ref:t},l),{},{components:n})):r.createElement(h,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},597:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={id:"account_structure",title:"Account structure",sidebar_label:"Account structure"},u=void 0,s={unversionedId:"deployment/post_deployment/account_structure",id:"deployment/post_deployment/account_structure",title:"Account structure",description:"Service Workbench uses three types of accounts. You will see these account names throughout the documentation.",source:"@site/docs/deployment/post_deployment/account_structure.md",sourceDirName:"deployment/post_deployment",slug:"/deployment/post_deployment/account_structure",permalink:"/service-workbench-on-aws-cn/deployment/post_deployment/account_structure",draft:!1,tags:[],version:"current",frontMatter:{id:"account_structure",title:"Account structure",sidebar_label:"Account structure"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Post Deployment",permalink:"/service-workbench-on-aws-cn/deployment/post_deployment/"},next:{title:"Prepare the organizational Account",permalink:"/service-workbench-on-aws-cn/deployment/reference/prepare_master_account"}},l={},p=[{value:"Enable Local Users",id:"enable-local-users",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Service Workbench uses ",(0,a.kt)("em",{parentName:"p"},"three")," types of accounts. You will see these account names throughout the documentation. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Organizational")," : Holds the AWS Organization which creates hosting accounts.  Note that you may already have a method of obtaining AWS accounts supported by your organization.  If this is the case, you will not create an organizational account or use the Create Account functionality within Service Workbench when onboarding a hosting account."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Main"),": The account from which Service Workbench is deployed. Will be billed for all AWS usage charges in this deployment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Master"),": Holds the AWS Organization which creates member accounts."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Hosting"),": Accounts that are established associated to the Service Workbench main account through the onboarding process to host the compute resources (Amazon SageMaker notebook instances, Amazon EC2 Windows and Linux instances, Amazon EMR clusters) associated to Service Workbench workspaces.")),(0,a.kt)("p",null,"Read the following files in the source code documentation to learn more about the different types of AWS accounts within Service Workbench: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"README.md")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"main/solution/prepare-master-acc/README.md"))),(0,a.kt)("h2",{id:"enable-local-users"},"Enable Local Users"),(0,a.kt)("p",null,"Local users are created only within the solution. Their credentials are stored in ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/dynamodb/?nc2=type_a"},"Amazon DynamoDB"),". This is the easiest way to install. The alternative is to integrate with an Active Directory."))}d.isMDXComponent=!0}}]);