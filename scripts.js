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

var newPaletteButton = document.querySelector(".new-palette-button");
var savePaletteButton = document.querySelector(".save-palette-button");
var smallBoxContainer = document.querySelector(".small-box-container");
var savePaletteSection = document.querySelector(".saved-palettes");

var lock1 = document.getElementById('lock1')
var lock2 = document.getElementById('lock2')
var lock3 = document.getElementById('lock3')
var lock4 = document.getElementById('lock4')
var lock5 = document.getElementById('lock5')
var locks = [lock1, lock2, lock3, lock4, lock5]

var lockedImg = "https://icons.iconarchive.com/icons/iconsmind/outline/48/Lock-2-icon.png"
var unlockedImg = "https://icons.iconarchive.com/icons/iconsmind/outline/48/Unlock-2-icon.png"



///Event Listeners///

window.addEventListener('load', function () {
  palette1.updateColors()
});

newPaletteButton.addEventListener('click', clickNewPalette)
savePaletteButton.addEventListener('click', miniBox)

function clickNewPalette(){
  palette1.returnFive()
  palette1.updateColors()
}

lock1.addEventListener('click', changeLock1)
lock2.addEventListener('click', changeLock2)
lock3.addEventListener('click', changeLock3)
lock4.addEventListener('click', changeLock4)
lock5.addEventListener('click', changeLock5)

class Color {
  constructor() {
    this.locked = false;
    this.hexcode = this.randomHexKey()
  }

  randomHexKey() {
    var hexcode = this.hexcode
    if (this.locked === false) {


      hexcode = '#'
      var hexidecimal = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
      for (var i = 0; i < 6; i++) {
        var randIndex = Math.floor(Math.random() * hexidecimal.length)
        hexcode += hexidecimal[randIndex]
      }
    }
    return hexcode
}

  }

class Palette {
  constructor() {
    this.uniqueID = Date.now();
    this.uniquePalette = [];
    // this.colors = document.querySelectorAll(".color")
  }

  returnFive() {
    if (this.uniquePalette.length) {
      var helperArray = []
      for (var i = 0; i < 5; i++) {
        if (this.uniquePalette[i].locked === true) {
          helperArray.push(this.uniquePalette[i])
        } else {
          var newColor = new Color();
          helperArray.push(newColor)
        }

      }
      this.uniquePalette = helperArray

    } else {
      for (var i = 0; i < 5; i++) {
        var newColor = new Color()
        this.uniquePalette.push(newColor)

      }
    }
    return this.uniquePalette
  }

  updateColors() {

      hex1.innerText = palette1.uniquePalette[0].hexcode
      box1.parentNode.style['background-color'] = palette1.uniquePalette[0].hexcode
      hex2.innerText = palette1.uniquePalette[1].hexcode
      box2.parentNode.style['background-color'] = palette1.uniquePalette[1].hexcode
      hex3.innerText = palette1.uniquePalette[2].hexcode
      box3.parentNode.style['background-color'] = palette1.uniquePalette[2].hexcode
      hex4.innerText = palette1.uniquePalette[3].hexcode
      box4.parentNode.style['background-color'] = palette1.uniquePalette[3].hexcode
      hex5.innerText = palette1.uniquePalette[4].hexcode
      box5.parentNode.style['background-color'] = palette1.uniquePalette[4].hexcode

      return palette1.uniqueID;
      //

  };
};

var palette1 = new Palette();
palette1.returnFive(palette1);



function miniBox() {
  var smallBox = `
  <div class="saved-palette-box">
    <div class="small-color" style="background-color:${palette1.uniquePalette[0].hexcode}">
      <div id="small-box1"></div>
    </div>
    <div class="small-color" style="background-color:${palette1.uniquePalette[1].hexcode}">
      <div id="small-box2"></div>
    </div>
    <div class="small-color" style="background-color:${palette1.uniquePalette[2].hexcode}">
      <div id="small-box3"></div>
    </div>
    <div class="small-color" style="background-color:${palette1.uniquePalette[3].hexcode}">
      <div id="small-box4"></div>
    </div>
    <div class="small-color" style="background-color:${palette1.uniquePalette[4].hexcode}">
      <div id="small-box5"></div>
    </div>
    <div class="im-the-trashman">
    <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" class="trashcan" alt="trashman">
    </div>
  </div>
`
console.log(palette1.uniquePalette[0].hexcode)
smallBoxContainer.innerHTML += smallBox
}

var color1 = palette1.uniquePalette[0]
var color2 = palette1.uniquePalette[1]
var color3 = palette1.uniquePalette[2]
var color4 = palette1.uniquePalette[3]
var color5 = palette1.uniquePalette[4]

function changeLock1() {
  if (lock1.src === unlockedImg) {
    lock1.src = lockedImg
    palette1.uniquePalette[0].locked = true
  } else {
    palette1.uniquePalette[0].locked = false
    lock1.src = unlockedImg
  }
}

function changeLock2() {
  if (lock2.src === unlockedImg) {
    lock2.src = lockedImg
    palette1.uniquePalette[1].locked = true
  } else {
    palette1.uniquePalette[1].locked = false
    lock2.src = unlockedImg
  }
}

function changeLock3() {
  if (lock3.src === unlockedImg) {
    lock3.src = lockedImg
    palette1.uniquePalette[2].locked = true
  } else {
    palette1.uniquePalette[2].locked = false
    lock3.src = unlockedImg
  }
}

function changeLock4() {
  if (lock4.src === unlockedImg) {
    lock4.src = lockedImg
    palette1.uniquePalette[3].locked = true
  } else {
    palette1.uniquePalette[3].locked = false
    lock4.src = unlockedImg
  }
}

function changeLock5() {
  if (lock5.src === unlockedImg) {
    lock5.src = lockedImg
    palette1.uniquePalette[4].locked = true
  } else {
    palette1.uniquePalette[4].locked = false
    lock5.src = unlockedImg
  }
}




//containers float column




//looping through all colors generated
//because boxes/hexes are numeric, we can dynamically generate the id for div as a string? 63-64
//(i starts at zero, adding plus 1 makes it readable by people?)
//look up how to concatenate a string and add numbers
// for (var i = 0; i < this.uniquePalette.length; i++) {
// var box = document.getElementById('box' + (i + 1))
// var hex = document.getElementById('hex' + (i + 1))
// var box1 = document.getElementById("box1")
