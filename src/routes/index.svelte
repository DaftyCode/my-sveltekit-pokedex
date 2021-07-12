<script lang="ts">
    import { pokemons } from "../stores/pokestore";
    import PokemonCard from "../components/pokemon-card.svelte";

    let searchTerm = "";
    let filteredPokemon = [];

    $: {
        if (searchTerm) {
            filteredPokemon = $pokemons.filter(pokemon => pokemon.name.toLowerCase()
            .includes(searchTerm.toLowerCase()));
        } else {
            filteredPokemon = [...$pokemons];
        }
    }
</script>
<svelte:head>
    <title>'Svelte Kit Pokedex'</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Svelte Kit Pokedex</h1>

<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200" 
type="text" bind:value={searchTerm} placeholder="Search Pokemon">

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each filteredPokemon as pokemon}
        <PokemonCard pokemon={pokemon} />
    {/each}
</div>
