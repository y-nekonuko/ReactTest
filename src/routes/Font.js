import React from 'react';
import FontApp from "../components/FontApp";
import Data from '../FontData.json';

function Font() {
  const data = Data;
  return (
    <div className="container is-fluid">
      <h2> Font </h2>
      <FontApp data={data}/>
    </div>
  );
}

export default Font;
