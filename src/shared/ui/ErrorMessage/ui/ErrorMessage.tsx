import { memo } from 'react';

interface ErrorProps {
  className?: string;
  errorMessage: string;
}

const ErrorMessage = memo(({ className, errorMessage }: ErrorProps) => {
  return <p className={className}>{errorMessage}</p>;
});

export default ErrorMessage;
