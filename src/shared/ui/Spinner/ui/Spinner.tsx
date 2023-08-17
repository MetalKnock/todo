import { memo } from 'react';
import { ReactComponent as SpinnerImage } from '@/shared/assets/spinner.svg';
import styles from './Spinner.module.scss';

interface SpinnerProps {
  className?: string;
}

const Spinner = memo(({ className }: SpinnerProps) => {
  return <SpinnerImage className={`${styles.Spinner} ${className}`} />;
});

export default Spinner;
