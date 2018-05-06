class Game {
  constructor() {
    this.greenElement = document.getElementById('green')
    this.redElement = document.getElementById('red')
    this.blueElement = document.getElementById('blue')
    this.orangeElement = document.getElementById('orange')
    this.count = 1;
    this.index = 0;
    this.elementsPicked = [];
    this.generateRandomSequenceAndGamePlay.call(this)

  }

  addEvents() {
    this.greenElement.addEventListener('click', this.greenClicked.bind(this))
    this.redElement.addEventListener('click', this.redClicked.bind(this))
    this.blueElement.addEventListener('click', this.blueClicked.bind(this))
    this.orangeElement.addEventListener('click', this.orangeClicked.bind(this))
  }


  generateRandomSequenceAndGamePlay() {
    var displayColor = this.displayColor
    var checkIfPlaySelectedCorrect = this.checkIfPlaySelectedCorrect
    var green = this.greenElement
    var red = this.redElement
    var blue = this.blueElement
    var orange = this.orangeElement
    var elementsPickedd = []
    var count = this.count
    var ctrl = this
    this.index = 0
    var i = 0;
      while (i < this.count) {
        (function(i) {
        setTimeout(function() {
          var currentRandNum = Math.floor(Math.random() * 4);
          const colors = [green, red, blue, orange];
          var currentElement = colors[currentRandNum]
          elementsPickedd.push(currentElement)
          displayColor(currentElement, elementsPickedd)
          ctrl.elementsPicked = elementsPickedd
        }, 1000 * i)
      })(i++)
    }
  }

  displayColor(currentElement, elementsPickedd) {
    currentElement.style.opacity = '0.5'
    setTimeout(function(){
      currentElement.style.opacity = '1.0'
    },  1500);
  }

  checkIfPlaySelectedCorrect(elementsPickedd, ctrl) {
    ctrl.elementsPicked = elementsPickedd
    var i = 0
    if (true) {

    }
    ctrl.count = 2
    // ctrl.generateRandomSequenceAndGamePlay()
  }
  greenClicked() {
    var colorClicked = this;
    if (this.elementsPicked.length !== 0) {
      if (this.greenElement === this.elementsPicked[this.index]) {
        this.index++

      } else {
        this.restart()

        return false
      }
      if (this.elementsPicked.length === this.index) {
        this.count++
        this.generateRandomSequenceAndGamePlay()
      }
    }



  }

  redClicked() {
    var colorClicked = this;
    if (this.elementsPicked.length !== 0) {
      if (this.redElement === this.elementsPicked[this.index]) {
        this.index++

      } else {
        this.restart()

        return false
      }
      if (this.elementsPicked.length === this.index) {
        this.count++
        this.generateRandomSequenceAndGamePlay()
      }
    }



  }

  blueClicked() {
    var colorClicked = this;
    if (this.elementsPicked.length !== 0) {
      if (this.blueElement === this.elementsPicked[this.index]) {
        this.index++

      } else {
        this.restart()

        return false
      }
      if (this.elementsPicked.length === this.index) {
        this.count++
        this.generateRandomSequenceAndGamePlay()
      }
    }



  }

  orangeClicked() {
    var colorClicked = this;
    if (this.elementsPicked.length !== 0) {
      if (this.orangeElement === this.elementsPicked[this.index]) {
        this.index++

      } else {
        this.restart()

        return false
      }
      if (this.elementsPicked.length === this.index) {
        this.count++
        this.generateRandomSequenceAndGamePlay()
      }
    }



  }

  restart() {
    this.playButton = document.getElementById('play')
    this.playButton.style.display = 'unset';
    this.elementsPicked = []
  }
}

class App {
  constructor() {
    this.playButton = document.getElementById('play')
    this.playButton.addEventListener('click', this.start.bind(this))



  }

  start() {
    this.playButton.style.display = 'none';
    var g = new Game()
    g.addEvents()
  }
}



window.onload = function(){
   new App()
}
