var mapClass = {
  terrArr: [],
  mapWidth: 50,
  mapHeight: 50,
  initFunct: function () {
    this.initTerrArrFunct();
  },
  initTerrArrFunct: function() {
    for(var y = 0;y < this.mapWidth;y++) {
    this.terrArr.push([]);
      for(var x = 0;x < this.mapWidth;x++) {
        this.terrArr[y][x] = Object.assign({}, window.terrClass);
      }
    }
  },
  changeWaterLevelFunct: function(deltaWL) {
    for(var y = 0;y < this.mapWidth;y++) {
      for(var x = 0;x < this.mapWidth;x++) {
        this.terrArr[y][x].posZ += deltaWL;
      }
    }
  }
};
