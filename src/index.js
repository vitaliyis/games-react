import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const navbarToggler = document.getElementById('navbarTogglerDemo01')
const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach(navLink => navLink.addEventListener('click', () => {
  navbarToggler.classList.remove('show')
}))
