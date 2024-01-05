"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[5573],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,s(s({ref:n},u),{},{components:t})):r.createElement(f,s({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=p;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8729:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),s=["components"],c={id:"master_role",title:"Master Account Role",sidebar_label:"Master Account Role"},i=void 0,l={unversionedId:"user_guide/sidebar/admin/accounts/aws_accounts/master_role",id:"user_guide/sidebar/admin/accounts/aws_accounts/master_role",title:"Master Account Role",description:"This role resides in the Master AWS Account and is assumed by the Main AWS Account.",source:"@site/docs/user_guide/sidebar/admin/accounts/aws_accounts/master_role.md",sourceDirName:"user_guide/sidebar/admin/accounts/aws_accounts",slug:"/user_guide/sidebar/admin/accounts/aws_accounts/master_role",permalink:"/service-workbench-on-aws-cn/user_guide/sidebar/admin/accounts/aws_accounts/master_role",draft:!1,tags:[],version:"current",frontMatter:{id:"master_role",title:"Master Account Role",sidebar_label:"Master Account Role"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Set AWS Account Budget",permalink:"/service-workbench-on-aws-cn/user_guide/sidebar/admin/accounts/aws_accounts/set_account_budget"},next:{title:"Cross Account Execution Role",permalink:"/service-workbench-on-aws-cn/user_guide/sidebar/admin/accounts/aws_accounts/cross_account_execution_role"}},u={},d=[{value:"Master Role Trust Policy",id:"master-role-trust-policy",level:2},{value:"Master Role Permissions",id:"master-role-permissions",level:2},{value:"Managed Policy: AWSOrganizationsFullAccess",id:"managed-policy-awsorganizationsfullaccess",level:3},{value:"Inline Policy: sts:AssumeRole",id:"inline-policy-stsassumerole",level:3}],p={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This role resides in the ",(0,o.kt)("a",{parentName:"p",href:"introduction"},(0,o.kt)("strong",{parentName:"a"},"Master AWS Account"))," and is assumed by the ",(0,o.kt)("a",{parentName:"p",href:"introduction"},(0,o.kt)("strong",{parentName:"a"},"Main AWS Account")),"."),(0,o.kt)("h2",{id:"master-role-trust-policy"},"Master Role Trust Policy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Principal": {\n        "AWS": "arn:aws:iam::${MainAccount}:root"\n      },\n      "Action": "sts:AssumeRole",\n      "Condition": {\n        "StringEquals": {\n          "sts:ExternalId": ${ExternalId}\n        }\n      }\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"master-role-permissions"},"Master Role Permissions"),(0,o.kt)("p",null,"The follwing details the Managed and Inline Policy permissions needed."),(0,o.kt)("h3",{id:"managed-policy-awsorganizationsfullaccess"},"Managed Policy: AWSOrganizationsFullAccess"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": "organizations:*",\n            "Resource": "*"\n        }\n    ]\n}\n')),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"You should restricted the actions to ",(0,o.kt)("inlineCode",{parentName:"p"},"createAccount"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"describeCreateAccountStatus")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"describeAccount")," only.")),(0,o.kt)("h3",{id:"inline-policy-stsassumerole"},"Inline Policy: sts:AssumeRole"),(0,o.kt)("p",null,"This policy is for the controlling role between ",(0,o.kt)("a",{parentName:"p",href:"introduction"},(0,o.kt)("strong",{parentName:"a"},"Master AWS Account"))," and ",(0,o.kt)("a",{parentName:"p",href:"introduction"},(0,o.kt)("strong",{parentName:"a"},"Master AWS Account")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": {\n        "Effect": "Allow",\n        "Action": "sts:AssumeRole",\n        "Resource": "arn:aws:iam::*:role/OrganizationAccountAccessRole"\n    }\n}\n')))}m.isMDXComponent=!0}}]);