import { Main } from '@/pages/Main';
import { StoreProvider } from './providers';
import './styles/index.scss';

const App = () => {
  return (
    <StoreProvider>
      <div className='container'>
        <Main />
      </div>
    </StoreProvider>
  );
};

export default App;
