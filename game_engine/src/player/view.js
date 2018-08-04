var viewClass = {
  initFunct: function() {

  },
  drawFunct: function(g, data) {
    var gx = g.getContext("2d");

    gx.clearRect(0,0,g.width,g.height);
    g.width = Math.floor(document.body.scrollWidth);
    g.height = Math.floor(document.body.scrollHeight);

    for(var y = 0;y < data.gameMap.mapHeight;y++) {
      for(var x = 0;x < data.gameMap.mapWidth;x++) {
        var tmp = data.gameMap.terrArr[y][x].posZ;
        var tmpStr = "#" + Math.round(tmp).toString(16) + Math.round(tmp).toString(16) + Math.round(tmp).toString(16)
        gx.fillStyle = tmpStr;
        gx.fillRect(x*15,y*15,15,15);
      }
    }
  }
};
