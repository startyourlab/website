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

function TeamProfileCard({className, name, pronouns, children, githubUrl, twitterUrl, linkedinUrl, photoUrl}) {
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
              <h3 className="avatar__pronouns">{pronouns}</h3>
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
        pronouns="he/him/his"
        githubUrl="https://github.com/aridyckovsky"
        twitterUrl="https://twitter.com/adyckovsky"
        linkedinUrl="https://www.linkedin.com/in/aridyckovsky/">
        <Translate id="team.profile.Ari Dyckovsky.body">
          Ari is the creator and core maintainer of Start Your Lab. He is also an incoming Ph.D. student in Social Psychology and a Centennial Fellow at Princeton University (starting Fall 2021). Ari's research focuses on the application of artificial intelligence to facilitate collective problem-solving and collaborative processes on a global scale. With a breadth of experiences across physics, mathematics, finance, and software, he hopes to bring modern tools to the forefront of the social sciences, with a nod toward increased interdisciplinary work between fields and industries.
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Peter Sokol-Hessner"
        pronouns="he/him/his"
        githubUrl="https://github.com/psokolhessner"
        twitterUrl="https://twitter.com/p1sh"
        linkedinUrl="https://www.linkedin.com/in/peter-sokol-hessner-0358758b/">
        <Translate
          id="team.profile.Peter Sokol-Hessner.body"
          values={{
            website: <WebsiteLink to="https://www.sokolhessnerlab.com/" />,
          }}>
          {
            'Peter is an Assistant Professor of Psychology at the University of Denver and the director of the Sokol-Hessner Lab. He received his Ph.D. from New York University, and did postdoctoral fellowships at the California Institute of Technology and New York University. Peter\'s research focuses on the intersection between emotion and decision-making, leveraging tools and perspectives from psychology, economics, and neuroscience to examine the cognitive and neural mechanisms underlying valuation and choice. His work entails computational analysis of behavior and physiology (including brain imaging). Learn more on his lab\'s {website}.'
          }
        </Translate>
      </TeamProfileCardCol>
    </div>
  );
}

export function IndustryAdvisorRow() {
  return (
    <div className="row">
      <TeamProfileCardCol
        name="Austin Chustz"
        pronouns="he/him/his"
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
      <TeamProfileCardCol
        name="Ayush Sood"
        pronouns="he/him/his"
        twitterUrl="https://twitter.com/ayushsood"
        linkedinUrl="https://www.linkedin.com/in/ayushsood/"
        photoUrl="https://media-exp1.licdn.com/dms/image/C5603AQGToLXz7ucANA/profile-displayphoto-shrink_800_800/0/1606283709750?e=1623888000&v=beta&t=_ACZbwOqNaktX_c84n-jh-8cKxCny0V_DbT2dSDuK44">
        <Translate id="team.profile.Ayush Sood.body">
          Ayush currently runs the developer ecosystem at Facebook as an Engineering Manager. He previously co-founded a couple of companies in the data infrastructure space, and has built products with teams at Palantir and Dropbox. Ayush received his B.S. in Computer Science and Electrical Engineering from Stanford University.
        </Translate>
      </TeamProfileCardCol>
      {/*<TeamProfileCardCol
        name="Aaron Rios"
        pronouns="he/him/his"
        linkedinUrl="https://www.linkedin.com/in/riosaaron/"
        photoUrl="https://media-exp1.licdn.com/dms/image/C5603AQEEQAqzIhO7pg/profile-displayphoto-shrink_800_800/0/1534558999764?e=1623888000&v=beta&t=mQkK7CrHsoE3dL1bXYEwEopil5Fj-6HcO0_lK64BGNk">
        <Translate id="team.profile.AJ Rios.body">
          Data Scientist at Even
        </Translate>
      </TeamProfileCardCol>*/}
    </div>
  );
}
