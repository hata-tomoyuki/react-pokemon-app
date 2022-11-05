import React from 'react';
import './Card.css';

const Card = ({pokemon}) => {
  return (
    <div className='card'>
        <div className="cardImg">
            <img src={pokemon.sprites.front_default} />
        </div>
        <h3 className='cardName'>{pokemon.name}</h3>
        <div className="cardTypes">
            <div className='title'>Type</div>
            {pokemon.types.map((type) => {
                return (
                    <div key={type.type.name}>
                        <span className='typeName'>{type.type.name}</span>
                    </div>
                )
            })}
        </div>
        <div className="cardInfo">
            <div className="cardData">
                <span className='title'>Weight: </span>
                <span>{pokemon.weight}</span>
            </div>
            <div className="cardData">
                <span className='title'>Height: </span>
                <span>{pokemon.height}</span>
            </div>
            <div className="cardData">
                <span className='title'>Ability: </span>
                <span>{pokemon.abilities[0].ability.name}</span>
            </div>
        </div>
    </div>
  )
}

export default Card
