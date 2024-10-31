import React from 'react';

function getRandomColor() {
    const colors = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#FF9CEE", "#FFB4A2", "#B5838D", "#00BBF9"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function Hexagon() {
    const hexagons = Array.from({ length: 22 }, (_, i) => i + 1); // Adjusted number of hexagons
    console.log("HexagonGrid rendered")
    return (
        <div className="hexagon-grid">

            {hexagons.map((num) => (
                <div key={num} className="hexagon" style={{ backgroundColor: getRandomColor() }}>
                    {num}
                </div>

            ))}
        </div>

        // <div className="flex items-center justify-center h-screen bg-gray-100"> {/* Center the grid */}
        //     <div className="hexagon-grid grid grid-cols-4 md:grid-cols-6 gap-2"> {/* Adjusted layout */}
        //         {hexagons.map((num) => (
        //             <div key={num} className="hexagon" style={{ backgroundColor: getRandomColor() }}>
        //                 {num}
        //             </div>
        //         ))}
        //     </div>
        // </div>
    );
}

export default Hexagon;
