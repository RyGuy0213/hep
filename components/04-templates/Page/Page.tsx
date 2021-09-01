import { FC } from 'react';
import SiteHeader from '../../03-organisms/SiteHeader/SiteHeader';
import SideNav, { SideNavLinkProps } from '../../03-organisms/SideNav/SideNav';
import styles from './Page.module.scss';

export type PageProps = {
  id: number;
  links: SideNavLinkProps[];
  siteTitle: string;
  siteSubtitle: string;
};

const Page: FC<PageProps> = ({
  children,
  id,
  links,
  siteTitle,
  siteSubtitle,
}) => {
  return (
    <div>
      <SiteHeader title={siteTitle} subtitle={siteSubtitle} />
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
