import React from 'react'
import "./itemcount.css"
import { AiOutlineLeft,AiOutlineRight } from "react-icons/ai";


const ItemCount = () => {
    let saldo=3;

    const [count, setCount] = React.useState(0);
    let subtractCounter= () => {setCount(count-1) };
    let addCounter= () => {
        saldo=saldo-1;
        if(saldo===0){console.log("no hay mas productos")}else{setCount(count+1)}
        };
    

  return (
    <div className="item-count">
        <img src="https://picsum.photos/seed/picsum/200/200" alt=" Imagen 200 x 300" />
        <div className='counter'>
            <AiOutlineLeft onClick={subtractCounter}/>
            <p>{count < 0 ? setCount(0): count > saldo ? setCount(saldo): count }</p>
            <AiOutlineRight onClick={addCounter}/>
        </div>
        <button>Agregar Carro</button>
    </div>
  )
}

export default ItemCount