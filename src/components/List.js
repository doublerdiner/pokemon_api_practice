import React from "react";

const List = ({list, selectPokemon})=>{
    const fullList = list.map((pokemon, i)=>{
        return (
            <a onClick={()=>{handleClick(i)}} href="#" key={pokemon.url}>{pokemon.name}</a>
            )
    })

    const handleClick = (i)=>{
        selectPokemon(i);
    }

    return(
        <>
            <aside className="list">
                <h2>Select a Pokemon to see more...</h2>
                <div className="vertical-menu">
                    {fullList}
                </div>
            </aside>

        </>

    );
};

export default List; 