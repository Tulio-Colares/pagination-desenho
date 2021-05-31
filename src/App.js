import React, { useState, useEffect} from 'react';
import axios from 'axios';
import PokeList from './components/PokeList';
import Pagination from './components/Pagination';

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [countPages, setCountPages] = useState();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage, setPokemonPerPage] = useState(20)

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1200');
      setPokemon(res.data.results);
      setCountPages(res.data.count);
      setLoading(false);
    }

    fetchPokemon();
  }, [])
  
  console.log('testando');
  console.log(pokemon)
  console.log(countPages);
  

  //Get curremt pokemon
  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPost = indexOfLastPokemon - pokemonPerPage;
  const currentPokemons = pokemon.slice(indexOfFirstPost, indexOfLastPokemon);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div>
      <PokeList pokemons={pokemon}/>
      <Pagination totalPosts={pokemon.length} pokemonPerPage={pokemonPerPage} paginate={paginate} />
    </div>
  )
}
