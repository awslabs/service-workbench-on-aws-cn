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
      style: "dark",
      title: "Service Workbench on AWS",
      logo: {
        alt: "AWS Logo",
        src: "img/AWS_logo_RGB_REV.svg",
        srcDark: "img/AWS_logo_RGB_REV.svg",
        target: '_self',
        width: 32,
        height: 32,
      },  
      items: [
        {
          position: 'right',
          href: "https://aws.amazon.com/government-education/research-and-technical-computing/service-workbench/",
          label: 'AWS',
        },
         { 
          label: "GitHub",
          href: "https://github.com/awslabs/service-workbench-on-aws",
          position: "right",
         } 
      ]         
    },
    footer: {
      style: "dark",        
      links: [
        {          
          items: [
                     
          ],
        },
        {          
          items: [
           
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
