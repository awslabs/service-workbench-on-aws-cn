module.exports = {
  title: "Service Workbench on AWS",
  tagline: "A web portal for researchers to accelerate their time to science",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "aws", // Usually your GitHub org/user name.
  projectName: "service-workbench-on-aws", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Service Workbench on AWS",      
      logo: {
        alt: 'Site Logo',
        src: "img/AWS_logo_RGB.svg",
        target: '_self',
        width: 32,
        height: 32,
      }
      items: [
        {
          type: "search",
          position: "right",
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "AWS",
          items: [
            {
              label: "AWS Docs",
              href: "https://docs.aws.amazon.com/solutions/latest/service-workbench-on-aws/overview.html",
            },
            {
              label: "Sales Channel",
              href: "https://aws.amazon.com/government-education/research-and-technical-computing/service-workbench/",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/awslabs/service-workbench-on-aws",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/awscloud",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Amazon Web Services, Inc. or its affiliates. All rights reserved.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {          
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/awslabs/go-research-on-aws/website/",
        },
        theme: {
          disableDarkMode: true, // Not working yet
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
