import { ReactNode, FC } from 'react';

type CardProps = {
  heading: string;
  media?: ReactNode;
  text: string;
};

const Card: FC<CardProps> = ({ heading, media, text }) => {
  return (
    <div className="usa-card__container">
      <header className="usa-card__header">
        <h2 className="usa-card__heading">Card with media</h2>
      </header>
      <div className="usa-card__media">
        <div className="usa-card__img">{media}</div>
      </div>
      <div className="usa-card__body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
          tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis
          dolores molestias! Quas quisquam a officia eos.
        </p>
      </div>
      <div className="usa-card__footer">
        <button className="usa-button">Visit Florida Keys</button>
      </div>
    </div>
  );
};

export default Card;
