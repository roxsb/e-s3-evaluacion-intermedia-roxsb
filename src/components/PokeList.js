import React, { Component } from 'react';
// import Pokemon from './Pokemon';

class PokeList extends Component {
    render() {

      const {pokemon} = this.props;
   
  
      return (
        <React.Fragment>
            <div className="App">
                <ul className="Poke__list">
                {pokemon.map( poke =>{
                return(
                        <li className="Poke__item">
                    <img src= {poke.url}></img>
                    <h2>{poke.name}</h2>
                    <div>{poke.types.map(
                        type =>{
                        return(
                            <li>{poke.types}</li>
                        )
                        }
                    )}
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

export default PokeList;