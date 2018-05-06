class Game {
  constructor() {
    this.greenElement = document.getElementById('green')
    this.redElement = document.getElementById('red')
    this.blueElement = document.getElementById('blue')
    this.orangeElement = document.getElementById('orange')
    this.addEvents();
    this.count = 2;
    this.elementsPicked = [];
    this.generateRandomSequenceAndGamePlay.call(this)

  }

  addEvents() {
    this.greenElement.addEventListener('click', this.clicked)
    this.redElement.addEventListener('click', this.clicked)
    this.blueElement.addEventListener('click', this.clicked)
    this.orangeElement.addEventListener('click', this.clicked)
  }


  generateRandomSequenceAndGamePlay() {
    var displayColor = this.displayColor
    var green = this.greenElement
    var red = this.redElement
    var blue = this.blueElement
    var orange = this.orangeElement
    var i = 0;
      while (i < this.count) {
        (function(i) {
        setTimeout(function() {
          var currentRandNum = Math.floor(Math.random() * 4);
          const colors = [green, red, blue, orange];
          var currentElement = colors[currentRandNum]
          displayColor(currentElement)
          console.log(colors, currentRandNum)
        }, 1000 * i)
      })(i++)
    }

    this.checkIfPlaySelectedCorrect()

  }

  displayColor(currentElement) {
    console.log(currentElement)
    currentElement.style.opacity = '0.5'
    setTimeout(function(){
      currentElement.style.opacity = '1.0'
      },  1000);
  }

  checkIfPlaySelectedCorrect() {

  }

  clicked() {
    var colorClicked = this.id;
    console.log(colorClicked)

  }
}

class App {
  constructor() {
    var g = new Game()
  }
}



window.onload = function(){
   new App()
}
