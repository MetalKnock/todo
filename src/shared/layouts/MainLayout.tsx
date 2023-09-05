import { ReactNode } from 'react';
import styles from './MainLayout.module.scss';

interface MainLayoutProps {
  className?: string;
  header?: ReactNode;
  children: ReactNode;
}

const MainLayout = ({ className, header, children }: MainLayoutProps) => {
  return (
    <div className={`${styles.MainLayout} ${className}`}>
      <header className={styles.header}>
        <div className='container'>{header}</div>
      </header>
      <main className={styles.main}>
        <div className='container'>{children}</div>
      </main>
    </div>
  );
};

MainLayout.defaultProps = {
  className: '',
  header: null,
};

export default MainLayout;
