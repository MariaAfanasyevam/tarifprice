 import React, {useState} from "react";
 import "./tarif.css"

export const  Tarif = ({tarif}) => {
  const {name , price, speed, color} = tarif;
  const [isSelected, setIsSelected] = useState (false);
  const [value, setValue] = useState (name);
   
  function getValue (event) {
    const newValue = event.target.value;
    setValue(newValue);
  }


  return (
  
  <section>
<article>
    {
    isSelected ? (
      <div className = {`selected ${color}`} onClick= {() => setIsSelected(false)}>
    <div className = 'name'>{name}</div>
    <div className='price'>{price}</div>
    <div className="text"> до {speed} Мбит/сек </div>
    <div className='text2'> Объем включенного трафика не ограничен </div>
      </div>
     
    ) : (
    <div className={`tarif ${color}`} onClick={() => setIsSelected(true)}>
    <div className = 'name'>{name}</div>
    <div className='price'>{price}</div>
    <div className="text"> до {speed} Мбит/сек </div>
    <div className='text2'> Объем включенного трафика не ограничен </div>
        </div>
    )}

</article>
    </section>
 
      );
}