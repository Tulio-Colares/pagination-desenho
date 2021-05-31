import React from 'react'

export default function PokeList({ pokemons, loading }) {
    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <ol>
                {pokemons.map(poke => (
                    <li key={poke.name} >{poke.name}</li>
                ))}
            </ol>
        </div>
    )
}
