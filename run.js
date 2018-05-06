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
    var i = 0;
      while (i < this.count) {
        (function(i) {
        setTimeout(function() {
          var currentRandNum = Math.floor(Math.random() * 4);
          const colors = [this.greenElement, this.redElement, this.blueElement, this.orangeElement];
          debugger
          var currentElement = colors[currentRandNum]
          console.log(colors, currentRandNum)
        }, 1000 * i)
      })(i++)
    }
    console.log([this.greenElement, this.redElement, this.blueElement, this.orangeElement]);

    this.checkIfPlaySelectedCorrect()

  }

    // for (var i = 0; i < this.count; i++) {
    //   // setTimeout(function(){
    //   //   // var currentElement = colors[currentRandNum];
    //   //   // this.displayColor(currentElement)
    //   //   // this.elementsPicked.push(currentElement)
    //   //   console.log('test')
    //   // },  2 * 1000);
    //
    //   var delay = 1000;
    //   setTimeout(function () {
    //     console.log('test')
    // }, delay);
    // delay += 5000;

    // }


  displayColor(currentElement) {
    console.log(currentElement)
    currentElement.style.opacity = '0.5'
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
