"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[1122],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5290:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=n(4996),c=["components"],s={id:"aws_accounts",title:"Create or add accounts",sidebar_label:"Create or add accounts"},p=void 0,l={unversionedId:"deployment/post_deployment/aws_accounts",id:"deployment/post_deployment/aws_accounts",title:"Create or add accounts",description:"After logging in as root user for the first time, go to the 'Accounts' page in the SideBar. Service Workbench uses AWS accounts on this page for launching research workspaces. You can add existing AWS accounts or create new ones on the 'Accounts' tab.  Accounts are responsible for the charges incurred by the resources that are deployed within the Service Workbench.",source:"@site/docs/deployment/post_deployment/aws_accounts.md",sourceDirName:"deployment/post_deployment",slug:"/deployment/post_deployment/aws_accounts",permalink:"/service-workbench-on-aws-cn/deployment/post_deployment/aws_accounts",draft:!1,tags:[],version:"current",frontMatter:{id:"aws_accounts",title:"Create or add accounts",sidebar_label:"Create or add accounts"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Prepare your account for AppStream",permalink:"/service-workbench-on-aws-cn/deployment/post_deployment/appstream"},next:{title:"Create indexes and projects",permalink:"/service-workbench-on-aws-cn/deployment/post_deployment/create_index_project"}},u={},m=[{value:"Create or add compute hosting accounts",id:"create-or-add-compute-hosting-accounts",level:2},{value:"Create AWS Account",id:"create-aws-account",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Creating a new Account",id:"creating-a-new-account",level:3},{value:"Add AWS Account",id:"add-aws-account",level:2},{value:"If AppStream is not enabled",id:"if-appstream-is-not-enabled",level:3},{value:"If AppStream is enabled",id:"if-appstream-is-enabled",level:3},{value:"Creating RStudio ALB workspace",id:"creating-rstudio-alb-workspace",level:2},{value:"Accessing RStudio workspace",id:"accessing-rstudio-workspace",level:3},{value:"Application load balancing for RStudio ALB workspace",id:"application-load-balancing-for-rstudio-alb-workspace",level:3},{value:"Limitations",id:"limitations",level:3}],d={toc:m};function h(e){var t=e.components,n=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After logging in as ",(0,r.kt)("strong",{parentName:"p"},"root")," user for the first time, go to the '",(0,r.kt)("strong",{parentName:"p"},"Accounts"),"' page in the ",(0,r.kt)("a",{parentName:"p",href:"/user_guide/introduction"},"SideBar"),". Service Workbench uses AWS accounts on this page for launching research workspaces. You can add existing AWS accounts or create new ones on the '",(0,r.kt)("strong",{parentName:"p"},"Accounts"),"' tab.  Accounts are responsible for the charges incurred by the resources that are deployed within the Service Workbench."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create AWS Account"),": Creates a new AWS account using AWS Organizations.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Add AWS Account"),": Imports an existing AWS account, which will be responsible for its own billing."))),(0,r.kt)("p",null,"Every user is linked to an ",(0,r.kt)("strong",{parentName:"p"},"Account")," through a ",(0,r.kt)("strong",{parentName:"p"},"Project")," and an ",(0,r.kt)("strong",{parentName:"p"},"Index"),", so at least one account must be created or added before creating the first user."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Important:")," If you do not need to create new AWS accounts from within Service Workbench, then skip to the next section, 'Add AWS Account' section below.")),(0,r.kt)("h2",{id:"create-or-add-compute-hosting-accounts"},"Create or add compute hosting accounts"),(0,r.kt)("p",null,"After logging in as the root user for the first time, go to the ",(0,r.kt)("strong",{parentName:"p"},"Accounts")," page. "),(0,r.kt)("img",{src:(0,i.Z)("img/deployment/post_deployment/navbar.png")}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Figure: Service Workbench navigation bar")),(0,r.kt)("p",null,"Service Workbench uses AWS accounts on this page for launching research workspaces. You can add existing AWS accounts or create new ones on the ",(0,r.kt)("strong",{parentName:"p"},"Accounts")," tab."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create AWS Account"),": Creates a new AWS account using AWS Organizations.  Note that ",(0,r.kt)("a",{parentName:"p",href:"/deployment/reference/prepare_master_account"},"Preparing the organizational account")," steps outlined above are a pre-requisite should you require this capability.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Add AWS Account"),": Associates an existing AWS account for purposes of hosting compute resources.  This account can be responsible for its own billing."))),(0,r.kt)("p",null,"Every user is linked to an account through a project and an index, so at least one account must be created or added before associating the first user to a project."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": If you do not need to create new AWS accounts from within Service Workbench, then skip to Add AWS Account section."),(0,r.kt)("h2",{id:"create-aws-account"},"Create AWS Account"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before creating an AWS account from Service Workbench, configure an existing AWS account to be the organizational account for Service Workbench (steps outlined in ",(0,r.kt)("a",{parentName:"p",href:"/deployment/reference/prepare_master_account"},"Preparing the organizational account")," above). When Service Workbench creates new AWS accounts, billing for those accounts is applicable to the organizational account."),(0,r.kt)("h3",{id:"creating-a-new-account"},"Creating a new Account"),(0,r.kt)("p",null,"This creates a new hosting AWS account in the organization, whose billing goes to the organizational account. "),(0,r.kt)("img",{src:(0,i.Z)("img/deployment/post_deployment/newacc1.png")}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Figure: Create a new hosting account"))),(0,r.kt)("p",null,"To create an account:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Service Workbench console, choose ",(0,r.kt)("strong",{parentName:"p"},"AWS Accounts")," and then choose ",(0,r.kt)("strong",{parentName:"p"},"Create AWS Account"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("strong",{parentName:"li"},"Role ARN"),", enter the ",(0,r.kt)("strong",{parentName:"li"},"Master Role ARN")," copied from the ",(0,r.kt)("a",{parentName:"li",href:"/deployment/reference/prepare_master_account"},"Preparing the organizational account")," steps."),(0,r.kt)("li",{parentName:"ul"},"The email address that you specify here must be unique within the organization."),(0,r.kt)("li",{parentName:"ul"},"The External ID is workbench by default. See ",(0,r.kt)("a",{parentName:"li",href:"/deployment/reference/aws_services#Organizations"},"IAM")," for information on how to configure this to another value."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"During processing, the following information displays in the ",(0,r.kt)("strong",{parentName:"p"},"AWS Accounts")," tab:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u2018Trying to create accountID: xxx\u2019")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A workflow in progress in ",(0,r.kt)("strong",{parentName:"p"},"Workflows > Provision Account")," (see ",(0,r.kt)("a",{parentName:"p",href:"http://swb-documentation.s3-website-us-east-1.amazonaws.com/user_guide/sidebar/admin/workflows/introduction"},"Workflows")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Note"),": If instead you see an error message such as, ",(0,r.kt)("inlineCode",{parentName:"p"},"Stop Internal State Account ID not found"),", check that there is an AWS Organization in the console of your organizational account, if deploying Service Workbench in the organizational account. If you are deploying in a member account, check and ensure that you followed the steps described in ",(0,r.kt)("a",{parentName:"p",href:"/deployment/reference/prepare_master_account"},"Preparing the organizational account"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Optionally, in the console, you can inspect the following resources deployed by this script."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In AWS CloudFormation, a stack prep-master is running. It creates the master role and its output is the master role ARN."),(0,r.kt)("li",{parentName:"ul"},"In AWS Organizations, in the organizational account (see IAM), the new account displays. "),(0,r.kt)("li",{parentName:"ul"},"In IAM, the new master role is created."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the account is created, it is listed in AWS Accounts."))),(0,r.kt)("h2",{id:"add-aws-account"},"Add AWS Account"),(0,r.kt)("p",null,"Adding an existing AWS account enables Service Workbench to launch research workspaces. The existing account alignment (standalone or associated to an an organization) determines the billing responsibility."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("strong",{parentName:"p"},"Accounts")," Page, choose ",(0,r.kt)("strong",{parentName:"p"},"AWS Accounts"),", and then choose ",(0,r.kt)("strong",{parentName:"p"},"Add AWS Account"),"."),(0,r.kt)("img",{src:(0,i.Z)("img/deployment/post_deployment/addacc1.png")}),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Figure: Add an existing account")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create and run the AWS CloudFormation template."))),(0,r.kt)("h3",{id:"if-appstream-is-not-enabled"},"If AppStream is not enabled"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enter the ",(0,r.kt)("strong",{parentName:"li"},"Account Name"),", ",(0,r.kt)("strong",{parentName:"li"},"Account ID")," (12-digit AWS account ID for the account you wish to add), and ",(0,r.kt)("strong",{parentName:"li"},"Description"),".")),(0,r.kt)("img",{src:(0,i.Z)("img/deployment/post_deployment/addacc2.png")}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Figure: Specify account details"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Onboard AWS Account")," screen is displayed, where you can select either of the following options:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"I have admin access")," : You have administrator-level access to the hosting account that is being onboarded.  Selecting this and then proceeding launches the CloudFormation template within the hosting account.  Note that you need to be logged into the AWS account console for the hosting account when selecting this option and proceeding."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"I do not have admin access")," : The CloudFormation template is generated and you can then share the template to be run by the party that does have administrator access in the AWS account that you are onboarding.")))),(0,r.kt)("img",{src:(0,i.Z)("img/deployment/post_deployment/onboardacc.png")}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Figure: Onboard AWS account"))),(0,r.kt)("h3",{id:"if-appstream-is-enabled"},"If AppStream is enabled"),(0,r.kt)("p",null,"If you have chosen to enable AppStream for your installation, there are additional values required when onboarding a hosting account."),(0,r.kt)("img",{src:(0,i.Z)("img/deployment/post_deployment/appstream1.png")}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Figure: Add account when AppStream is enabled"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AppStream Fleet Desired Instance"),": The maximum number of concurrently running AppStream sessions allowed.  If you set this to 5, that would mean that five workspaces can be viewed concurrently."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AppStreamDisconnectTimeoutSeconds"),": With a minimum of 60 seconds, this is the amount between a researcher disconnection from a session (Manual Stop, Auto Stop, or Terminate) and the release of the AppStream instance that is supporting that session."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AppStreamIdleDisconnectTimeoutSeconds"),": The amount of time that an AppStream session idle time (meaning no activity within the session) before the AppStream instance disconnects.")),(0,r.kt)("img",{src:(0,i.Z)("img/deployment/post_deployment/appstream2.png")}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Figure: Add account when AppStream is enabled (contd..)"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AppStreamMaxUserDurationSeconds"),":  The maximum amount of time for an AppStream session."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AppStreamImageName"),": The exact image name produced when you follow the instructions to build your AppStream image."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AppStreamInstanceType"),": The instance type for your AppStream fleet.  Note that these instance types are unique to AppStream.  A complete list and specifications for valid instance types is available at ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/appstream2/pricing/"},"https://aws.amazon.com/appstream2/pricing/")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AppStreamFleetType"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"ALWAYS_ON")," ensures that the desired number of instances remain available at all times.  ",(0,r.kt)("inlineCode",{parentName:"li"},"ON_DEMAND")," only runs the instances when required.  It is a cost versus convenience choice.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),":  If you needed to change these values later, you can do so through the AWS Console of the hosting account without negative impact to Service Workbench."),(0,r.kt)("p",null,"Once these options are specified, choosing ",(0,r.kt)("strong",{parentName:"p"},"Onboard Account")," displays the ",(0,r.kt)("strong",{parentName:"p"},"Onboard AWS Account")," screen.  The same choice of admin vs. no admin access applies, but there are several important pre-requisites to complete before proceeding."),(0,r.kt)("h2",{id:"creating-rstudio-alb-workspace"},"Creating RStudio ALB workspace"),(0,r.kt)("h3",{id:"accessing-rstudio-workspace"},"Accessing RStudio workspace"),(0,r.kt)("p",null,"You can access the RStudio workspace type by using the template and AMI provided in AWS partner's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/RLOpenCatalyst/Service_Workbench_Templates"},"repository"),". RStudio legacy and RStudio ALB both use custom domain names. You can define custom domain name in ",(0,r.kt)("inlineCode",{parentName:"p"},"/main/config/settings/<stage.yml>"),".  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important"),": The legacy RStudio workspace type will be deprecated soon in a future release."),(0,r.kt)("h3",{id:"application-load-balancing-for-rstudio-alb-workspace"},"Application load balancing for RStudio ALB workspace"),(0,r.kt)("p",null,"When you create RStudio Application Load Balancer (ALB) workspace, an ALB is created that can host upto 100 workspaces per hosting account. Per workspace, you can have upto 4 CIDR blocks (IP ranges) for port 443 only. This is updated in the hosting accounts. If there are no ALBs for that hosting account and you have created the very first workspace, then ALB will be created for the first time and it will be common for every workspace that you create subsequently. Once you terminate all the workspaces and you terminate the last workspace for that hosting account, the ALB is deleted. An ALB is created for minimum one active workspace."),(0,r.kt)("img",{src:(0,i.Z)("img/deployment/post_deployment/ALB-1.png")}),(0,r.kt)("p",null,"Each workspace type corresponds to one listener rule and there can be 100 such rules. In each rule, users can specify the IP ranges that user wants to allowlist. You can specify only upto 4 IP ranges per listener rule. For more information about ALB, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html"},"Application Load Balancer"),"."),(0,r.kt)("h3",{id:"limitations"},"Limitations"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"With RStudio ALB implementation, you can create only upto 100 workspaces per hosting account."),(0,r.kt)("li",{parentName:"ol"},"Per workspace, you can specify only upto 4 CIDR blocks for port 443.")))}h.isMDXComponent=!0}}]);