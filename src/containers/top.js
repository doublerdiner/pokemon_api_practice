import React, {useState, useEffect} from "react";
import List from "../components/List";
import Selected from "../components/Selected";
import Caught from "../components/Caught";

function Top() {
    const [list, setList] = useState([]);
    const [selected, setSelected] = useState(null);
    const [caught, setCaught] = useState([]);

    useEffect(()=>{
        const getList = async function (){
            const res = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151");
            const data = await res.json();
            setList(data.results);
            const resSingle = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
            const dataSingle = await resSingle.json();
            setSelected(dataSingle);
        }
        getList();
    } ,[])

    const selectPokemon = async function(i){
        const resSingle = await fetch(`https://pokeapi.co/api/v2/pokemon/${i+1}/`);
        const dataSingle = await resSingle.json();
        setSelected(dataSingle);
    }


  return (
    <>
        <h1>Pokemon</h1>
        <section className="middle">
            <List selectPokemon={selectPokemon}list={list}/>
            <Selected pokemon={selected}/>
        </section>
        <Caught/>
    </>
  );
}

export default Top;
