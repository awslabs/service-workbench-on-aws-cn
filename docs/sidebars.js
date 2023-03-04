module.exports = {
  serviceWorkbenchSidebar: {
    "English": [
      { "Service Workbench": ["introduction"], },
      {
        "Service Workbench Installation Guide": [
          "installation_guide/overview",
          "installation_guide/architecture",
          "installation_guide/components",
          {
            "Pre-installation requirements": [
              "installation_guide/installation/pre-installation/overview",
              "installation_guide/installation/pre-installation/tool-req",
              "installation_guide/installation/pre-installation/oidc-providers",
              "installation_guide/installation/pre-installation/china-prerequisites",
              "installation_guide/installation/pre-installation/software-req",
              "installation_guide/installation/pre-installation/instance-req",
              "installation_guide/installation/pre-installation/conf-settings",
              "installation_guide/installation/pre-installation/documentation",
            ],
          },
          {
            "Installing Service Workbench": [
              "installation_guide/installation/ami-install",
              "installation_guide/installation/ec2install",
              "installation_guide/installation/cloud9install",
              "installation_guide/installation/rstudio",
            ],
          },
          {
            "Upgrading Service Workbench": [
              "installation_guide/upgrading/commandline",
              "installation_guide/upgrading/solutions",
              "installation_guide/upgrading/authentication",
            ],
          },
          "installation_guide/postupgrade",
          "installation_guide/uninstall",
          "installation_guide/troubleshooting",
        ],
      },
      {
        "Service Workbench Configuration Guide": [
          "configuration_guide/overview",
          "configuration_guide/workflow",
          {
            "Configuring Service Workbench using IdP": [
              "configuration_guide/activedirectory",
              "configuration_guide/adfs",
              "configuration_guide/auth0",
            ],
          },
        ],        
      },
      {
        "Deployment Guide": [
          "deployment/deployment_stages",
          {
            "Pre-installation requirements": [
              "installation_guide/installation/pre-installation/overview",
              "installation_guide/installation/pre-installation/tool-req",
              "installation_guide/installation/pre-installation/software-req",
              "installation_guide/installation/pre-installation/instance-req",
              "installation_guide/installation/pre-installation/conf-settings",
              "installation_guide/installation/pre-installation/documentation",
            ],
          },
          {
            "Installing Service Workbench": [
              "installation_guide/installation/ami-install",
              "installation_guide/installation/ec2install",
              "installation_guide/installation/cloud9install",
              "installation_guide/installation/rstudio",
            ],
          },
          {
            "Upgrading Service Workbench": [
              "installation_guide/upgrading/commandline",
              "installation_guide/upgrading/solutions",
            ],
          },
          "installation_guide/postupgrade",
          "installation_guide/uninstall",
          "installation_guide/troubleshooting",
        ],
      },
      {
        "Service Workbench Configuration Guide": [
          "configuration_guide/overview",
          "configuration_guide/workflow",
          {
            "Configuring Service Workbench using IdP": [
              "configuration_guide/activedirectory",
              "configuration_guide/adfs",
              "configuration_guide/auth0",
            ],
          },
        ],
      },
      {
        "Service Workbench Post Deployment Guide": [
          {
            "Post Deployment": [
              "deployment/post_deployment/index",
              "deployment/post_deployment/account_structure",
              "deployment/reference/prepare_master_account",
              // "deployment/post_deployment/cost_explorer",
              "deployment/post_deployment/appstream",
              "deployment/post_deployment/aws_accounts",
              "deployment/post_deployment/create_index_project",
              "deployment/post_deployment/create_admin_user",
              "deployment/post_deployment/import_service_catalog_products",
              "deployment/post_deployment/logs",
            ],
          },
          "deployment/redeployment",
          {
            Reference: [
              "deployment/reference/iam_role",
              "deployment/reference/aws_services",
              "deployment/reference/prepare_master_account",
              "deployment/reference/egress_store_approval_process",
            ],
          },
        ],
      },
      {
        "Service Workbench User Guide": [
          "user_guide/account_structure",
          "user_guide/introduction",
          {
            Sidebar: [
              {
                "Researcher View": [
                  "user_guide/sidebar/common/dashboard/introduction",
                  {
                    Studies: [
                      "user_guide/sidebar/common/studies/introduction",
                      "user_guide/sidebar/common/studies/creating_a_study",
                      "user_guide/sidebar/common/studies/data_sources",
                      "user_guide/sidebar/common/studies/studies_page",
                      "user_guide/sidebar/common/studies/sharing_a_study",
                    ],
                    Workspaces: [
                      "user_guide/sidebar/common/workspaces/introduction",
                      "user_guide/sidebar/common/workspaces/create_workspace_study",
                      "user_guide/sidebar/common/workspaces/accessing_a_workspace",
                      "user_guide/sidebar/common/workspaces/terminating_a_workspace",
                    ],
                  },
                ],
                "Administrator View": [
                  "user_guide/sidebar/common/dashboard/introduction",
                  {
                    Auth: ["user_guide/sidebar/admin/auth/introduction"],
                    "Users & Roles": [
                      "user_guide/sidebar/admin/users/introduction",
                      "user_guide/sidebar/admin/users/user_roles",
                      "user_guide/sidebar/admin/users/add_federated_user",
                    ],
                    Accounts: [
                      {
                        Projects: [
                          "user_guide/sidebar/admin/accounts/projects/introduction",
                          "user_guide/sidebar/admin/accounts/projects/create_project",
                          "user_guide/sidebar/admin/accounts/projects/add_user_to_project",
                        ],
                        Indexes: [
                          "user_guide/sidebar/admin/accounts/indexes/introduction",
                          "user_guide/sidebar/admin/accounts/indexes/create_new_index",
                        ],
                        "AWS Accounts": [
                          "user_guide/sidebar/admin/accounts/aws_accounts/introduction",
                          "user_guide/sidebar/admin/accounts/aws_accounts/create_member_account",
                          "user_guide/sidebar/admin/accounts/aws_accounts/invite_member_account",
                          "user_guide/sidebar/admin/accounts/aws_accounts/set_account_budget",
                          {
                            "Roles and Permissions": [
                              "user_guide/sidebar/admin/accounts/aws_accounts/master_role",
                              "user_guide/sidebar/admin/accounts/aws_accounts/cross_account_execution_role",
                            ],
                          },
                        ],
                      },
                    ],
                    Workflows: ["user_guide/sidebar/admin/workflows/introduction"],
                    Studies: [
                      "user_guide/sidebar/common/studies/introduction",
                      "user_guide/sidebar/common/studies/creating_a_study",
                      "user_guide/sidebar/common/studies/studies_page",
                      "user_guide/sidebar/common/studies/sharing_a_study",
                      "user_guide/sidebar/common/studies/data_sources",
                    ],
                    Workspaces: [
                      "user_guide/sidebar/common/workspaces/introduction",
                      "user_guide/sidebar/common/workspaces/create_workspace_study",
                      "user_guide/sidebar/common/workspaces/terminating_a_workspace",
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        "Best Practices": [
          "best_practices/introduction",
          "best_practices/multiple_deployment_environments",
          "best_practices/amazon_inspector",
          "best_practices/aws_cloudtrail",
          "best_practices/aws_shield",
          "best_practices/cicd",
          "best_practices/rotating_jwt_token",
        ],
      },
      {
        "Development Guide": ["development/introduction"],
      },
    ],
    "中文": [
      { "Service Workbench": ["zh/introduction"], },
      {
        "Service Workbench 安装指南": [
          "zh/installation_guide/overview",
          "zh/installation_guide/architecture",
          "zh/installation_guide/components",
          {
            "安装要求": [
              "zh/installation_guide/installation/pre-installation/overview",
              "zh/installation_guide/installation/pre-installation/tool-req",
              "zh/installation_guide/installation/pre-installation/oidc-providers",
              "zh/installation_guide/installation/pre-installation/china-prerequisites",
              "zh/installation_guide/installation/pre-installation/software-req",
              "zh/installation_guide/installation/pre-installation/instance-req",
              "zh/installation_guide/installation/pre-installation/conf-settings",
            ],
          },
          {
            "安装 Service Workbench": [
              "zh/installation_guide/installation/ami-install",
              "zh/installation_guide/installation/ec2install",
              "zh/installation_guide/installation/rstudio",
            ],
          },
          {
            "升级 Service Workbench": [
              "zh/installation_guide/upgrading/commandline",
            ],
          },
          "zh/installation_guide/postupgrade",
          "zh/installation_guide/uninstall",
          "zh/installation_guide/troubleshooting",
        ],
      },
      {
        "Service Workbench 安装后指南": [
          {
            "安装后指南": [
              "zh/post_deployment/index",
              "zh/post_deployment/account_structure",
              "zh/post_deployment/aws_accounts",
              "zh/post_deployment/create_index_project",
              "zh/post_deployment/create_admin_user",
              "zh/post_deployment/import_service_catalog_products",
              "zh/post_deployment/logs",
            ],
          },
        ],
      },
      {
        "Service Workbench 用户指南": [
          "zh/user_guide/account_structure",
          "zh/user_guide/introduction",
          {
            边栏: [
              {
                "研究员视图": [
                  "zh/user_guide/sidebar/common/dashboard/introduction",
                  {
                    数据集: [
                      "zh/user_guide/sidebar/common/studies/introduction",
                      "zh/user_guide/sidebar/common/studies/creating_a_study",
                      "zh/user_guide/sidebar/common/studies/data_sources",
                      "zh/user_guide/sidebar/common/studies/studies_page",
                      "zh/user_guide/sidebar/common/studies/sharing_a_study",
                    ],
                    工作区: [
                      "zh/user_guide/sidebar/common/workspaces/introduction",
                      "zh/user_guide/sidebar/common/workspaces/create_workspace_study",
                      "zh/user_guide/sidebar/common/workspaces/accessing_a_workspace",
                      "zh/user_guide/sidebar/common/workspaces/terminating_a_workspace",
                    ],
                  },
                ],
                "管理员视图": [
                  "zh/user_guide/sidebar/common/dashboard/introduction",
                  {
                    "用户和角色": [
                      "zh/user_guide/sidebar/admin/users/introduction",
                      "zh/user_guide/sidebar/admin/users/user_roles",
                      "zh/user_guide/sidebar/admin/users/add_federated_user",
                    ],
                    账户: [
                      {
                        项目: [
                          "zh/user_guide/sidebar/admin/accounts/projects/introduction",
                          "zh/user_guide/sidebar/admin/accounts/projects/create_project",
                          "zh/user_guide/sidebar/admin/accounts/projects/add_user_to_project",
                        ],
                        索引: [
                          "zh/user_guide/sidebar/admin/accounts/indexes/introduction",
                          "zh/user_guide/sidebar/admin/accounts/indexes/create_new_index",
                        ],
                        "AWS 账户": [
                          "zh/user_guide/sidebar/admin/accounts/aws_accounts/introduction",
                          "zh/user_guide/sidebar/admin/accounts/aws_accounts/invite_member_account",
                          "zh/user_guide/sidebar/admin/accounts/aws_accounts/set_account_budget",
                          {
                            "角色和权限": [
                              "zh/user_guide/sidebar/admin/accounts/aws_accounts/master_role",
                              "zh/user_guide/sidebar/admin/accounts/aws_accounts/cross_account_execution_role",
                            ],
                          },
                        ],
                      },
                    ],
                    Workflows: ["zh/user_guide/sidebar/admin/workflows/introduction"],
                    数据集: [
                      "zh/user_guide/sidebar/common/studies/introduction",
                      "zh/user_guide/sidebar/common/studies/creating_a_study",
                      "zh/user_guide/sidebar/common/studies/studies_page",
                      "zh/user_guide/sidebar/common/studies/sharing_a_study",
                      "zh/user_guide/sidebar/common/studies/data_sources",
                    ],
                    工作区: [
                      "zh/user_guide/sidebar/common/workspaces/introduction",
                      "zh/user_guide/sidebar/common/workspaces/create_workspace_study",
                      "zh/user_guide/sidebar/common/workspaces/terminating_a_workspace",
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        "开发指南": ["zh/development/introduction"],
      },
    ],
    动手实践: [
      "workshop/workshop_guide"
    ],
    快速部署: [
      "quick_installation_guide/global_installation_guide"
    ]
  },
};
