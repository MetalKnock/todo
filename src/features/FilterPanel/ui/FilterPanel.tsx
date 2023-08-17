import { useDispatch } from 'react-redux';
import { Button } from '@/shared/ui/Button';
import { setFiltrationType } from '@/entities/todo/model/todoSlice';
import { FILTER_LIST } from '../config/constants';
import styles from './FilterPanel.module.scss';
import { FiltrationType } from '@/entities/todo/model/todoTypes';

interface FilterPanelProps {
  className?: string;
}

const FilterPanel = ({ className }: FilterPanelProps) => {
  const dispatch = useDispatch();

  const handleClick = (type: FiltrationType) => {
    dispatch(setFiltrationType(type));
  };

  return (
    <div className={`${styles.FilterPanel} ${className}`}>
      {FILTER_LIST.map(({ id, type }) => (
        <Button key={id} onClick={() => handleClick(type)}>
          {type}
        </Button>
      ))}
    </div>
  );
};

export default FilterPanel;
