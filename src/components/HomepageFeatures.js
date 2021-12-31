import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_search_re_x5gq.svg').default,
    description: (
      <>
        Guidelines that are easy to find and read, complete with nifty search bar.
      </>
    ),
  },
  {
    title: 'Easy to Write',
    Svg: require('../../static/img/undraw_typewriter_re_u9i2.svg').default,
    description: (
      <>
        Netlify CMS lets you write documents in Markdown or rich text.
      </>
    ),
  },
  {
    title: 'Online or Offline',
    Svg: require('../../static/img/undraw_in_sync_re_jlqd.svg').default,
    description: (
      <>
        Want to browse Bart as a website on your PC? Or use it as an offline app you can install on your device? You get to decide.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
