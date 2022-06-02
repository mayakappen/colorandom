var newPaletteButton = document.querySelector(".new-palette-button");

var savePaletteButton = document.querySelector(".save-palette-button");

var colors = document.querySelectorAll(".color")

var box1 = document.getElementById("box1")

var box2 = document.getElementById("box2")

var box3 = document.getElementById("box3")

var box4 = document.getElementById("box4")

var box5 = document.getElementById("box5")

var hex1 = document.getElementById("hex1")

var hex2 = document.getElementById("hex2")

var hex3 = document.getElementById("hex3")

var hex4 = document.getElementById("hex4")

var hex5 = document.getElementById("hex5")


///Event Listeners///
///window.addEventListener('load', [however we're calling the new instance of palette]);

//newPaletteButton.addEventListener(‘click’ ,)

//savePaletteButton.addEventListener(‘click’ ,)

//in general, who (what class) is responsible for each function?
//what really needs to be global? keep global scope as thin as possible


class Color {
  constructor() {
    this.locked = false;
    this.hexcode = this.randomHexKey();
  }
  randomHexKey() {
   var hexcode = '#'
   var hexidecimal = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    for (var i = 0; i < 6; i++) {
      var randIndex = Math.floor(Math.random() * hexidecimal.length)
      hexcode += hexidecimal[randIndex]
  }
  return hexcode
  }
};
//if this.locked === true, don't run randomHexKey function.


class Palette {
  constructor() {
    // this.uniqueID = Date.now();
    this.uniquePalette = [];
  }

  returnFive() {
    var newColor = new Color();
    for (var i = 0; i < 5; i++) {
    this.uniquePalette.push(newColor.randomHexKey(i))
    return this.uniquePalette
 }
}
}

var palette1 = new Palette();

console.log(palette1);

// function returnFive() {
//    for (i = 0; i < 5; i++)
//    return randomHexKey(i);
//  }

 // createUniqueID() {
 //   for (var i = 0; i < this.uniquePalette.length; i++)
 //   return this.uniquePalette.join(''); //date.now
 // }






// //To happen when new palette is clicked:
//   function lockColors(color) {
//     for (var i = 0; i < this.uniquePalette.length; i++);
//     if (color.locked === false) {
//       uniquePalette[i] = newColor
//     }
//   }





//
// class Color {
//   constructor(hexcode) {
//     hexcode =
//     this.locked = false;
//     this.hexcode = hexcode
//   }
// };
//
// function randomHexKey() {
//  var hexcode = '#'
//  var hexidecimal = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
//   for (var i = 0; i < 6; i++) {
//     var randIndex = Math.floor(Math.random() * hexidecimal.length)
//     hexcode += hexidecimal[randIndex]
// }
//
// return hexcode
// }
//
// class Palette {
//   constructor(color1, color2, color3, color4, color5) {
//     color1 = randomHexKey();
//     color2 = randomHexKey();
//     color3 = randomHexKey();
//     color4 = randomHexKey();
//     color5 = randomHexKey();
//     this.color1 = color1
//     this.color2 = color2
//     this.color3 = color3
//     this.color4 = color4
//     this.color5 = color5
//   }
// };
