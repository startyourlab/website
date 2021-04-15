/**
 * The following components are adapted from Facebook's TeamProfileCards component used in the official
 * Docusaurus website.
 *
 * Link: https://github.com/facebook/docusaurus/blob/master/website/src/components/TeamProfileCards/index.js
 */

import React from 'react';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

function WebsiteLink({to, children}) {
  return (
    <Link to={to}>
      {children || (
        <Translate id="team.profile.websiteLinkLabel">website</Translate>
      )}
    </Link>
  );
}

function TeamProfileCard({className, name, children, githubUrl, twitterUrl, linkedinUrl, photoUrl}) {
  return (
    <div className={className}>
      <div className="card card--full-height">
        <div className="card__header">
          <div className="avatar avatar--vertical">
            {/* GitHub URL returns photo when no photoUrl specified  */}
            {(githubUrl && !photoUrl) && (
              <img
                className="avatar__photo avatar__photo--xl"
                src={githubUrl + '.png'}
                alt={`${name}'s avatar`}
              />
            )}
            {/* Custom photo URL string  */}
            {photoUrl && (
              <img
                className="avatar__photo avatar__photo--xl"
                src={photoUrl}
                alt={`${name}'s avatar`}
              />
            )}
            <div className="avatar__intro">
              <h3 className="avatar__name">{name}</h3>
            </div>
          </div>
        </div>
        <div className="card__body">{children}</div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            {githubUrl && (
              <a className="button button--secondary" href={githubUrl}>
                GitHub
              </a>
            )}
            {twitterUrl && (
              <a className="button button--secondary" href={twitterUrl}>
                Twitter
              </a>
            )}
            {linkedinUrl && (
              <a className="button button--secondary" href={linkedinUrl}>
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamProfileCardCol(props) {
  return (
    <TeamProfileCard {...props} className={'col col--6 margin-bottom--lg'} />
  );
}

export function ActiveTeamRow() {
  return (
    <div className="row">
      <TeamProfileCardCol
        name="Ari Dyckovsky"
        githubUrl="https://github.com/aridyckovsky"
        twitterUrl="https://twitter.com/adyckovsky"
        linkedinUrl="https://www.linkedin.com/in/aridyckovsky/">
        <Translate id="team.profile.Ari Dyckovsky.body">
          Start Your Lab's creator and core maintainer. Incoming doctoral
          student at Princeton University with a focus on collective
          problem-solving and collaborative processes.
        </Translate>
      </TeamProfileCardCol>
      {/*<TeamProfileCardCol
        name="Peter Sokol-Hessner"
        githubUrl="https://github.com/psokolhessner"
        twitterUrl="https://twitter.com/p1sh">
        <Translate
          id="team.profile.Peter Sokol-Hessner.body"
          values={{
            website: <WebsiteLink to="https://sokolhessnerlab.com/" />,
          }}>
          {
            'Assistant Professor of Psychology at the University of Denver and the director of the Sokol-Hessner Lab. Learn more about his work on his lab\'s {website}'
          }
        </Translate>
      </TeamProfileCardCol>*/}
    </div>
  );
}

export function IndustryAdvisorRow() {
  return (
    <div className="row">
      <TeamProfileCardCol
        name="Austin Chustz"
        githubUrl="https://github.com/ATchustz"
        linkedinUrl="https://www.linkedin.com/in/atchustz/"
        photoUrl="https://media-exp1.licdn.com/dms/image/C4E03AQGTOVgYwASdUQ/profile-displayphoto-shrink_800_800/0/1517272810353?e=1623888000&v=beta&t=Xf9PFrxj15x1Vea5Z0vE-MfHysHpyiygbLpSNcgOEoA">
        <Translate
          id="team.profile.Austin Chustz.body"
          values={{
            Fellow: <Link to="https://www.meetfellow.com/">Fellow</Link>,
          }}>
          {
            'Austin is currently a Full-Stack Software Engineer at {Fellow} and has previously worked with both startups and larger companies like Apple and Microsoft. He enjoys working across the technology stack, from UIs to APIs, and always builds with users in mind. Austin holds a B.S. in Computer Science from Stanford University with a concentration in Human-Computer Interaction.'
          }
        </Translate>
      </TeamProfileCardCol>
      {/*<TeamProfileCardCol
        name="Ayush Sood"
        githubUrl="https://github.com/ayushsood"
        linkedinUrl="https://www.linkedin.com/in/ayushsood/">
        <Translate id="team.profile.Ayush Sood.body">
          Product & Engineering Leader at Facebook
        </Translate>
      </TeamProfileCardCol>*/}
      {/*<TeamProfileCardCol
        name="Aaron Rios"
        linkedinUrl="https://www.linkedin.com/in/riosaaron/"
        photoUrl="https://media-exp1.licdn.com/dms/image/C5603AQEEQAqzIhO7pg/profile-displayphoto-shrink_800_800/0/1534558999764?e=1623888000&v=beta&t=mQkK7CrHsoE3dL1bXYEwEopil5Fj-6HcO0_lK64BGNk">
        <Translate id="team.profile.AJ Rios.body">
          Data Scientist at Even
        </Translate>
      </TeamProfileCardCol>*/}
    </div>
  );
}