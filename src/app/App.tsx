import { StoreProvider } from './providers';
import './styles/index.scss';

const App = () => {
  return (
    <StoreProvider>
      <div>App</div>
    </StoreProvider>
  );
};

export default App;
