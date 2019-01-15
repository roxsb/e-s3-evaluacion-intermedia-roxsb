import React, { Component } from 'react';
import Pokemon from './Pokemon';

class PokeList extends Component {

	render() {
	
		const {pokemonDataArray} = this.props;
			
		return (        
			<React.Fragment>
				<ul className="poke__list">
					<Pokemon pokemonDataArray = {pokemonDataArray} />                     
				</ul>
			</React.Fragment>										
		);
	}
}

export default PokeList;