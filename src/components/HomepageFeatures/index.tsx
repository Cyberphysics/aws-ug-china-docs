import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '亚马逊云科技 Builder Cards',
    image: require('@site/static/img/ug_buildercards_button_logo.png').default,
    description: (
      <>
        完整的亚马逊云科技 Builder Cards 中英文手册，包含官方文档链接、游戏规则和最佳实践指南。
        通过回合制卡牌构建游戏学习亚马逊云科技服务和架构设计。
      </>
    ),
  },
  {
    title: '社区资源',
    image: require('@site/static/img/ug_community_button_logo.png').default,
    description: (
      <>
        亚马逊云科技 UG China 社区成员手册、活动指南和贡献指南。
        加入我们的社区，与其他亚马逊云科技爱好者一起学习和成长。
      </>
    ),
  },
  {
    title: '教学工具',
    image: require('@site/static/img/ug_teaching-tools_button_logo.png').default,
    description: (
      <>
        提供规则讲解 PPT、游戏布局 PDF 和快速参考卡等教学工具。
        帮助组织培训、教学和社区分享活动。
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
