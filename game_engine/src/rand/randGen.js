var randGenClass = {
  seed: 0,
  initFunct: function(seed) {
    this.seed = seed % 2147483647;
    if (this.seed <= 0) this.seed += 2147483646;
  },
  nextFunct: function () {
    return this.seed = this.seed * 16807 % 2147483647;
  },
  nextFloatFunct: function(){
    return (this.nextFunct() - 1) / 2147483646;
  }
};

//pulled from https://gist.github.com/blixt/f17b47c62508be59987b
