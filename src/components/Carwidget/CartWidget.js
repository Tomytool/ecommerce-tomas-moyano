import React from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import './cartwidget.css';

const CartWidget = (props) => {
  return (
    <>
      <TiShoppingCart className='carro-compra'/>
      <p>{props.compra}</p>
    </>
  );
};

export default CartWidget;
