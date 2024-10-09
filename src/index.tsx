import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const myImglink = "https://images.clickdealer.co.uk/vehicles/5533/5533095/full/128952791.jpg"
const maLuba = "https://storage.googleapis.com/wackk-images-production-4f204ab/y7964e67batztetl17rocymr8v5q"
const toyOta = "https://di-uploads-pod11.dealerinspire.com/germaintoyotaofcolumbus/uploads/2024/04/2404-Toyota-Tacoma-Exterior.webp"
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <h1>My cars gallery</h1>
    
   <div className='my-gallery'>
    <App myimg = {myImglink} textImg ={"Range Rover"} />
    <App myimg = {maLuba} textImg ={"Maluba"} />
    <App myimg = {toyOta} textImg ={"Toyota"} />
    <App myimg = {myImglink} textImg ={"Range Rover"} />
    <App myimg = {maLuba} textImg ={"Maluba"} />
    <App myimg = {toyOta} textImg ={"Toyota"} />
    <App myimg = {myImglink} textImg ={"Range Rover"} />
    <App myimg = {maLuba} textImg ={"Maluba"} />
    <App myimg = {toyOta} textImg ={"Toyota"} />
    <App myimg = {myImglink} textImg ={"Range Rover"} />
    <App myimg = {maLuba} textImg ={"Maluba"} />
    <App myimg = {toyOta} textImg ={"Toyota"} />
    <App myimg = {myImglink} textImg ={"Range Rover"} />
    <App myimg = {maLuba} textImg ={"Maluba"} />
    <App myimg = {toyOta} textImg ={"Toyota"} />
    <App myimg = {maLuba} textImg ={"Maluba"} />
    <App myimg = {toyOta} textImg ={"Toyota"} />
    <App myimg = {myImglink} textImg ={"Range Rover"} />


    
   </div>
     
  </React.StrictMode>
);


reportWebVitals();
