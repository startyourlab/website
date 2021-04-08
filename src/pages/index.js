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
    title: 'Built for Academic Researchers',
    imageUrl: 'img/brandmark.svg',
    description: (
      <>
        Start Your Lab is an open-source project to provide guidance and
        support to academic research labs throughout their journey to adopt modern tools.
      </>
    ),
  },
  {
    title: 'Collaborate using Digital Tools',
    imageUrl: 'img/brandmark.svg',
    description: (
      <>
        Digital collaboration tools like GitHub and Slack are more accessible than ever, and
        Start Your Lab will help you learn how to use them.
      </>
    ),
  },
  {
    title: 'Best Practices for Modern Science',
    imageUrl: 'img/brandmark.svg',
    description: (
      <>
        Start Your Lab partners with industry advisors to develop a collection of
        best practices for managing teams, projects, and code in scientific research.
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
      <h3>{title}</h3>
      <p>{description}</p>
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
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>   
        <Particles params={particlesConfig} />
        <div className={styles.heroContent}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--primary button--lg',
                styles.getStarted,
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
