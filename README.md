<!--
*** We're using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** TODO: See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. Alternative option for links:
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stars][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/startyourlab/website">
    <img src="assets/img/logo.svg" alt="Logo" height="80">
  </a>

  <h3 align="center">Start Your Lab</h3>

  <p align="center">
    A platform for labs learning how to get started with best practices and digital collaboration tools.
    <br />
    <a href="https://www.startyourlab.com"><strong>Explore the site »</strong></a>
    <br />
    <br />
    <a href="https://github.com/startyourlab/website/issues">Report Bug</a>
    ·
    <a href="https://github.com/startyourlab/website/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li>
      <a href="#contributing">Contributing</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#code-of-conduct">Code of Conduct</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- TODO: ABOUT THE PROJECT -->
## About The Project

[![Start Your Lab Screen Shot][product-screenshot]](https://www.startyourlab.com)

Start Your Lab is an open-source initiative to teach academic research
labs how to leverage modern tools and support them with industry best practices.

### Built With

* [Docusaurus 2](https://v2.docusaurus.io/)

<!-- TODO: ROADMAP -->
## Roadmap

See the [open issues](https://github.com/startyourlab/website/issues) for a list of proposed features (and known issues).

<!-- TODO: CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be
learn, inspire, and create. Any contributions you make are **greatly appreciated**.
As an overview, the process for contributions is as follows:

1. Fork the project
3. Create your feature branch (`git checkout -b feature/amazing-feature`)
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a pull request for review
7. Approved pull requests will be merged into the main project

To get started as a contributor to Start Your Lab's `docs` or `blog`, follow the detailed
steps below.

### Prerequisites

You must have the Node and NPM command line tools installed on your local machine in order to contribute. To
make sure all contributors use the same environment:

#### Node Version Manager

Please install this [node version manager](https://github.com/nvm-sh/nvm/#installing-and-updating) using the provided
instructions. If this causes problems or you have any questions about installation, please [contact us for support](./.github/SUPPORT.md).

Once the version manager is installed, you must exit out of the terminal and
restart the terminal. You should then be able to run

```
command -v nvm
```

which will return `nvm` if properly installed. Then use

```
nvm --version
```

which should return a version 0.37.2 or greater.

#### Node & NPM

With the node version manager installed, install the long-term stable (LTS) version of Node that this
project requires via

```
nvm install 14.16.0
```

which should install the LTS Node (fermium). This can be checked with

```
node --version
```

If the version is not exactly what was just installed, simply run

```
nvm use 14.16.0
```

Finally, check that `npm` is installed via

```
npm --version
```

which should return the version to 7.6.0. If not, run

```
nvm install-latest-npm
```

With the above all working, you are ready to install this project.

### Installation

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.
For the best developer experience, we suggest cloning this repository to your local computer. Once you
have cloned the repository, navigate into it and run the following from the root of the repository.

```console
npm install
```

#### Local Development

```console
npm start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

#### Build

```console
npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

#### Local Server Test

```console
npm serve
```

## Code of Conduct

Start Your Lab is committed to fostering a welcoming community.

[View our Code of Conduct](https://github.com/startyourlab/.github/tree/main/CODE_OF_CONDUCT.md) for our GitHub organization.

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.md` for more information.

<!-- CONTACT -->
## Contact

Start Your Lab - [@startyourlab](https://twitter.com/startyourlab) - ari@startyourlab.com

Project Link: [https://github.com/startyourlab/website](https://github.com/startyourlab/website)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Best README Template](https://github.com/othneildrew/Best-README-Template)
* [Freepik](https://www.freepik.com/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/startyourlab/website?style=for-the-badge
[contributors-url]: https://github.com/startyourlab/website/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/startyourlab/website?style=for-the-badge
[forks-url]: https://github.com/staryourlab/website/network/members
[stars-shield]: https://img.shields.io/github/stars/startyourlab/website?style=for-the-badge
[stars-url]: https://github.com/staryourlab/website/stargazers
[issues-shield]: https://img.shields.io/github/issues/startyourlab/website?style=for-the-badge
[issues-url]: https://github.com/staryourlab/website/issues
[license-shield]: https://img.shields.io/github/license/startyourlab/website?style=for-the-badge
[license-url]: https://github.com/startyourlab/website/blob/main/LICENSE.md
[product-screenshot]: static/img/product-screenshot.png
