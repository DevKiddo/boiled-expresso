let path = require('path');

let getCatImage = function(catParams, absolute) {
  let imageLocation;
  let happyCat = "images/cat.jpg";
  let grumpyCat = "images/grumpy.jpeg";
  switch (catParams.mood) {
    case "happy":
      imageLocation = absolute ? path.join(__dirname,"../public/", happyCat) : happyCat;
      break;
    case "grumpy":
      imageLocation = absolute ? path.join(__dirname, "../public/", grumpyCat) : grumpyCat;
      break;
  }
  return imageLocation;
}


module.exports = {
  getCatImage: getCatImage
} 
