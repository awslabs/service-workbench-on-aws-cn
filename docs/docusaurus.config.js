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
        alt: "AWS Logo",
        src: "img/AWS_logo_RGB.svg",
        srcDark: "img/AWS_logo_RGB_REV.svg",
        target: '_self',
        width: 32,
        height: 32,
      }
    },
    footer: {
      style: "dark", 
      logo: [
        {
        alt: "AWS Logo",
        src: "img/AWS_logo_RGB_REV.svg",
        width: 160,
        height: 51,        
      },    
    ],   
      links: [
        {
          title: "Resources",
          items: [
            {
              label: "Service Workbench on AWS",
              href: "https://aws.amazon.com/government-education/research-and-technical-computing/service-workbench/",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
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
