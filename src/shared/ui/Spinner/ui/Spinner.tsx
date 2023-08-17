import { memo } from 'react';
import { ReactComponent as SpinnerImage } from '@/shared/assets/spinner.svg';

interface SpinnerProps {
  className?: string;
}

const Spinner = memo(({ className }: SpinnerProps) => {
  return <SpinnerImage className={className} />;
});

export default Spinner;
