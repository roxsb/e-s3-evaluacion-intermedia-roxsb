import React, { Component } from 'react';

class Pokemon extends Component {

  render() {

    const {pokemonDataArray} = this.props;

    return (
      <React.Fragment>
        <div className="App">
          <ul className="poke__list">
            {pokemonDataArray.map( poke =>{
              return(
                <li className="poke__item">
                  <img className= "poke__img" src= {poke.url} alt={poke.name}/>
                  <h2 className="poke__name">{poke.name}</h2>
                  <div className="type__list">{poke.types.map( type =>{
                    return(
                        <li className="type__item">{type}</li>
                    )
                  })}
                  </div>
                </li>
              )
            })}                     
          </ul>
        </div>
      </React.Fragment>            
    );
  }
}

export default Pokemon;