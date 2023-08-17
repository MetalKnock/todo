import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
}

const Button = memo(({ className, children, leftSlot, rightSlot, ...props }: ButtonProps) => {
  return (
    <button className={`${styles.Button} ${className} `} type='button' {...props}>
      {leftSlot}
      {children}
      {rightSlot}
    </button>
  );
});

export default Button;
