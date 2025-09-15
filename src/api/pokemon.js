export default async function getPokemons() {
  try {
    const respose = await fetch(`https://pokeapi.co/api/v2/pokemon-form/7/`);
    return await respose.json();
  } catch (err) {
    console.log(err);
  }
}
