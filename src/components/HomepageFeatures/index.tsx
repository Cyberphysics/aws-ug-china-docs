import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'AWS Builder Cards',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        完整的 AWS Builder Cards 中英文手册，包含游戏规则、卡牌说明和最佳实践指南。
        通过游戏化的方式学习 AWS 服务和架构设计。
      </>
    ),
  },
  {
    title: '社区资源',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        AWS UG China 社区成员手册、活动指南和贡献指南。
        加入我们的社区，与其他 AWS 爱好者一起学习和成长。
      </>
    ),
  },
  {
    title: '游戏与工具',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        配套的 Console 和 Desktop 玩家手册，帮助你更好地使用相关工具和游戏。
        提供完整的安装、配置和故障排除指南。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
