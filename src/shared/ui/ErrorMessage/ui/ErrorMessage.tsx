import styles from './ErrorMessage.module.scss';

interface ErrorProps {
  className?: string;
  errorMessage: string;
}

const ErrorMessage = ({ className, errorMessage }: ErrorProps) => {
  return <p className={`${styles.ErrorMessage} ${className}`}>{errorMessage}</p>;
};

export default ErrorMessage;
