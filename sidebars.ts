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
  // 亚马逊云科技 Builder Cards 侧边栏
  builderCardsSidebar: [
    {
      type: 'category',
      label: '亚马逊云科技 Builder Cards',
      items: [
        'builder-cards/intro',
        {
          type: 'category',
          label: '官方文档 (亚马逊云科技 Official)',
          items: [
            'builder-cards/official/rules-base-game',
            'builder-cards/official/builders-guideline',
            'builder-cards/official/quick-reference',
          ],
        },
        {
          type: 'category',
          label: '中文手册',
          items: [
            'builder-cards/zh/getting-started',
            'builder-cards/zh/rules',
            // 'builder-cards/zh/cards-list', // 暂时隐藏，待完善卡牌分类后再开放
          ],
        },
        {
          type: 'category',
          label: 'English Manual',
          items: [
            'builder-cards/en/getting-started',
            'builder-cards/en/rules',
            // 'builder-cards/en/cards-list', // 暂时隐藏，待完善卡牌分类后再开放
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
        {
          type: 'category',
          label: '规则讲解 PPT',
          items: [
            'builder-cards/presentation/rules-explanation',
            'builder-cards/presentation/gameplay-guide',
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
