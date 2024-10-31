import React from 'react';

function getRandomColor() {
    const colors = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#FF9CEE", "#FFB4A2", "#B5838D", "#00BBF9"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function Hexagon() {
    const hexagons = Array.from({ length: 22 }, (_, i) => i + 1);
    return (
        <div className="hexagon-grid">
            {hexagons.map((num) => (
                <div key={num} className="hexagon" style={{ backgroundColor: getRandomColor() }}>
                    {num}
                </div>
            ))}
        </div>
    );
}

export default Hexagon;
