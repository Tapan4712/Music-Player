import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
// import App from './App';
// import MusicAudio from './component/audio/MusicAudio';
import reportWebVitals from './reportWebVitals';
import DynamicAudio from './component/audio/DynamicAudio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MusicAudio/> */}
    <Header/>
    <DynamicAudio/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
