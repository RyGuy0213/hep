import { FC } from 'react';

type SiteHeaderProps = {
  title: string;
  subtitle: string;
};

const SiteHeader: FC<SiteHeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="bg-base-darker text-base-lighter">
      <div className="padding-5 margin-left-auto margin-right-auto">
        <div>
          <div className="text-heavy font-sans-xl">{title}</div>
          <div className="margin-top-2">{subtitle}</div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
