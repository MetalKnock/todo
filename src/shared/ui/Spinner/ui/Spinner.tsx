import { memo } from 'react';
import { ReactComponent as SpinnerImage } from '@/shared/assets/spinner.svg';

interface SpinnerProps {
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = memo(({ className }: SpinnerProps) => {
  return <SpinnerImage className={className} />;
});

Spinner.defaultProps = {
  className: '',
};

export default Spinner;
