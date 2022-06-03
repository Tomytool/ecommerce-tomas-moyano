import React from 'react';
import './Item.css';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Item = (props) => {
  const [count, setCount] = React.useState(0);
  let subtractCounter = () => {
    setCount(count - 1);
  };
  let addCounter = () => {
    setCount(count + 1);
  };
  return (
    <div className="item-count">
      <h3>{props.titulo}</h3>
      <img
        src="https://picsum.photos/seed/picsum/200/200"
        alt=" Imagen 200 x 300"
      />
      <div className="counter">
        <AiOutlineLeft onClick={subtractCounter} />
        <p>
          {count < 0
            ? setCount(0)
            : count > props.stock
            ? setCount(props.stock)
            : count}
        </p>
        <AiOutlineRight onClick={addCounter} />
      </div>
      <h5>{props.precio}</h5>
      <button>Agregar Carro</button>
    </div>
  );
};

export default Item;
