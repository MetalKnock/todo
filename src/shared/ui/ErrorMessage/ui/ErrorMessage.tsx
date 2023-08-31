import { memo } from 'react';
import styles from './ErrorMessage.module.scss';

interface ErrorProps {
  className?: string;
  errorMessage: string;
}

const ErrorMessage: React.FC<ErrorProps> = memo(({ className, errorMessage }: ErrorProps) => {
  return <p className={`${styles.ErrorMessage} ${className}`}>{errorMessage}</p>;
});

ErrorMessage.defaultProps = {
  className: '',
};

export default ErrorMessage;
