import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import './assets/css/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
