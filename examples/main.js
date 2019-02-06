// We loaded axios library in our html file
// Lets make an ajax call with axios

// method: get
// url: https://dog.ceo/api/breed/boxer/images/random
function printStuff (response2){ //response2 can be any thing
    let img = document.createElement('img');
    img.src = response2.data.message;
    document.body.appendChild(img);
console.log(response2.data.message)
}
function altrnativ(response3){

    let img = document.createElement('img');
    img.src = response3.data.message;
    document.body.appendChild(img);
console.log(response3.data.message)

    console.log('soooory')
}
axios({
    method : 'get',
    url: 'https://geek-jokes.sameerkumar.website/api',

    // method : 'get',
    // url: 'https://purr.objects-us-east-1.dream.io/i/0WUGa.jpg'
})
.then(altrnativ)
.catch(printStuff);