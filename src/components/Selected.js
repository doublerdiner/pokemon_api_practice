import React from "react";

const Selected = ({pokemon})=>{
    const stats = pokemon.stats.map((stat)=>{
        return (
        <li>{stat.stat.name}: {stat.base_stat}</li>
        )
    })
    return(
        <>
            <h2>Selected</h2>
            {!pokemon ? <p>Loading...</p>
             : 
             <div>
                <p>Pokemon ID: {pokemon.id}</p>
                <p>Name: {pokemon.name.toUpperCase()}</p>
                <img src={pokemon.sprites.other['official-artwork'].front_default} alt="" />
                <ul>
                    {stats}
                </ul>
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
             </div>
             }
        </>

    );
};

export default Selected; 