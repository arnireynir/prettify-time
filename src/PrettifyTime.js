const PrettifyTime = (
  seconds,
  options = { timeUnit: ["h", "m"], showZeroValues: false }
) => {
  const negative = seconds < 0;
  const { timeUnit, showZeroValues } = options;
  seconds = Math.abs(seconds);

  const units = {
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

export default PrettifyTime;
