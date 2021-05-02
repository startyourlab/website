/**
 * Copyright (c) Start Your Lab
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import React from 'react';
// import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

import bibliography from '@site/src/data/bibliography.json';

/**
 * We use APA 7 formatting for the below component styles 
 *
 * See: https://owl.purdue.edu/owl/research_and_citation/apa_style/apa_formatting_and_style_guide/general_format.html
 */
const AUTHORS_UPPER_LIMIT = 20;

/**
 * Extract an APA-formatted author string from an author item loaded with JSON
 */
function extractAuthorString(author) {
  const last = author.family;
  const given = author.given.split(" ")
  const initials = given.slice(0,2).map(name => name.charAt(0) + ".").join(" ");
  return `${last}, ${initials}`;
}

function Article({ authors, year, title, journal, volume, issue, page, DOI }) {
  // TODO: Handle 20+ authors
  /*if (authors.length > AUTHORS_UPPER_LIMIT) {
    const lastAuthor = authors[authors.length - 1];
    authors = authors.slice(0, AUTHORS_UPPER_LIMIT).push(lastAuthor);
  }*/

  let extractedAuthors = authors.map(author => extractAuthorString(author));

  let authorList;
  if (extractedAuthors.length === 1) {
    authorList = extractedAuthors.pop();
  } else {
    const lastAuthor = extractedAuthors.pop();
    authorList = extractedAuthors.join(", ") + ", & " + lastAuthor;
  }

  return (
    <div className="row">
      <p className={styles.referenceItem}>
        {authorList} ({year}). <b>{title}</b>. <i>{journal}, {volume}</i>({issue}), {page}. <Link to={"https://doi.org/".concat(DOI)}>https://doi.org/{DOI}</Link>
      </p>
    </div>
  );
}

export function ArticleBibliography() {
  return (
    <div className="col">
      {bibliography.map(item => (
        <Article
          key={item.id}
          authors={item.author}
          year={item.issued['date-parts'][0][0]}
          title={item.title}
          journal={item['container-title']}
          volume={item.volume}
          issue={item.issue}
          page={item.page}
          DOI={item.DOI}
        />
      ))}
    </div>
  )
}
