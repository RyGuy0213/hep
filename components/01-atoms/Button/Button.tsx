import { FC } from 'react';
// import styles from './Button.module.scss';

export type ButtonProps = {
  type?: 'button' | 'submit';
  variation?: 'primary' | 'secondary' | 'outline';
};

const Button: FC<ButtonProps> = ({ children, type = 'button', variation }) => {
  return (
    <button
      className={`usa-button ${variation ? `usa-button--${variation}` : ''}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
