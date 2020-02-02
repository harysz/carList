import React , { useState } from 'react';
import './App.css';
import left from './sources/chevron-left-solid.svg';
import right from './sources/chevron-right-solid.svg';

function App() {
const [data, setState] = useState([]);
async function fetchData(){
  const res = await fetch('https://backend.daviva.lt/API/InformacijaTestui');
  const response = await res.json();

  const resData = {
    make:response.marke,
    model:response.modelis,
    year:response.metai,
    img:response.nuotraukos,
    price:response.kaina,
  };

  setState([...data, resData]);
}

  return (
    <div className="App">
      <div className='container'>
      {data && data.map((item,i)=>{
        return (
          <div className='card' key={i}>
          
            <div className='images' style={{'transform': `translateX(-${item.position * 240}px)`}}>
            {item.img.map((img,i)=>{
              return(<img src={img} className='car' key={i}  alt='lol no'/>)
            })}

            </div>
            <div className='info'>  
            <p className='text make'>{item.make}</p>
            <p className='text model'>Modelis : {item.model}</p>
            <p className='text year'>Metai : {item.year}</p>
            <p className='text price'>{item.price} € </p>     
            </div>
            </div>
        )
      })}
      </div>
      <div className='btn-get' onClick={()=>fetchData()}>
      Click here for Cars
      </div>     
    </div>
  );
}

export default App;
