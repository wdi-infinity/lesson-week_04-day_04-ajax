// We loaded axios library in our html file
// Lets make an ajax call with axios
function addToScreen(response) {
 console.log(response);
  //console.log(response.data.sprites.back_shiny);
  const img = document.createElement('img');
  img.src = response.data.sprites.front_shiny;
  document.body.appendChild(img);
    const name = document.createElement('text');
    name.textContent = response.data.name;
    document.body.appendChild(name);
    // const header= document.createElement('text');
    // header.textContent=  response.data.moves.move.name;
    // document.body.appendChild(header);
    const array = document.createElement('text');
    array.textContent = response.data.game_indices;
    for (let i=0;i<array.clientHeight;i++){
   // how to print object inside the  array
    }
  }
  axios({
    method: 'get',
    url: 'https://pokeapi.co/api/v2/pokemon/ditto/'
  })
  .then(addToScreen);
// method: get
// url: https://dog.ceo/api/breed/boxer/images/random
