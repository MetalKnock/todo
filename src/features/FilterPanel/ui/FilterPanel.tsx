import { useDispatch } from 'react-redux';
import { Button } from '@/shared/ui/Button';
import { setFiltrationType } from '@/entities/todo/model/todoSlice';
import { FILTER_LIST } from '../config/constants';
import { FiltrationType } from '@/entities/todo/model/todoTypes';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import styles from './FilterPanel.module.scss';

interface FilterPanelProps {
  className?: string;
}

const FilterPanel = ({ className }: FilterPanelProps) => {
  const dispatch = useDispatch();
  const { filtrationType } = useAppSelector((state) => state.todo);

  const handleClick = (type: FiltrationType) => {
    dispatch(setFiltrationType(type));
  };

  return (
    <div className={`${styles.FilterPanel} ${className}`}>
      {FILTER_LIST.map(({ id, type }) => (
        <Button
          className={
            type === filtrationType ? `${styles.button} ${styles.button_active}` : styles.button
          }
          key={id}
          onClick={() => handleClick(type)}
        >
          {type}
        </Button>
      ))}
    </div>
  );
};

FilterPanel.defaultProps = {
  className: '',
};

export default FilterPanel;
