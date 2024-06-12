import React from 'react';
import './App.css';
import Tarif from './component/Tarif';
import data from './data/tarif.json';

function App() {
  return (
    <React.Fragment>
      {data.map((i) => (
        <Tarif
          key={i.id}
          name={i.name}
          price={i.price}
          speed={i.speed}
          color={i.color}
          isSelected={i.isSelected}
        />
      ))}
    </React.Fragment>
  );
}

export default App;
