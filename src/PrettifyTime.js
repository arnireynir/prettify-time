var PrettifyTime = {
  duration: function (seconds, timeUnits, displayZeroValues) {
    if (isNaN(seconds)) {
      return undefined;
    }

    var negative = seconds < 0;
    seconds = Math.abs(seconds);

    var duration = [];

    if(!timeUnits) {
      timeUnits = ['h', 'm'];
    }

    var units = [
      {unit: 'h', seconds: 3600},
      {unit: 'm', seconds: 60},
      {unit: 's', seconds: 1}
    ];

    var selectedUnits = [];
    timeUnits.forEach(function(timeUnit) {
      units.map(function(unit) {
        if(timeUnit === unit.unit) {
          selectedUnits.push(unit);
        }
      })

    })

    selectedUnits.forEach(function (unit) {
      var value = Math.floor(seconds/unit.seconds);
      if (value || displayZeroValues) {
        duration.push(value + unit.unit);
      }
      seconds = seconds % unit.seconds;
    });
    return (negative ? '-' : '') + duration.join(' ') || '0h';
  }
}

module.exports = PrettifyTime;
