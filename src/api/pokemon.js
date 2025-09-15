// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

export default async function getPokemons(n = 5) {
  const responses = [];
  const set = new Set();
  while (responses.length != n) {
    const id = getRandomInt(1, 152);
    if (set.has(id)) continue;
    try {
      const respose = await fetch(
        `https://pokeapi.co/api/v2/pokemon-form/${id}/`,
      );
      responses.push(await respose.json());
    } catch (err) {
      console.log(err);
    }
  }

  return responses;
}
