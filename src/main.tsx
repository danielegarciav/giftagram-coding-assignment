import { StrictMode } from 'react';
import { render } from 'react-dom';
import { App } from './App';
import './index.css';
import 'react-loading-skeleton/dist/skeleton.css';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
