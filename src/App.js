import React from 'react';
import { OrbitOne, OrbitTwo, OrbitThree, OrbitFour, OrbitFive } from './makeNewOrbitNode.js';
import './App.css';


const LoadingIcon = () =>
{
  return <div>
    <OrbitOne/>
    <OrbitTwo/>
    <OrbitThree/>
    <OrbitFour/>
    <OrbitFive/>
  </div>;
};

export default LoadingIcon;
