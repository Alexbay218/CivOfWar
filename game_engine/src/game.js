var gameClass = {
  gameMap: {},
  playerArr: [],
  initFunct: function() {
    this.gameMap = Object.assign({}, window.mapClass);
    this.gameMap.initFunct();
  },
  updateFunct: function() {
  }
}
