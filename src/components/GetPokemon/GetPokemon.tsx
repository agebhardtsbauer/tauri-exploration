import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Box } from '@mui/material';

function GetPokemon() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);
  const [error, setError] = useState('');

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      setPokemonData(response.data);
      setError('');
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError('Pokémon not found!');
      } else {
        console.error('Error fetching Pokémon data:', error);
        setError('An error occurred!');
      }
      setPokemonData(null);
    }
  };

  const handleInputChange = (event) => {
    setPokemonName(event.target.value);
  };

  const handleAddPokemon = (pd) => {
    setPokemonList([...pokemonList, pd]);
  }

  const handleRemovePokemon = (pokemon) => {
    setPokemonList(pokemonList.filter((p) => p !== pokemon));
  }


  return (
    <div style={{ marginLeft: '250px' }}>
      <TextField
        label="Enter a Pokémon name"
        value={pokemonName}
        onChange={handleInputChange}
      />
      <Button onClick={fetchPokemon}>Get Pokémon</Button>
      <Button onClick={() => handleAddPokemon(pokemonData)}>Add To Team</Button>
      {pokemonData ? (
        <div style={{ background: "gray" }}>
          <Typography variant="h4">{pokemonData.name}</Typography>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <Typography variant="body1">Height: {pokemonData.height}</Typography>
          <Typography variant="body1">Weight: {pokemonData.weight}</Typography>
          <Typography variant="body1">Base experience: {pokemonData.base_experience}</Typography>
          <Typography variant="body1">Abilities:</Typography>
          <ul>
            {pokemonData.abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <Typography variant="h4">{error}</Typography>
      )}

      {pokemonList ? (
        <div>
          <Typography variant="h4">Pokémon List</Typography>
          {pokemonList.map((pokemon) => (
            <Box key={pokemon.name} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <Typography variant="h5">{pokemon.name}</Typography>
              <Button onClick={() => handleRemovePokemon(pokemon)}>Remove</Button>
            </Box>
          ))}
        </div>
      ) : null}

    </div>
  );
}


export default GetPokemon;
