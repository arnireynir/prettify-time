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
  },

  durationToSeconds: function(duration) {
        if (typeof duration !== 'string' || duration === '') {
            return undefined;
        }

        duration = duration.toString().trim().toLowerCase().replace(',','.');
        if(duration.charAt(0) === ".") {
          duration = "0" + duration;
        }

        var unitsMap = {
            m: 60,
            h: 3600
        };
        
        var seconds = 0;
        var defaultUnit = 'h';
        var unit;
        duration = duration.replace(/([a-z])([0-9]+[a-z])/g, '$1 $2');
        duration.split(' ').forEach(function (value) {
            unit = value.slice(-1);
            if (!(unit in unitsMap)) {
                unit = defaultUnit;
            }
            seconds += value.replace(unit, '') * unitsMap[unit];
        });

        return seconds;
    },

}

module.exports = PrettifyTime;
