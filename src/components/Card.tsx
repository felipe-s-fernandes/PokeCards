import IPokemon from "../interfaces/iPokemon";

interface CardProps {
    pokemon: IPokemon;
    remove: () => void;
}

export default function Card({pokemon, remove}: CardProps) {
    return <div>
        <h1>#{pokemon.number} {pokemon.name}</h1>
        <figure>
            <img src={pokemon.spriteUrl} alt={`${pokemon.name} sprite.`} />
        </figure>
        <h2>{pokemon.types[0]} {pokemon?.types[1] && pokemon.types[1]}</h2>
        <button onClick={remove}>remove</button>
    </div>
}

