import { InputHTMLAttributes, memo } from 'react';
import styles from './CheckBox.module.scss';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  id: string;
}

const CheckBox: React.FC<CheckBoxProps> = memo(({ className, id, ...props }: CheckBoxProps) => {
  return (
    <div className={className}>
      <label className={styles.label} htmlFor={id}>
        <input className={styles.input} type='checkbox' id={id} {...props} />
        <span className={styles.mark} />
      </label>
    </div>
  );
});

CheckBox.defaultProps = {
  className: '',
};

export default CheckBox;
