import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'C#',
    Svg: require('@site/static/img/Logo_C_sharp.svg').default,
    description: (
      <>
        C# is a general-purpose high-level programming language supporting multiple paradigms. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.
      </>
    ),
  },
  {
    title: 'C++',
    Svg: require('@site/static/img/ISO_C++_Logo.svg').default,
    description: (
      <>
        C++ is a high-level, general-purpose programming language created by Danish computer scientist Bjarne Stroustrup.
      </>
    ),
  },
  {
    title: 'C',
    Svg: require('@site/static/img/C_Programming_Language.svg').default,
    description: (
      <>
        C is a general-purpose computer programming language. It was created in the 1970s by Dennis Ritchie, and remains very widely used and influential. By design, C's features cleanly reflect the capabilities of the targeted CPUs.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
