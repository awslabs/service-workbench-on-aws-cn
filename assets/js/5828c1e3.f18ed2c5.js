"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[9007],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},581:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],c={id:"introduction",title:"Workspaces Introduction",sidebar_label:"Introduction"},s=void 0,u={unversionedId:"user_guide/sidebar/common/workspaces/introduction",id:"user_guide/sidebar/common/workspaces/introduction",title:"Workspaces Introduction",description:"Service Workbench enables organizations to provide researchers with a centralized location to search for data sets and deploy research workspaces. Researchers can access a portal, quickly find data they are interested in, and quickly begin analysis in SageMaker Notebooks, for example.",source:"@site/docs/user_guide/sidebar/common/workspaces/introduction.md",sourceDirName:"user_guide/sidebar/common/workspaces",slug:"/user_guide/sidebar/common/workspaces/introduction",permalink:"/service-workbench-on-aws-cn/user_guide/sidebar/common/workspaces/introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"introduction",title:"Workspaces Introduction",sidebar_label:"Introduction"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Sharing a Study",permalink:"/service-workbench-on-aws-cn/user_guide/sidebar/common/studies/sharing_a_study"},next:{title:"Creating a Workspace",permalink:"/service-workbench-on-aws-cn/user_guide/sidebar/common/workspaces/create_workspace_study"}},l={},p=[],d={toc:p};function m(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Service Workbench enables organizations to provide researchers with a centralized location to search for data sets and deploy research workspaces. Researchers can access a portal, quickly find data they are interested in, and quickly begin analysis in SageMaker Notebooks, for example."),(0,o.kt)("p",null,"Service Workbench also allows an organization to provide access to their data sets, or a subset of their data sets, to external organizations in a controlled way. In addition, the external organization can use their own AWS account for the research workspace and access the data in the hosting organization."),(0,o.kt)("p",null,"Once a user has found the Study or Studies that they are interested in performing research on, they can deploy a Workspace to attach the data to and carry our research."),(0,o.kt)("p",null,"A Workspace is an environment that contains a set of tools to access and integrate data. The following environments are currently provided:"),(0,o.kt)("p",null,"Note: There's currently a 10K limit on the number of workspaces that can be created in one SWB environment. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SageMaker Notebook")," - A SageMaker Jupyter Notebook with TensorFlow, Apache MXNet and Scikit-learn2"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"EMR")," - An Amazon EMR research workspace with Hail 0.2, JupyterLab, Spark 2.4.4 and Hadoop 2.8.52.",(0,o.kt)("br",{parentName:"li"}),"",(0,o.kt)("strong",{parentName:"li"},"Note"),": EMR workspaces are not available if AppStream is enabled for the deployment."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"EC2 - Linux")," - An EC2 Linux instance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"EC2 - Windows")," - An EC2 Windows instance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"EC2 - RStudio")," - An EC2 RStudio instance.")))}m.isMDXComponent=!0}}]);