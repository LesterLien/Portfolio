import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Navigator from './components/Navigator';
import App from './App';
import './styling/index.css';
import MainNavbar from "./components/MainNavbar";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <MainNavbar/>
        <Navigator/>
        <Footer/>
      </App>
    </BrowserRouter>
  </React.StrictMode>
);
