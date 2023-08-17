import { Main } from '@/pages/Main';
import { StoreProvider } from './providers';
import './styles/index.scss';

const App = () => {
  return (
    <StoreProvider>
      <Main />
    </StoreProvider>
  );
};

export default App;
