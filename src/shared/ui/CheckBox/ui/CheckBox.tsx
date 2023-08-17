import { InputHTMLAttributes } from 'react';
import styles from './CheckBox.module.scss';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  id: string;
}

const CheckBox = ({ className, id, ...props }: CheckBoxProps) => {
  return (
    <div className={`${styles.CheckBox} ${className}`}>
      <label className={styles.label} htmlFor={id}>
        <input className={styles.input} type='checkbox' id={id} {...props} />
        <span className={styles.mark} />
      </label>
    </div>
  );
};

export default CheckBox;
