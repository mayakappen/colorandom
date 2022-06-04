
newPaletteButton = document.querySelector(".new-palette-button");
savePaletteButton = document.querySelector(".save-palette-button");

///Event Listeners///

window.addEventListener('load', function () {
  palette1.updateColors()
});



newPaletteButton.addEventListener('click', clickNewPalette)

function clickNewPalette(){
  palette1.returnFive()
  palette1.updateColors()
}

//savePaletteButton.addEventListener(‘click’, test)


class Color {
  constructor() {
    this.locked = false;
    this.hexcode = this.randomHexKey()
  }

  randomHexKey() {
    if (!this.locked) {
      var hexcode = '#'
      var hexidecimal = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
      for (var i = 0; i < 6; i++) {
        var randIndex = Math.floor(Math.random() * hexidecimal.length)
        hexcode += hexidecimal[randIndex]
    }

    return hexcode
  }
  }
};

class Palette {
  constructor() {
    this.uniqueID = Date.now();
    this.uniquePalette = [];
    // this.colors = document.querySelectorAll(".color")
  }

  returnFive() {
    this.uniquePalette = []
     for (var i = 0; i < 5; i++) {
       var newColor = new Color();
     this.uniquePalette.push(newColor)
     // console.log(this.uniquePalette)
   }
  }

  updateColors() {
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

      hex1.innerText = palette1.uniquePalette[0].hexcode + ' 🔓'
      box1.parentNode.style['background-color'] = palette1.uniquePalette[0].hexcode
      hex2.innerText = palette1.uniquePalette[1].hexcode + ' 🔓'
      box2.parentNode.style['background-color'] = this.uniquePalette[1].hexcode
      hex3.innerText = palette1.uniquePalette[2].hexcode + ' 🔓'
      box3.parentNode.style['background-color'] = this.uniquePalette[2].hexcode
      hex4.innerText = palette1.uniquePalette[3].hexcode + ' 🔓'
      box4.parentNode.style['background-color'] = this.uniquePalette[3].hexcode
      hex5.innerText = palette1.uniquePalette[4].hexcode + ' 🔓'
      box5.parentNode.style['background-color'] = this.uniquePalette[4].hexcode
  };
};

var palette1 = new Palette();
palette1.returnFive();




//looping through all colors generated
//because boxes/hexes are numeric, we can dynamically generate the id for div as a string? 63-64
//(i starts at zero, adding plus 1 makes it readable by people?)
//look up how to concatenate a string and add numbers
// for (var i = 0; i < this.uniquePalette.length; i++) {
// var box = document.getElementById('box' + (i + 1))
// var hex = document.getElementById('hex' + (i + 1))
// var box1 = document.getElementById("box1")
