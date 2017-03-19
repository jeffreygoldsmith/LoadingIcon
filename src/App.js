import React from 'react';
import { OrbitOne, OrbitTwo, OrbitThree, OrbitFour, OrbitFive } from './makeNewOrbitNode.js';
import './App.css';


const LoadingIcon = () =>
{
  return <div style={{ width: '100vw', height: '100vh', backgroundColor: '#FDFEFE', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ position: 'relative' }}>
      <OrbitOne/>
      <OrbitTwo/>
      <OrbitThree/>
      <OrbitFour/>
      <OrbitFive/>
    </div>
  </div>;
};

export default LoadingIcon;
