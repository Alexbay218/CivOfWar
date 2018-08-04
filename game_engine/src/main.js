var g = document.getElementById("main");
var game = Object.assign({}, window.gameClass);
game.playerArr.push(Object.assign({},playerClass))
game.playerArr[0].initFunct();
var mapRand = Object.assign({}, window.mapRandClass);
game.initFunct();
mapRand.initFunct(12315);
mapRand.octaveMulti = 4;
mapRand.freqMulti = 12;
mapRand.ampMulti = 2;
game.gameMap = mapRand.mapRandFunct(game.gameMap);

  game.updateFunct();
  game.playerArr[0].view.drawFunct(g,game);
/*
setInterval(function(){
  game.updateFunct();
  game.playerArr[0].view.drawFunct(g,game);
},1000);
*/
