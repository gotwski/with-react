import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './containers/Home'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render((
    <BrowserRouter>
      <Route path="/" component={Home}/>
     </BrowserRouter>
  ), document.querySelector('#app'));
});
