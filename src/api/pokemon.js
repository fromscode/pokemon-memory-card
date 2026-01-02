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
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-form/${id}/`,
      );
      const { name, sprites } = await response.json();
      const pokObj = {
        name,
        sprite: sprites.front_default,
        hasBeenClicked: false,
      };
      responses.push(pokObj);
    } catch (err) {
      console.log(err);
    }
  }

  return responses;
}
