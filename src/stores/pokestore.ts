import { writable } from 'svelte/store';

export const pokemons = writable([]);

const fetchPokemon = async () => {
	const url = 'https://pokeapi.co/api/v2/pokemon?limit=150';
	const res = await fetch(url);
	const data = await res.json();
	const loadedPokemon = await data.results.map((item, index) => {
		return {
			name: item.name,
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		};
	});
	pokemons.set(loadedPokemon);
};
fetchPokemon();
