"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[3617],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),g=i,m=p["".concat(u,".").concat(g)]||p[g]||d[g]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9742:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={id:"studies_page",title:"Studies Page",sidebar_label:"Studies Page"},u=void 0,l={unversionedId:"user_guide/sidebar/common/studies/studies_page",id:"user_guide/sidebar/common/studies/studies_page",isDocsHomePage:!1,title:"Studies Page",description:"The Studies page provides a central location for creating Studies, uploading files, managing Study permissions, and creating new Workspaces.",source:"@site/docs/user_guide/sidebar/common/studies/studies_page.md",sourceDirName:"user_guide/sidebar/common/studies",slug:"/user_guide/sidebar/common/studies/studies_page",permalink:"/service-workbench-on-aws-cn/user_guide/sidebar/common/studies/studies_page",editUrl:"https://github.com/awslabs/go-research-on-aws/website/docs/user_guide/sidebar/common/studies/studies_page.md",tags:[],version:"current",frontMatter:{id:"studies_page",title:"Studies Page",sidebar_label:"Studies Page"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Data Sources",permalink:"/service-workbench-on-aws-cn/user_guide/sidebar/common/studies/data_sources"},next:{title:"Sharing a Study",permalink:"/service-workbench-on-aws-cn/user_guide/sidebar/common/studies/sharing_a_study"}},c=[{value:"Changing organization-categorized Study permissions",id:"changing-organization-categorized-study-permissions",children:[],level:3},{value:"Creating a Study and uploading files",id:"creating-a-study-and-uploading-files",children:[],level:3}],d={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Studies page provides a central location for creating Studies, uploading files, managing Study permissions, and creating new Workspaces."),(0,a.kt)("h3",{id:"changing-organization-categorized-study-permissions"},"Changing organization-categorized Study permissions"),(0,a.kt)("p",null,"To change permissions for an organization's Study:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Permissions")," button for the Study."),(0,a.kt)("li",{parentName:"ol"},"Click the pencil icon beside the Users level."),(0,a.kt)("li",{parentName:"ol"},"Update permissions as needed.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": Changing a user\u2019s permissions for an external Study results in all existing workspaces for that user losing all access to the Study. This will be addressed in a future release."),(0,a.kt)("h3",{id:"creating-a-study-and-uploading-files"},"Creating a Study and uploading files"),(0,a.kt)("p",null,"To create a Study:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create Study"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter a unique ID, type (My study or Organization Study), Name, Description, and Project ID."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create Study"),".")),(0,a.kt)("p",null,"To upload files:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Upload Files"),"."),(0,a.kt)("li",{parentName:"ol"},"You can upload files either by dragging and dropping, or by clicking the ",(0,a.kt)("strong",{parentName:"li"},"Upload Files")," or ",(0,a.kt)("strong",{parentName:"li"},"Upload Folder")," button.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": The ",(0,a.kt)("strong",{parentName:"p"},"Upload Files")," button is not visible if you lack write permissions to the Study, or if the Study is external."))}p.isMDXComponent=!0}}]);