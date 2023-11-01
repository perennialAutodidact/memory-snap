import React from 'react';
import "./styles/App.scss";
import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import Setup from 'components/Setup';
import Game from 'components/Game';

const App = () => {
  return (
    <div className="App bg-dark text-light vh-100 container-fluid p-0">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Game />} />
          <Route path="/setup" element={<Setup />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
