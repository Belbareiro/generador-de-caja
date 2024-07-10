import React, { useState } from 'react';

const BoxGenerator = () => {
  const [boxes, setBoxes] = useState([]);
  const [color, setColor] = useState('');
  const [size, setSize] = useState(100);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color.trim() !== '') {
      setBoxes([...boxes, { color, size }]);
      setColor('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Color:
          <input type="text" value={color} onChange={handleColorChange} />
        </label>
        <label>
          Size (px):
          <input type="number" value={size} onChange={handleSizeChange} />
        </label>
        <button type="submit">Add Box</button>
      </form>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {boxes.map((box, index) => (
          <div
            key={index}
            style={{
              width: `${box.size}px`,
              height: `${box.size}px`,
              backgroundColor: box.color,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxGenerator;
