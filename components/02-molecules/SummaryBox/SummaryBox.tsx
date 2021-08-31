import { FC } from 'react';

type SummaryBoxProps = {
  heading: string;
};

const SummaryBox: FC<SummaryBoxProps> = ({ children, heading }) => {
  return (
    <div
      className="usa-summary-box"
      role="region"
      aria-labelledby="summary-box-key-information"
    >
      <div className="usa-summary-box__body">
        <h3
          className="usa-summary-box__heading"
          id="summary-box-key-information"
        >
          {heading}
        </h3>
        <div className="usa-summary-box__text">{children}</div>
      </div>
    </div>
  );
};

export default SummaryBox;
