import IPokemon from "../interfaces/iPokemon";
import capitalizeFirstLetter from "./capitalize";

export default async function fetchPokemon(pokemon: string): Promise<IPokemon> {
    try {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
        );
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return {
                number: data.id,
                name: capitalizeFirstLetter(data.name),
                spriteUrl: data.sprites.front_default,
                types:
                    data.types.length === 1
                        ? [data.types[0].type.name]
                        : [data.types[0].type.name, data.types[1].type.name],
            };
        } else {
            throw new Error(`Oops! Something went wrong there...`);
        }
    } catch (error) {
        console.error(error);
        return {
            number: 0,
            spriteUrl:
                "https://archives.bulbagarden.net/media/upload/archive/9/9e/20090102034838%21Ghost_I.png",
            name: "Missingno",
            types: ["bird"],
        };
    }
}
