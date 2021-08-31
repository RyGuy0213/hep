import { FC } from 'react';

export type SideNavProps = {
  links: { id: number; text: string; url: string }[];
  currentPageId: number;
};

const SideNav: FC<SideNavProps> = ({ links, currentPageId }) => {
  return (
    <div>
      <nav aria-label="Primary navigation">
        <ul className="usa-sidenav">
          {links.map((item) => (
            <li key={item.text} className="usa-sidenav__item">
              <a
                href={item.url}
                className={item.id == currentPageId ? 'usa-current' : ''}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
