import { ReactNode, FC } from 'react';

export type CardProps = {
  heading: string;
  media?: ReactNode;
  content: ReactNode;
};

const Card: FC<CardProps> = ({ heading, media, content }) => {
  return (
    <div className="usa-card__container">
      <header className="usa-card__header">
        <h2 className="usa-card__heading">{heading}</h2>
      </header>
      <div className="usa-card__media">
        <div className="usa-card__img">{media}</div>
      </div>
      <div className="usa-card__body">{content}</div>
    </div>
  );
};

export default Card;
