import IPokemon from "../interfaces/iPokemon";

interface CardProps {
    pokemon: IPokemon;
}

export default function Card({pokemon}: CardProps) {
    return <div>
        <h1>#{pokemon.number} {pokemon.name}</h1>
        <h2>{pokemon.types[0]} {pokemon?.types[1] && pokemon.types[1]}</h2>
    </div>
}

