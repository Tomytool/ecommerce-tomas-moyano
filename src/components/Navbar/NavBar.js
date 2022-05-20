import React from 'react';
import { TiChartBarOutline,  } from 'react-icons/ti';
import CartWidget from '../Carwidget/CartWidget';
import './navbar.css';

const NavBar = () => {
  return (
    <div className="menu">
      <div className="logo">
        <TiChartBarOutline className='logo_svg'/>
        <h3>Ecommerce T</h3>
      </div>
      <ul className="opcion_menu">
        <li>Home</li>
        <li>Opción 1</li>
        <li>Opción 2</li>
        <li>Opción 3</li>
        <li>Opción 4</li>
      </ul>
      <div className="carro">
      <CartWidget compra={0}/>
       </div>
    </div>
  );
};

export default NavBar;
