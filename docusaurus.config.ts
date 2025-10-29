import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AWS UG China 社区文档',
  tagline: 'AWS User Group China Community Documentation',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://cyberphysics.github.io', // 替换为你的 GitHub 用户名
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/aws-ug-china-docs/', // 替换为你的仓库名

  // GitHub pages deployment config.
  organizationName: 'cyberphysics', // 替换为你的 GitHub 用户名
  projectName: 'aws-ug-china-docs', // 替换为你的仓库名

  onBrokenLinks: 'warn',
  
  // Markdown configuration
  markdown: {
    mermaid: true,
  },

  // 多语言配置
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    localeConfigs: {
      zh: {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
    },
  },

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en', 'zh'],
        indexBlog: true,
        indexDocs: true,
        docsRouteBasePath: '/docs',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/cyberphysics/aws-ug-china-docs/tree/main/ug-doc-website/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/cyberphysics/aws-ug-china-docs/tree/main/ug-doc-website/',
          blogTitle: 'AWS UG China 博客',
          blogDescription: 'AWS User Group China 社区博客',
          postsPerPage: 'ALL',
          blogSidebarTitle: '最新文章',
          blogSidebarCount: 'ALL',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/aws-ug-china-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AWS UG China',
      logo: {
        alt: 'AWS UG China Logo',
        src: 'img/aws-ug-logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'builderCardsSidebar',
          position: 'left',
          label: 'Builder Cards',
        },
        {
          type: 'docSidebar',
          sidebarId: 'communityHandbookSidebar',
          position: 'left',
          label: 'Community Handbook',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/cyberphysics/aws-ug-china-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: 'AWS Builder Cards',
              to: '/docs/builder-cards/intro',
            },
            {
              label: '社区手册',
              to: '/docs/community-handbook/intro',
            },

          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'AWS UG China 官网',
              href: 'https://www.awsug.cn/',
            },
            {
              label: '微信群',
              href: '#',
            },
            {
              label: 'Meetup',
              href: 'https://www.meetup.com/aws-user-group-china/',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '博客',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/cyberphysics/aws-ug-china-docs',
            },
            {
              label: 'AWS 官方文档',
              href: 'https://docs.aws.amazon.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AWS User Group China. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
