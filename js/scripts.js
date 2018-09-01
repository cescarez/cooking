var tspTomL = function (tablespoons) {
  return tablespoons * 5
};
var tspToTbs = function (teaspoons) {
  return teaspoons / 3
};
var tspToOz = function (teaspoons) {
  return teaspoons / 6
};
var tspToCp = function (teaspoons) {
  return teaspoons / 48
};
var tspToPints = function (tablespoons) {
  return tablespoons / 96
};
var tspToQts = function (tablespoons) {
  return tablespoons / 192
};
var tspToQts = function (tablespoons) {
  return tablespoons / 768
};

var tbsTomL = function (tablespoons) {
  return tablespoons * 15
};
var tbsToTsp = function (tablespoons) {
  return tablespoons * 3
};
var tbsToOz = function (tablespoons) {
  return tablespoons / 2
};
var tbsToCp = function (tablespoons) {
  return tablespoons / 16
};
var tbsToPints = function (tablespoons) {
  return tablespoons / 32
};
var tbsToQts = function (tablespoons) {
  return tablespoons / 64
};
var tbsToQts = function (tablespoons) {
  return tablespoons / 256
};

var ozToTsp = function (ounces) {
  return ounces * 6
};

var cpToTsp = function (cups) {
  return cups*48
};

number = parseFloat(prompt("Enter a number: "))
unitInit = prompt("Enter your starting unit of measurement: ")
unitFinal = prompt("Enter your desired unit of measurement: ")


result = tspToTbs(number)
alert(result)
