import { useState } from "react";
import Card from "./components/Card";
import IPokemon from "./interfaces/iPokemon";
import fetchPokemon from "./modules/fetchPokemon";
import genRandomNumber from "./modules/random";


function App() {

    const [nameInput, setNameInput] = useState("")
    const [pokemon, setPokemon] = useState<IPokemon[]>([])

    const drawPokemonByInput = async () => {
        const newPokemon: IPokemon = await fetchPokemon(nameInput)
        setPokemon([newPokemon, ...pokemon])
    }

    const drawRandomPokemon = async () => {
        const dexNumber = genRandomNumber(1, 1015)
        const newPokemon: IPokemon = await fetchPokemon(dexNumber.toString())
        setPokemon([newPokemon, ...pokemon])
    }

    const handleNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameInput(event.target.value)
    }

    const removePokemon = (cardNumber: number) => {
        const newPokemon = pokemon.filter((_, index) => index !== cardNumber);
        setPokemon(newPokemon)
    }

  return (
    <>
        <input type="text" placeholder="Pokemon name" onChange={handleNameInputChange} />
        <button onClick={drawPokemonByInput} >Draw pokemon by name or number</button>
        <button onClick={drawRandomPokemon} >Draw random pokemon</button>
        {pokemon.map((pokemon, cardNumber) => <Card pokemon={pokemon} remove={() => removePokemon(cardNumber)} key={cardNumber}/>) }
    </>
  )
}

export default App
