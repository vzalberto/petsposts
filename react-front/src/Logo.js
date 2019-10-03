import React from 'react';
import Logo from './Logo';
import PostsList from './PostsList'
import './App.css';


import { Illustration, Shape } from 'react-zdog'


function Logo() {
  ReactDOM.render(
  <Illustration zoom={8}>
    <Shape stroke={20} color="lightblue" rotate={{ x: Math.PI }} />
  </Illustration>,
  document.getElementById('logo')
  )
}

export default Logo;
