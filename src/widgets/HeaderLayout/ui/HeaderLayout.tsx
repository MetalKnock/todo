import styles from './HeaderLayout.module.scss';

interface HeaderLayoutProps {
  className?: string;
}

const HeaderLayout = ({ className }: HeaderLayoutProps) => {
  return <div className={`${styles.HeaderLayout} ${className}`}>Todo List</div>;
};

HeaderLayout.defaultProps = {
  className: '',
};

export default HeaderLayout;
