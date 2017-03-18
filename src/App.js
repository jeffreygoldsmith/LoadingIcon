import React from 'react';
import { LargeOrbit, SmallOrbit } from './makeNewOrbitNode.js';
import './App.css';


const LoadingIcon = () =>
{
  return <div>
    <LargeOrbit/>
    <SmallOrbit/>
  </div>;
};

export default LoadingIcon;
