"use strict";

exports.__esModule = true;
var PrettifyTime = function PrettifyTime(seconds) {
  var options =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : { timeUnit: ["h", "m"], showZeroValues: false };

  var negative = seconds < 0;
  var timeUnit = options.timeUnit,
    showZeroValues = options.showZeroValues;

  seconds = Math.abs(seconds);

  var units = {
    d: 86400,
    h: 3600,
    m: 60,
    s: 1
  };

  var duration = [];
  for (var i = 0, len = timeUnit.length; i < len; i++) {
    var value = Math.floor(seconds / units[timeUnit[i]]);
    if (value || showZeroValues) {
      duration.push(value + timeUnit[i]);
    }
    seconds = seconds % units[timeUnit[i]];
  }

  return (negative ? "-" : "") + duration.join(" ") || "0h";
};

exports.default = PrettifyTime;
