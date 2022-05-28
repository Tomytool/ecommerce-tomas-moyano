import React from 'react';
import ItemCount from '../itemcount/ItemCount';

const ItemListContainer = () => {
  return (
    <div className="App-header">
      <h4>Contenedor de productos </h4>
      <ItemCount stock= {5}/>
    </div>
  );
};

export default ItemListContainer;
