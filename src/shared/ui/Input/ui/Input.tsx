import { ReactNode, memo, InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  leftSlot?: ReactNode;
}

const Input = memo(({ className, label, leftSlot, ...props }: InputProps) => {
  const input = (
    <div className={`${styles.Input} ${className}`}>
      {leftSlot && <div className={styles.Input__leftSlot}>{leftSlot}</div>}
      <input className={styles.inner} {...props} />
    </div>
  );

  if (label) {
    return (
      <div>
        {label && <p>{label}</p>}
        {input}
      </div>
    );
  }

  return input;
});

export default Input;
