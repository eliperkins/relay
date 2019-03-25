/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const CompLibrary = require('../../core/CompLibrary.js');
const React = require('react');
const Marked = CompLibrary.Marked; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

class HomeSplash extends React.Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">
            <div className="projectLogo">
              <img src={siteConfig.baseUrl + 'img/relay-white.svg'} />
            </div>
            <div className="inner">
              <h2 className="projectTitle">
                {siteConfig.title}
                <small>{siteConfig.tagline}</small>
                <small>{siteConfig.subtagline}</small>
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    let language = this.props.language || 'en';
    const showcase = siteConfig.users
      .filter(user => {
        return user.pinned;
      })
      .map((user, i) => {
        return (
          <a href={user.infoLink} key={i}>
            <img src={user.image} title={user.caption} />
          </a>
        );
      });

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Container padding={['bottom']}>
            <h2>GraphQL Best Practices Baked In</h2>
            <GridBlock
              align="left"
              contents={[
                {
                  content:
                    'A GraphQL fragment is a way to name a sub-query inside a part of your GraphQL query.\n\nRelay uses Fragments to give the component just the data it uses.\n\nSee the Fragment docs.',
                  title: 'Fragments',
                },
                {
                  content:
                    'A GraphQL connection is an opinionated list that can easily be paginated in any direciton, and contains structure for rich relationship data.\n\nRelay provides tools to make pagination best practices declarative.\n\nSee the Connections docs.',
                  title: 'Connections',
                },
                {
                  content:
                    'A Node ID is a globally unique ID across your entire schema for every type, build using a GraphQL interface.\n\nRelay uses this pattern to provide reliable caching and make incremental updates to data simple.\n\nSee the Node ID docs.',
                  title: 'Node IDs',
                },
              ]}
              layout="threeColumn"
            />
          </Container>

          <Container padding={['bottom']}>
            <h2>Declarative Mutations</h2>
            <GridBlock
              align="left"
              contents={[
                {
                  content:
                    'The Relay mutation API lets you declaratively define the data which would mutate from a server change by user, and Relay will propagate the changes.',
                  title: 'Describe data changing',
                },
                {
                  content:
                    'Due to the Node ID pattern, Relay can know all of the changed components for any mutation, automating prop updates.',
                  title: 'Non-localized changes',
                },
                {
                  content:
                    'The mutation API makes it trivial to do optimistic rendering, error handling and reverting when things don’t go as planned.',
                  title: 'Optimized for UI',
                },
              ]}
              layout="threeColumn"
            />
          </Container>

          <Container padding={['bottom']}>
            <h2>Type Safety</h2>
            <GridBlock
              align="left"
              contents={[
                {
                  content:
                    'While you work on a Relay project, the Relay compiler will guide you to ensure project-wide consistency.',
                  title: 'Peace of Mind',
                },
                {
                  content:
                    'Relay pre-computes runtime lookups on the developer’s computer, not your users.',
                  title: 'Runtime Optimized',
                },
                {
                  content:
                    'Each React component using Relay gets unique Flow or TypeScript interfaces generated.',
                  title: 'Isolated Interfaces',
                },
              ]}
              layout="threeColumn"
            />
          </Container>

          <Container padding={['bottom']}>
            <h2>Can Relay Work For Me?</h2>
            <GridBlock
              align="left"
              contents={[
                {
                  content:
                    'If you already can render React components, you’re most of the way there. Relay requires a Babel plugin, and to also run the Relay Compiler.\n\nYou can use Relay out of the box with Create React App and Next.js.',
                  title: 'Adopt Incrementally',
                },
                {
                  content:
                    'Relay requires a bit more up-front setup and tools, in favour of supporting an architecture of isolated components which can scale with your team and app complexity.',
                  title: 'Make Complexity Explicit',
                },
                {
                  content:
                    'Relay strives to offer a set of opinionated primitive React components, on which you can build any type of data-driven application.\n\nLearn these principals once, then your projects spend more time working on business logic instead of pipelining data.',
                  title: 'User Interface Platform',
                },
                {
                  content:
                    'If you’re the sort of team that believes in using Flow or TypeScript to move error detection to dev-time, then Relay is likely a good fit for you.\n\nIt’s probable you’d otherwise re-create a lot of Relay’s caching, and UI best practices independently.',
                  title: 'Not Just for Big Apps',
                },
              ]}
              layout="twoColumn"
            />
          </Container>

          <Container padding={['bottom', 'top']} background="light">
            <GridBlock
              contents={[
                {
                  content:
                    'Relay Modern is a new version of Relay designed from the ground up to be easier to use, more extensible and, most of all, able to improve performance on mobile devices. Relay Modern accomplishes this with static queries and ahead-of-time code generation. Incrementally convert existing Relay apps, or start a new one with Relay Modern.',
                  imageAlign: 'center',
                  image: '',
                  title: 'Relay Modern',
                },
              ]}
              layout="center"
            />
          </Container>

          <div className="productShowcaseSection paddingBottom">
            <h2>Who's Using Relay?</h2>
            <p>Relay is building websites for these projects</p>
            <div className="logos">{showcase}</div>
            <div className="more-users">
              <a
                className="button"
                href={siteConfig.baseUrl + this.props.language + '/users.html'}>
                More Relay Users
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Index;
