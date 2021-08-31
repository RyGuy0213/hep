import { FC } from 'react';
import SiteHeader from '../../03-organisms/SiteHeader/SiteHeader';
import SideNav from '../../03-organisms/SideNav/SideNav';
import styles from './Page.module.scss';

export type PageProps = {
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

const Page: FC<PageProps> = ({ children, id }) => {
  return (
    <div>
      <SiteHeader />
      <div className={styles['content']}>
        <div className={styles['side-nav-wrap']}>
          <SideNav links={links} currentPageId={id} />
        </div>
        <div className={styles['main-content']}>{children}</div>
      </div>
    </div>
  );
};

export default Page;
