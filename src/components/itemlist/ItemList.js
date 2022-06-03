import React, { useEffect, useState } from 'react';
import Item from '../item/Item';
import './contenedorList.css';
import { productos } from '../item/data/datos';

const ItemList = () => {
  const [datos, setDatos] = useState(productos);

  async function fetchData() {
    const response = await fetch(productos);
    const data = await response.json();
    setDatos(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="contenedor-list">
      {datos.map((data) => {
        return (
          <Item
            key={data.id}
            id={data.id}
            titulo={data.titulo}
            precio={data.precio}
            stock={data.stock}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
