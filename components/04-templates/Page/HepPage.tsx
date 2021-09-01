import { FC } from 'react';
import Page from './Page';

export type HepPageProps = {
  id: number;
};

const links = [
  {
    id: 0,
    text: 'Intro',
    url: '/',
  },
  {
    id: 1,
    text: 'What is the Heptathlon?',
    url: '/what-is-the-heptathlon',
  },
  {
    id: 2,
    text: 'Heptathlon Scoring',
    url: '/heptathlon-scoring',
  },
  {
    id: 3,
    text: 'Site Build Info',
    url: '/site-build-info',
  },
];

const HepPage: FC<HepPageProps> = ({ children, id }) => {
  return (
    <Page
      id={id}
      links={links}
      siteTitle="All About the Heptathlon"
      siteSubtitle="A demo site by Ryan Koch"
    >
      {children}
    </Page>
  );
};

export default HepPage;
