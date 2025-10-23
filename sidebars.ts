import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // AWS Builder Cards 侧边栏
  builderCardsSidebar: [
    {
      type: 'category',
      label: 'AWS Builder Cards',
      items: [
        'builder-cards/intro',
        {
          type: 'category',
          label: '中文手册',
          items: [
            'builder-cards/zh/getting-started',
            'builder-cards/zh/rules',
            'builder-cards/zh/cards-list',
          ],
        },
        {
          type: 'category',
          label: 'English Manual',
          items: [
            'builder-cards/en/getting-started',
            'builder-cards/en/rules',
            'builder-cards/en/cards-list',
          ],
        },
        {
          type: 'category',
          label: '游戏布局 PDF',
          items: [
            'builder-cards/console-layout',
            'builder-cards/desktop-layout',
          ],
        },
      ],
    },
  ],

  // 社区手册侧边栏
  communityHandbookSidebar: [
    {
      type: 'category',
      label: '社区手册',
      items: [
        'community-handbook/intro',
        'community-handbook/membership',
        'community-handbook/events',
        'community-handbook/contribution',
        'community-handbook/code-of-conduct',
      ],
    },
  ],
};

export default sidebars;
