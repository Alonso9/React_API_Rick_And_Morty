import React from 'react';
import '../StylesComponents/CharactersStyle.css';
const Character = ({ characters }) => {
  return (
    <>
      <div className="titleCharacters">
        <h2>characters</h2>
      </div>
      <div className="row">
        {characters.map((item, index) => (
          <div key={index} className="col">
            <div className="card">
              <img src={item.image} alt="" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <hr />
                <p>Species: {item.species}</p>
                <p>Location: {item.location.name}</p>
                <p>Origin: {item.origin.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Character;
