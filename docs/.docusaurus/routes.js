
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/','acd'),
    routes: [
      {
        path: '/best_practices/amazon_inspector',
        component: ComponentCreator('/best_practices/amazon_inspector','fd5'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/best_practices/aws_cloudtrail',
        component: ComponentCreator('/best_practices/aws_cloudtrail','e17'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/best_practices/aws_shield',
        component: ComponentCreator('/best_practices/aws_shield','e28'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/best_practices/cicd',
        component: ComponentCreator('/best_practices/cicd','f37'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/best_practices/introduction',
        component: ComponentCreator('/best_practices/introduction','899'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/best_practices/multiple_deployment_environments',
        component: ComponentCreator('/best_practices/multiple_deployment_environments','ae1'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/best_practices/rotating_jwt_token',
        component: ComponentCreator('/best_practices/rotating_jwt_token','086'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/configuration_guide/activedirectory',
        component: ComponentCreator('/configuration_guide/activedirectory','f46'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/configuration_guide/adfs',
        component: ComponentCreator('/configuration_guide/adfs','bf2'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/configuration_guide/auth0',
        component: ComponentCreator('/configuration_guide/auth0','018'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/configuration_guide/overview',
        component: ComponentCreator('/configuration_guide/overview','805'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/configuration_guide/workflow',
        component: ComponentCreator('/configuration_guide/workflow','3b8'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/deployment/about_this_guide',
        component: ComponentCreator('/deployment/about_this_guide','10b'),
        exact: true
      },
      {
        path: '/deployment/configuration/auth/configuring_auth0',
        component: ComponentCreator('/deployment/configuration/auth/configuring_auth0','2f5'),
        exact: true
      },
      {
        path: '/deployment/configuration/auth/configuring_idp',
        component: ComponentCreator('/deployment/configuration/auth/configuring_idp','2ec'),
        exact: true
      },
      {
        path: '/deployment/configuration/auth/enabling_ad',
        component: ComponentCreator('/deployment/configuration/auth/enabling_ad','9f9'),
        exact: true
      },
      {
        path: '/deployment/deployment_stages',
        component: ComponentCreator('/deployment/deployment_stages','f2e'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/deployment/deployment/index',
        component: ComponentCreator('/deployment/deployment/index','0b8'),
        exact: true
      },
      {
        path: '/deployment/post_deployment/account_structure',
        component: ComponentCreator('/deployment/post_deployment/account_structure','f87'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/deployment/post_deployment/appstream',
        component: ComponentCreator('/deployment/post_deployment/appstream','27b'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/deployment/post_deployment/aws_accounts',
        component: ComponentCreator('/deployment/post_deployment/aws_accounts','1d5'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/deployment/post_deployment/create_admin_user',
        component: ComponentCreator('/deployment/post_deployment/create_admin_user','e19'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/deployment/post_deployment/create_index_project',
        component: ComponentCreator('/deployment/post_deployment/create_index_project','e08'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/deployment/post_deployment/import_service_catalog_products',
        component: ComponentCreator('/deployment/post_deployment/import_service_catalog_products','863'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/deployment/post_deployment/index',
        component: ComponentCreator('/deployment/post_deployment/index','7f1'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/deployment/post_deployment/link_aws_account',
        component: ComponentCreator('/deployment/post_deployment/link_aws_account','55a'),
        exact: true
      },
      {
        path: '/deployment/post_deployment/logs',
        component: ComponentCreator('/deployment/post_deployment/logs','ada'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/deployment/pre_deployment/accounts',
        component: ComponentCreator('/deployment/pre_deployment/accounts','95e'),
        exact: true
      },
      {
        path: '/deployment/pre_deployment/configuration',
        component: ComponentCreator('/deployment/pre_deployment/configuration','643'),
        exact: true
      },
      {
        path: '/deployment/pre_deployment/deployment_instance',
        component: ComponentCreator('/deployment/pre_deployment/deployment_instance','4fe'),
        exact: true
      },
      {
        path: '/deployment/pre_deployment/pre_deployment',
        component: ComponentCreator('/deployment/pre_deployment/pre_deployment','d00'),
        exact: true
      },
      {
        path: '/deployment/pre_deployment/prereq_commands',
        component: ComponentCreator('/deployment/pre_deployment/prereq_commands','0cd'),
        exact: true
      },
      {
        path: '/deployment/pre_deployment/source_code',
        component: ComponentCreator('/deployment/pre_deployment/source_code','817'),
        exact: true
      },
      {
        path: '/deployment/redeployment',
        component: ComponentCreator('/deployment/redeployment','a66'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/deployment/reference/aws_services',
        component: ComponentCreator('/deployment/reference/aws_services','9f8'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/deployment/reference/egress_store_approval_process',
        component: ComponentCreator('/deployment/reference/egress_store_approval_process','226'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/deployment/reference/iam_role',
        component: ComponentCreator('/deployment/reference/iam_role','2ac'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/deployment/reference/prepare_master_account',
        component: ComponentCreator('/deployment/reference/prepare_master_account','c15'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/deployment/summary',
        component: ComponentCreator('/deployment/summary','0f4'),
        exact: true
      },
      {
        path: '/development/introduction',
        component: ComponentCreator('/development/introduction','5aa'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/installation_guide/architecture',
        component: ComponentCreator('/installation_guide/architecture','5d1'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/installation_guide/components',
        component: ComponentCreator('/installation_guide/components','35c'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/installation_guide/installation/ami-install',
        component: ComponentCreator('/installation_guide/installation/ami-install','741'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/installation_guide/installation/cloud9install',
        component: ComponentCreator('/installation_guide/installation/cloud9install','6dc'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/installation_guide/installation/ec2install',
        component: ComponentCreator('/installation_guide/installation/ec2install','271'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/installation_guide/installation/pre-installation/conf-settings',
        component: ComponentCreator('/installation_guide/installation/pre-installation/conf-settings','eb0'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/installation_guide/installation/pre-installation/documentation',
        component: ComponentCreator('/installation_guide/installation/pre-installation/documentation','ab0'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/installation_guide/installation/pre-installation/instance-req',
        component: ComponentCreator('/installation_guide/installation/pre-installation/instance-req','fa5'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/installation_guide/installation/pre-installation/overview',
        component: ComponentCreator('/installation_guide/installation/pre-installation/overview','d1e'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/installation_guide/installation/pre-installation/software-req',
        component: ComponentCreator('/installation_guide/installation/pre-installation/software-req','550'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/installation_guide/installation/pre-installation/tool-req',
        component: ComponentCreator('/installation_guide/installation/pre-installation/tool-req','160'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/installation_guide/installation/rstudio',
        component: ComponentCreator('/installation_guide/installation/rstudio','1f0'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/installation_guide/overview',
        component: ComponentCreator('/installation_guide/overview','3af'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/installation_guide/postupgrade',
        component: ComponentCreator('/installation_guide/postupgrade','802'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/installation_guide/troubleshooting',
        component: ComponentCreator('/installation_guide/troubleshooting','9ad'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/installation_guide/uninstall',
        component: ComponentCreator('/installation_guide/uninstall','8e1'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/installation_guide/upgrading/authentication',
        component: ComponentCreator('/installation_guide/upgrading/authentication','d5b'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/installation_guide/upgrading/commandline',
        component: ComponentCreator('/installation_guide/upgrading/commandline','cc1'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/installation_guide/upgrading/solutions',
        component: ComponentCreator('/installation_guide/upgrading/solutions','0ce'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/introduction',
        component: ComponentCreator('/introduction','251'),
        exact: true
      },
      {
        path: '/user_guide/account_structure',
        component: ComponentCreator('/user_guide/account_structure','be9'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/user_guide/introduction',
        component: ComponentCreator('/user_guide/introduction','765'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/user_guide/sidebar/admin/accounts/aws_accounts/create_member_account',
        component: ComponentCreator('/user_guide/sidebar/admin/accounts/aws_accounts/create_member_account','7e5'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/user_guide/sidebar/admin/accounts/aws_accounts/cross_account_execution_role',
        component: ComponentCreator('/user_guide/sidebar/admin/accounts/aws_accounts/cross_account_execution_role','4b0'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/user_guide/sidebar/admin/accounts/aws_accounts/introduction',
        component: ComponentCreator('/user_guide/sidebar/admin/accounts/aws_accounts/introduction','2a5'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/user_guide/sidebar/admin/accounts/aws_accounts/invite_member_account',
        component: ComponentCreator('/user_guide/sidebar/admin/accounts/aws_accounts/invite_member_account','933'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/user_guide/sidebar/admin/accounts/aws_accounts/master_role',
        component: ComponentCreator('/user_guide/sidebar/admin/accounts/aws_accounts/master_role','c00'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/user_guide/sidebar/admin/accounts/aws_accounts/set_account_budget',
        component: ComponentCreator('/user_guide/sidebar/admin/accounts/aws_accounts/set_account_budget','fab'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/user_guide/sidebar/admin/accounts/indexes/create_new_index',
        component: ComponentCreator('/user_guide/sidebar/admin/accounts/indexes/create_new_index','0ff'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/user_guide/sidebar/admin/accounts/indexes/introduction',
        component: ComponentCreator('/user_guide/sidebar/admin/accounts/indexes/introduction','d2d'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/user_guide/sidebar/admin/accounts/projects/add_user_to_project',
        component: ComponentCreator('/user_guide/sidebar/admin/accounts/projects/add_user_to_project','cf3'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/user_guide/sidebar/admin/accounts/projects/create_project',
        component: ComponentCreator('/user_guide/sidebar/admin/accounts/projects/create_project','f2e'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/user_guide/sidebar/admin/accounts/projects/introduction',
        component: ComponentCreator('/user_guide/sidebar/admin/accounts/projects/introduction','c8b'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/user_guide/sidebar/admin/auth/introduction',
        component: ComponentCreator('/user_guide/sidebar/admin/auth/introduction','ee0'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/user_guide/sidebar/admin/users/add_federated_user',
        component: ComponentCreator('/user_guide/sidebar/admin/users/add_federated_user','f6d'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/user_guide/sidebar/admin/users/introduction',
        component: ComponentCreator('/user_guide/sidebar/admin/users/introduction','2db'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/user_guide/sidebar/admin/users/user_roles',
        component: ComponentCreator('/user_guide/sidebar/admin/users/user_roles','ea3'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/user_guide/sidebar/admin/workflows/introduction',
        component: ComponentCreator('/user_guide/sidebar/admin/workflows/introduction','87c'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/user_guide/sidebar/common/dashboard/introduction',
        component: ComponentCreator('/user_guide/sidebar/common/dashboard/introduction','aa6'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/user_guide/sidebar/common/studies/creating_a_study',
        component: ComponentCreator('/user_guide/sidebar/common/studies/creating_a_study','350'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/user_guide/sidebar/common/studies/data_sources',
        component: ComponentCreator('/user_guide/sidebar/common/studies/data_sources','7f3'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/user_guide/sidebar/common/studies/introduction',
        component: ComponentCreator('/user_guide/sidebar/common/studies/introduction','b69'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/user_guide/sidebar/common/studies/sharing_a_study',
        component: ComponentCreator('/user_guide/sidebar/common/studies/sharing_a_study','fc3'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/user_guide/sidebar/common/studies/studies_page',
        component: ComponentCreator('/user_guide/sidebar/common/studies/studies_page','9c8'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/user_guide/sidebar/common/workspaces/accessing_a_workspace',
        component: ComponentCreator('/user_guide/sidebar/common/workspaces/accessing_a_workspace','36e'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/user_guide/sidebar/common/workspaces/create_workspace_study',
        component: ComponentCreator('/user_guide/sidebar/common/workspaces/create_workspace_study','29f'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/user_guide/sidebar/common/workspaces/introduction',
        component: ComponentCreator('/user_guide/sidebar/common/workspaces/introduction','00f'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      },
      {
        path: '/user_guide/sidebar/common/workspaces/terminating_a_workspace',
        component: ComponentCreator('/user_guide/sidebar/common/workspaces/terminating_a_workspace','ce4'),
        exact: true,
        'sidebar': "serviceWorkbenchSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
