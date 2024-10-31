import React from 'react';
import Hexagon from './Hexagon';

// const generateRandomColor = () => {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// };

const TheBeehive = () => {
  

    // const hexagons = Array.from({ length: 22 }, () => generateRandomColor());

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="beehive grid grid-cols-4 md:grid-cols-6 gap-2">
                <Hexagon />
            </div>
        </div>
    );
};

export default TheBeehive;
