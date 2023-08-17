import { Button } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { filterCompleted } from '@/entities/todo/model/todoSlice';

interface DeleteAllCompletedProps {
  className?: string;
}

const DeleteAllCompleted = ({ className }: DeleteAllCompletedProps) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(filterCompleted());
  };

  return (
    <Button className={className} onClick={handleClick}>
      Delete all completed
    </Button>
  );
};

export default DeleteAllCompleted;
