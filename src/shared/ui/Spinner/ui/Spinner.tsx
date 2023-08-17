import { ReactComponent as SpinnerImage } from '@/shared/assets/spinner.svg';
import styles from './Spinner.module.scss';

interface SpinnerProps {
  className?: string;
}

const Spinner = ({ className }: SpinnerProps) => {
  return <SpinnerImage className={`${styles.Spinner} ${className}`} />;
};

export default Spinner;
