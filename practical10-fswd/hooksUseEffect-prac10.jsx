import React, { useState, useEffect } from 'react';

function DemoUseEffect() {
  const [catFacts, setCatFacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://cat-fact.herokuapp.com/facts');
        const data = await response.json();
        setCatFacts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array means this effect runs once, on component mount

  return (
    <div>
      <h1>Cat Facts</h1>
      <ul>
        {catFacts.map((fact) => (
          <li key={fact._id}>{fact.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default DemoUseEffect;
