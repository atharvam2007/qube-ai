
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import SpinningCube from './SpinningCube';

const SpinningCubeContainer = () => {
  useEffect(() => {
    const container = document.getElementById('spinning-cube-container');
    if (container) {
      const canvasContainer = document.createElement('div');
      container.appendChild(canvasContainer);

      return () => container.removeChild(canvasContainer);
    }
  }, []);

  return (
    <div>
      <Canvas>
        <SpinningCube />
      </Canvas>
    </div>
  );
};

export default SpinningCubeContainer;
