import React from 'react';
import './App.css';
import { Tarif } from './component/Tarif';
import data from './data/tarif.json';

function App() {
  return (
   <div>
      {data.map((tarif) => (
  <Tarif
         tarif={tarif}
          key={tarif.name}
        />
      ))}
</div>
  );
}

export default App;
