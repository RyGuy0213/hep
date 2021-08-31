import { FC } from 'react';
import Card, { CardProps } from '../../02-molecules/Card/Card';
import styles from './CardGrid.module.scss';
import { useDivResizeRef } from '../../../customHooks/useDivResizeRef';

export type CardGridProps = {
  cards: CardProps[];
};

const getContainerSizeName = (width: number | undefined): string => {
  if (width && width > 600) {
    return 'large';
  }

  return 'small';
};

const CardGrid: FC<CardGridProps> = ({ cards }) => {
  const [containerRef, containerSize] = useDivResizeRef();

  return (
    <div
      ref={containerRef}
      data-grid-container-size={getContainerSizeName(containerSize?.width)}
    >
      <div className={styles['card-grid']}>
        {cards.map((card) => (
          <div key={card.heading} className={styles['card']}>
            <Card
              heading={card.heading}
              media={card?.media}
              content={card.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
