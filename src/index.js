import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import Cine from './components/Cine';
import Musica from './components/Musica';
import Router from './components/Router';
import MenuRutas from './components/MenuRutas';
import FormSimple from './components/FormSimple';
import Collatz from './components/Collatz';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1> Pagina Principal</h1>
    <Collatz></Collatz>
    <MenuRutas></MenuRutas>
    <hr/>
    <Router/>
    <hr/>
    <h1> Pie de Pagina</h1>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();