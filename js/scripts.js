if ( "#tsp-units" === "milliliters") {
  var tspTomL = function (tablespoons) {
    return (tablespoons * 5);
  };
  var result = tspTomL(tspInput);
} else if ("tablespoons") {
  var tspToTbs = function (teaspoons) {
    return teaspoons / 3
  };
} else if ("ounces") {
  var tspToOz = function (teaspoons) {
    return teaspoons / 6
  };
} else if ("cups") {
  var tspToCp = function (teaspoons) {
    return teaspoons / 48
  };
// } else {
//   alert("We dont know what you mean. Try again.")
// }

// var tspTomL = function (tablespoons) {
//   return tablespoons * 5
// };
// var tspToTbs = function (teaspoons) {
//   return teaspoons / 3
// };
// var tspToOz = function (teaspoons) {
//   return teaspoons / 6
// };
// var tspToCp = function (teaspoons) {
//   return teaspoons / 48
// };
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


$(document).ready(function(){
  $("form#tsp-to-ml").submit(function(event) {
    event.preventDefault();
    var tspInput = parseFloat($("#tsp-to-ml-input").val());
    var result = tspTomL(tspInput);
    $("#tsp-to-ml-output").text(tspInput + " teaspoons (tsp) to " + result + " millileters (mL)");
  });
  $("form#tsp-to-any").submit(function(event) {
    event.preventDefault();
    var tspToMlInput = parseFloat($("#tsp-to-any").val());
    $("#tsp-to-any-output").text(tspToMlInput + " teaspoons (tsp) to " + result + " units");
  });
});
};
