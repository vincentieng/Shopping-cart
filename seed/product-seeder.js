var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title : 'Gothic Video Game',
    description : 'Awesome Game !',
    price: 10
  }),
  new Product({
    imagePath: 'https://blznav.akamaized.net/img/games/cards/card-world-of-warcraft-54576e6364584e35.jpg',
    title : 'World of Warcraft Video Game',
    description : 'Also an Awesome Game !',
    price: 20
  }),
  new Product({
    imagePath: 'https://www.callofduty.com//content/dam/atvi/callofduty/wwii/home/Stronghold_Metadata_Image.jpg',
    title : 'Call of Duty Video Game',
    description : 'Best game ever',
    price: 20
  }),
  new Product({
    imagePath: 'https://is3-ssl.mzstatic.com/image/thumb/Purple128/v4/74/d3/e8/74d3e83f-6095-5d74-261d-e01791b927cd/AppIcon-1x_U007emarketing-85-220-8.png/246x0w.jpg',
    title : 'Minecraft Video Game',
    description : 'Super awesome',
    price: 15
  }),
  new Product({
    imagePath: 'https://www.consollection.com/image/actualite/test-de-dark-souls-3-une-conclusion-magistrale-8584.jpg',
    title : 'Dark Souls 3 Video Game',
    description : 'I died',
    price: 50
  }),
  new Product({
    imagePath: 'https://t5.rbxcdn.com/4b61e80a14b31710e27378a820329b45',
    title : 'Fornite Video Game',
    description : 'Most famous Game',
    price: 10
  }),
];


var done = 0;
for (var i = 0; i < products.length; i++){
  products[i].save(function(err,result){
    done++;
    if (done == products.length){
      exit();
    }
  });
}

function exit(){
  mongoose.disconnect();
}
