import { FC } from 'react';

const SiteHeader: FC = () => {
  return (
    <header className="bg-base-darker text-base-lighter">
      <div className="padding-5 margin-left-auto margin-right-auto">
        <div>
          <div className="text-heavy font-sans-xl">
            All About the Heptathlon
          </div>
          <div className="margin-top-2">A demo site by Ryan Koch</div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
