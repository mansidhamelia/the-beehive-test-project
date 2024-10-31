import React, { useEffect, useState } from 'react';
import Hexagon from './Hexagon';

const TheBeehive = () => {
    // State to hold colors for each hexagon
    const [hexColors, setHexColors] = useState([]);

    useEffect(() => {
        // Generate an array of 22 random colors
        const colors = Array.from({ length: 22 }, () =>
            `#${Math.floor(Math.random() * 16777215).toString(16)}`
        );
        setHexColors(colors);
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            {/* Responsive grid for hexagons */}
            <div className="grid grid-cols-4 gap-2 lg:grid-cols-6 place-items-center max-w-4xl">
                {/* {hexColors.map((color, index) => (
                    <div
                        key={index}
                        className={`relative w-20 h-20 lg:w-24 lg:h-24 bg-[${color}]`}
                        style={{ backgroundColor: color }}
                    >
                        <div className="hexagon-inner absolute inset-0 bg-transparent hover:bg-opacity-75 transition-transform duration-300 transform hover:scale-105"></div>
                       
                    </div>
                ))} */}

                {hexColors.map((color, index) => (
                    <Hexagon key={index} color={color} />
                ))}
            </div>
        </div>
    );
};

export default TheBeehive;
