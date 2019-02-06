function showPicturs(response1){
    ///for posting pic
    var img = $('<img id="dogPic">'); //Equivalent: $(document.createElement('img'))
    img.attr('src', response1.data.message);
    img.appendTo('#divv');

// let img = document.createElement('img')
// img.src = response1.data.message;
// document.body.appendChild(img);

}

axios({
    method : 'get',
    url : 'https://dog.ceo/api/breeds/image/random'
})

.then(showPicturs);