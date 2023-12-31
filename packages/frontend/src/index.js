import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.scss';
import 'bootstrap/dist/js/bootstrap.bundle';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FormProvider from 'components/providers/form';
import GameProvider from 'components/providers/game';
import PhotosProvider from 'components/providers/photos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FormProvider>
        <GameProvider>
          <PhotosProvider>
            <App />
          </PhotosProvider>
        </GameProvider>
      </FormProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
