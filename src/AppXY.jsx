import React from 'react';
import { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
    const [position, setPosition] = useState({x: 0, y: 0, z: 0});
    return (
        <div className='container' 
        onPointerMove={(e) => {
            console.log(e.clientX, e.clientY);
            setPosition(prev => ({x:e.clientX, y:e.clientY}));
        }}> 
            <div className='pointer' 
            style={{transform: `translate(${position.x}px, 
            ${position.y}px)`}}/>
        </div> 
    );
}

