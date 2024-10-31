// src/components/Hexagon.js
const Hexagon = ({ color }) => (
    <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        style={{ backgroundColor: color }}
        className="transition-transform duration-300 transform hover:scale-105"
    >
        <polygon
            points="50,1 93,25 93,75 50,99 7,75 7,25"
            fill={color}
        />
    </svg>
);

export default Hexagon;
