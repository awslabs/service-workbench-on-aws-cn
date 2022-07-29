"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[9849],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(2263),a=n(3919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,l=void 0!==o&&o,p=i.absolute,u=void 0!==p&&p;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+c:c}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8854:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(4996),l=["components"],p={id:"auth0",title:"Configuring Service Workbench using Auth0",sidebar_label:"Configuring Service Workbench using Auth0"},u=void 0,c={unversionedId:"configuration_guide/auth0",id:"configuration_guide/auth0",isDocsHomePage:!1,title:"Configuring Service Workbench using Auth0",description:"You can configure Service Workbench using Auth0 by first creating an application in Auth0. Next, configure SAML and download the SAML template. Finally, configure the Service Workbench environment.",source:"@site/docs/configuration_guide/auth0.md",sourceDirName:"configuration_guide",slug:"/configuration_guide/auth0",permalink:"/service-workbench-on-aws-cn/configuration_guide/auth0",editUrl:"https://github.com/awslabs/go-research-on-aws/website/docs/configuration_guide/auth0.md",tags:[],version:"current",frontMatter:{id:"auth0",title:"Configuring Service Workbench using Auth0",sidebar_label:"Configuring Service Workbench using Auth0"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Configuring Service Workbench using Microsoft Active Directory Federation Services",permalink:"/service-workbench-on-aws-cn/configuration_guide/adfs"},next:{title:"Deployment Stages",permalink:"/service-workbench-on-aws-cn/deployment/deployment_stages"}},s=[{value:"Configuring Auth0",id:"configuring-auth0",children:[{value:"Prerequisites",id:"prerequisites",children:[],level:3},{value:"Creating an application using Auth0",id:"creating-an-application-using-auth0",children:[],level:3}],level:2},{value:"Configuring SAML2",id:"configuring-saml2",children:[],level:2},{value:"Downloading SAML2 template",id:"downloading-saml2-template",children:[],level:2},{value:"Configuring Service Workbench environment",id:"configuring-service-workbench-environment",children:[],level:2},{value:"References:",id:"references",children:[],level:2}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can configure Service Workbench using Auth0 by first creating an application in Auth0. Next, configure SAML and download the SAML template. Finally, configure the Service Workbench environment."),(0,i.kt)("h2",{id:"configuring-auth0"},"Configuring Auth0"),(0,i.kt)("p",null,"Auth0 is another IdP, which used for adding authentication and authorization to your applications. Service Workbench on AWS can be configured to authenticate users through Auth0 and SAML2. For more information about using Auth0, see ",(0,i.kt)("a",{parentName:"p",href:"https://auth0.com/docs/protocols/saml-protocol/configure-auth0-as-service-and-identity-provider"},"Test SAML SSO with Auth0 as Service Provider and Identity Provider"),". "),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"You must have an existing account with ",(0,i.kt)("a",{parentName:"p",href:"https://auth0.com/"},"Auth0"),". "),(0,i.kt)("h3",{id:"creating-an-application-using-auth0"},"Creating an application using Auth0"),(0,i.kt)("p",null,"To create an application:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Log in to your ",(0,i.kt)("a",{parentName:"li",href:"https://auth0.com/"},"Auth0")," account and navigate to the ",(0,i.kt)("strong",{parentName:"li"},"Applications")," page. "),(0,i.kt)("li",{parentName:"ol"},"If an application does not already exist, choose ",(0,i.kt)("strong",{parentName:"li"},"Create Application"),".")),(0,i.kt)("img",{src:(0,o.Z)("img/deployment/post_deployment/auth01.png")}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 1: Applications webpage of Auth0.com")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Select the application type as ",(0,i.kt)("strong",{parentName:"li"},"Single Page Web Applications")," and choose ",(0,i.kt)("strong",{parentName:"li"},"Create"),".")),(0,i.kt)("img",{src:(0,o.Z)("img/deployment/post_deployment/auth02.png")}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 2: Application types")),(0,i.kt)("h2",{id:"configuring-saml2"},"Configuring SAML2"),(0,i.kt)("p",null,"SAML is an XML-based open standard for transferring identity data between two parties: an identity provider (IdP) and a service provider (SP). For more information about SAML authentication, see ",(0,i.kt)("a",{parentName:"p",href:"https://auth0.com/blog/how-saml-authentication-works/#How-does-SAML-Authentication-Work-"},"How does SAML Authentication Work?")),(0,i.kt)("p",null,"To configure SAML2: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to the ",(0,i.kt)("strong",{parentName:"li"},"Addons")," tab and enable ",(0,i.kt)("strong",{parentName:"li"},"SAML2 WEB APP"),".")),(0,i.kt)("img",{src:(0,o.Z)("img/deployment/post_deployment/auth03.png")}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 3: Addons tab for Single Page Web Applications")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Application Callback URL")," field, enter the following URL. Replace ",(0,i.kt)("inlineCode",{parentName:"li"},"STAGE_NAME")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"SOLUTION_NAME")," with the values from the Service Workbench settings file and ",(0,i.kt)("inlineCode",{parentName:"li"},"REGION")," with the appropriate region.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://STAGE_NAME-SOLUTION_NAME.auth.REGION.amazoncognito.com/saml2/idpresponse")),(0,i.kt)("img",{src:(0,o.Z)("img/deployment/post_deployment/auth04.png")}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 4: Application callback URL page and settings")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter the JSON code into the settings block and  replace ",(0,i.kt)("inlineCode",{parentName:"p"},"<USER_POOL_ID>")," with the Service Workbench Amazon Cognito user pool ID value found in the Amazon Cognito console. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter same values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"<STAGE_NAME>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<SOLUTION_NAME>"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"<REGION>")," as in the previous step. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After entering JSON with the appropriate values, scroll to the bottom and choose ",(0,i.kt)("strong",{parentName:"p"},"Save"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n"audience": "urn:amazon:cognito:sp:USER_POOL_ID",\n"Mappings": {\n"Email": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress",\n"name": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name",\n"given_name": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname",\n"family_name": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname"\n},\n"logout": {\n"callback": "https://STAGE_NAME-SOLUTION_NAME.auth.REGION.amazoncognito.com/saml2/logout"\n},\n"nameIdentifierFormat": "urn:oasis:names:tc:SAML:2.0:nameid-format:persistent"\n}\n')),(0,i.kt)("p",null,"For more information about IdP workflow, see ",(0,i.kt)("a",{parentName:"p",href:"/configuration_guide/workflow"},"Service Workbench and IdP workflow"),"."),(0,i.kt)("h2",{id:"downloading-saml2-template"},"Downloading SAML2 template"),(0,i.kt)("p",null,"To download SAML metadata:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"SAML2 Web App")," again, and go to the ",(0,i.kt)("strong",{parentName:"li"},"Usage")," tab. "),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Download")," to download the SAML metadata XML file locally.")),(0,i.kt)("img",{src:(0,o.Z)("img/deployment/post_deployment/auth05.png")}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 5: Usage tab of the SAML2 web application")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Rename and place the downloaded file in the repository at the following location:")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"main/solution/post-demployment/config/saml-metadata/auth0_com-metadata.xml")),(0,i.kt)("h2",{id:"configuring-service-workbench-environment"},"Configuring Service Workbench environment"),(0,i.kt)("p",null,"Add the following items to the ",(0,i.kt)("inlineCode",{parentName:"p"},"$STAGE.yml")," settings file for the environment (replace ",(0,i.kt)("inlineCode",{parentName:"p"},"DOMAIN")," with your Auth0 domain)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fedIdpIds: '[\"Domain\"]'\nfedIdpNames: '[\"Auth0\"]'\nfedIdpDisplayNames: '[\"Auth0\"]'\nfedIdpMetadatas: '[\"s3://${self:custom.settings.deploymentBucketName}/saml-metadata/auth0_com-metadata.xml\"]'\n")),(0,i.kt)("p",null,"Finally, redeploy the system using the ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts/environment-deploy.sh STAGE_NAME")," command.\nThe reference documentation can be found ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/premiumsupport/knowledge-center/auth0-saml-cognito-user-pool/"},"here"),"."),(0,i.kt)("h2",{id:"references"},"References:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-integrating-3rd-party-saml-providers.html"},"Integrating Third-Party SAML Identity Providers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-saml-idp.html"},"Adding SAML IdPs to a user pool"))))}m.isMDXComponent=!0}}]);