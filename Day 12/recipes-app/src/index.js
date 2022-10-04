import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Menu from "./components/Menu";
import data from "./data/recipes.json"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu recipes={data} />
  </React.StrictMode>
);


