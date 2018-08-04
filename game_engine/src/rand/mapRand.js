var mapRandClass = {
  octaveMulti: 1,
  freqMulti: 1,
  ampMulti: 1,
  maxAmp: 128,
  minAmp: -128,
  randGen: {},
  initFunct: function(seed) {
    this.randGen =  Object.assign({}, window.randGenClass);
    this.randGen.initFunct(seed);
  },
  mapRandFunct: function(map) {
    //map.terrArr[0][0] = maxAmp - ((Math.abs(maxAmp) + Math.abs(minAmp))*this.randGen.nextFloatFunct());
    var tmpMap = Object.assign({},map);
    for(var y = 0;y < tmpMap.mapHeight;y++) {
      for(var x = 0;x < tmpMap.mapWidth;x++) {
        var delta = 1;
        for(var o = 0;o < this.octaveMulti;o++) {
          delta = delta*((this.randGen.nextFloatFunct()*Math.pow(this.freqMulti,o))/Math.pow(this.ampMulti,o));
        }
        var avg = this.avgFunct(map, x, y);
        tmpMap.terrArr[y][x].posZ = avg + delta;
        if(tmpMap.terrArr[y][x].posZ > this.maxAmp) {
          tmpMap.terrArr[y][x].posZ = this.maxAmp;
        }
        if(tmpMap.terrArr[y][x].posZ < this.minAmp) {
          tmpMap.terrArr[y][x].posZ = this.minAmp;
        }
      }
    }
    return tmpMap;
  },
  eightPosIndexFunct: function(maxX, maxY, currX, currY) {
    var res = [];
    res.push([currX-1,currY-1]);
    res.push([currX,currY-1]);
    res.push([currX+1,currY-1]);
    res.push([currX-1,currY]);
    res.push([currX+1,currY]);
    res.push([currX-1,currY+1]);
    res.push([currX,currY+1]);
    res.push([currX+1,currY+1]);
    for(var i = 0;i < res.length;i++) {
      if(res[i][0] < 0) {
        res[i][0] = maxX-1;
      }
      if(res[i][0] >= maxX) {
        res[i][0] = 0;
      }
      if(res[i][1] < 0) {
        res[i][1] = maxY-1;
      }
      if(res[i][1] >= maxY) {
        res[i][1] = 0;
      }
    }
    return res;
  },
  avgFunct: function(map, currX, currY) {
    var list = this.eightPosIndexFunct(map.mapWidth, map.mapHeight, currX, currY);
    var sum = 0;
    for(var i = 0;i < list.length;i++) {
      sum += map.terrArr[(list[i][1])][(list[i][0])].posZ;
    }
    return sum/8;
  }
}
