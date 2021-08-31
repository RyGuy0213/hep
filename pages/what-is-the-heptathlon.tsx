import type { NextPage } from 'next';
import Page from '../components/04-templates/Page/Page';
import SummaryBox from '../components/02-molecules/SummaryBox/SummaryBox';

const WhatIs: NextPage = () => {
  return (
    <Page id={1}>
      <h1>What is the Heptathlon?</h1>
      <div className="margin-bottom-4">
        <SummaryBox heading="Summary">
          <ul className="usa-list">
            <li>The heptathlon consists of seven (7) separate disciplines.</li>
            <li>
              Here is more information about the &nbsp;
              <a
                className="usa-summary-box__link usa-link--external"
                href="https://en.wikipedia.org/wiki/Heptathlon"
              >
                heptathlon
              </a>
              .
            </li>
          </ul>
        </SummaryBox>
      </div>
      <img
        alt="Heather Miller-Koch hurdling"
        src="https://www.gannett-cdn.com/-mm-/e1d78d18d18c0e71d5c7c4a0350b598687f50fe1/c=0-50-534-352/local/-/media/2017/01/27/StCloud/StCloud/636211307076450382-miller-koch-2.jpg?width=534&height=302&fit=crop&format=pjpg&auto=webp"
      />
      <p className="line-height-sans-6">abc</p>
      <img
        alt="Heather Miller-Koch throwing javelin"
        src="https://bloximages.chicago2.vip.townnews.com/chippewa.com/content/tncms/assets/v3/editorial/a/d8/ad816cef-be2d-5db4-a02f-f51d64ef9801/57b1e4e06f5cf.image.jpg?resize=500%2C726"
        style={{ height: '400px' }}
      />
    </Page>
  );
};

export default WhatIs;
