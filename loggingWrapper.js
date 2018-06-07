var wrapLog = function (callback, name) {
  /* your code here */
  return function (...args) {
    var result = name + "(";
    for (arg in args) {
      if (arg < args.length - 1) {
        result += args[arg] + ", ";
      } else {
        result += args[arg];
      }

    }
      result += ")" + " => " + callback(...args);
      console.log(result);
      return callback;
  };

};

var area = function (x, y) {
  return x * y;
};
var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24