class Game {
  constructor() {
    this.addEvents();
  }

  addEvents() {
    var greenElement = document.getElementById('green')
    var redElement = document.getElementById('red')
    var blueElement = document.getElementById('blue')
    var orangeElement = document.getElementById('orange')

    greenElement.addEventListener('click', this.clicked)
    redElement.addEventListener('click', this.clicked)
    blueElement.addEventListener('click', this.clicked)
    orangeElement.addEventListener('click', this.clicked)
  }

  generateRandomSequence() {
    var currentRandNum = Math.floor(Math.random() * 4);
  }

  clicked() {
    var colorClicked = this.id;
    console.log(colorClicked)

  }
}

class App {
  constructor() {
    new Game()
  }
}



window.onload = function(){
   new App()
}
