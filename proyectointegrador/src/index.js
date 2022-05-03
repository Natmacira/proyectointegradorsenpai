import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const JSX = (
//   <div>
//     <h1>Hello World</h1>
//     <p>Lets render this to the DOM</p>
//   </div>
// );
// // Change code below this line
// let targetNode = document.getElementById('challenge-node')
// ReactDOM.render(JSX, targetNode)


// {window.addEventListener("load", function() {
//   //Burger Menu
//   const burgerButton = document.getElementById('burger-button');
//   const itemsNav     = document.getElementsByClassName('items-list-nav');
//   const burgerToggler = () =>  document.body.classList.toggle("burger-menu-opened");
//   const closedBurger = () => document.body.classList.remove("burger-menu-opened");
//   burgerButton.addEventListener('click', burgerToggler);
//   for (let i = 0; i < itemsNav.length; i++) {
//       itemsNav[i].addEventListener('click', closedBurger);       
//   }      
//   //Modal 
//   const enterModalBtn = document.getElementById('ingresar-modal-btn');
//   const closedModalBtn = document.getElementById('close-modal');
//   const modalToggler = () =>  document.body.classList.toggle("modal-button-opened");
//   enterModalBtn.addEventListener('click', modalToggler);
//   closedModalBtn.addEventListener('click', modalToggler);
    
// });} 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
