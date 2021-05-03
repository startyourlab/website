import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Particles from 'react-particles-js';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Made for academic researchers',
    imageUrl: 'img/for-academics.svg',
    description: (
      <>
        Start Your Lab is an open-source platform that teaches academic research labs how to get started with modern tools for modern science.
      </>
    ),
  },
  {
    title: 'Tools designed for teamwork',
    imageUrl: 'img/collaborate-with-digital-tools.svg',
    description: (
      <>
        Learn how to setup and work with software tools that are designed to help teams collaborate efficiently and effectively on complex projects.
      </>
    ),
  },
  {
    title: 'Informed by industry experts',
    imageUrl: 'img/best-practices.svg',
    description: (
      <>
        A small team of academic researchers develops the core guides, tutorials, and templates on Start Your Lab with the help of industry advisors.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <div className="text--center">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

// https://github.com/shashankcic/react-particlesjs/blob/master/src/config/particlesConfig.js
const particlesConfig = {
  'particles': {
    number: {
      value: 40,
      density: {
        enable: true,
        'value_area': 400,
      }
    },
    size: {
      value: 4,
      random: true,
    },
    color: {
      value: ['#4c82a9', '#df8768', '#fff07c'],
    },
    opacity: {
      value: 1,
    },
    shape: {
      type: ['circle', 'edge'],
      stroke: {
        width: 1,
        color: '#355b76',
      },
    },
    'line_linked': {
      enable: true,
      distance: 180,
      color: '#ccd2d8',
      opacity: 0.75,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      bounce: true,
    }
  },
  'interactivity': {
    'detect_on': 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
    },
  },
  'retina_detect': true,
};

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig: {customFields = {}, tagline} = {}} = context;
  return (
    <Layout title={tagline} description={customFields.description}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>   
        <Particles params={particlesConfig} />
        <div className={styles.heroContent}>
          <h1 className="hero__title">{tagline}</h1>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--primary button--lg',
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
