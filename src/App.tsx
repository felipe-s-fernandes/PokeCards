import { useState } from "react";
import Card from "./components/Card";
import IPokemon from "./interfaces/iPokemon";
import fetchPokemon from "./modules/fetchPokemon";


function App() {

    const [nameInput, setNameInput] = useState("")
    const [pokemon, setPokemon] = useState<IPokemon[]>([])

    const drawPokemon = async () => {
        const newPokemon: IPokemon = await fetchPokemon(nameInput)
        setPokemon([...pokemon, newPokemon])
    }

    const handleNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameInput(event.target.value)
    }

  return (
    <>
        <input type="text" placeholder="Pokemon name" onChange={handleNameInputChange} />
        <button onClick={drawPokemon} >Draw pokemon</button>
        {pokemon.map((pokemon, cardNumber) => <Card pokemon={pokemon} key={cardNumber}/>) }
    </>
  )
}

export default App
