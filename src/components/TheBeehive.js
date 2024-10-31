import React from 'react';
import Hexagon from './Hexagon';

const TheBeehive = () => {

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="beehive grid grid-cols-4 md:grid-cols-6 gap-2">
                <Hexagon />
            </div>
        </div>
    );
};

export default TheBeehive;
