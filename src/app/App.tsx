import { Main } from '@/pages/Main';
import { StoreProvider } from './providers';
import './styles/index.scss';
import { MainLayout } from '@/shared/layouts';
import { HeaderLayout } from '@/widgets/HeaderLayout';

const App = () => {
  return (
    <StoreProvider>
      <MainLayout header={<HeaderLayout />}>
        <Main />
      </MainLayout>
    </StoreProvider>
  );
};

export default App;
