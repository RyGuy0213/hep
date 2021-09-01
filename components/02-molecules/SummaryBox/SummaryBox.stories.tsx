import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SummaryBox from './SummaryBox';

export default {
  title: 'Molecules/SummaryBox',
  component: SummaryBox,
} as ComponentMeta<typeof SummaryBox>;

export const Default: ComponentStory<typeof SummaryBox> = () => {
  return (
    <SummaryBox heading="This is a Summary Box">
      <ul className="usa-list">
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
  );
};
Default.storyName = 'SummaryBox';
