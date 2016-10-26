var timeObject = {
    "h":0,
    "m":0,
    "s":0,
    totalTime: undefined,
    totalSeconds: undefined
}

var extract = function(duration) {
      var result = timeObject;

      if(duration) {
        var stringDuration = duration.join(' ');
        var arr = stringDuration.match(/([0-9]+[a-z])/gm);

        if (arr !== null) {
          arr.forEach(function(item) {
            var unit = item.slice(-1);
            var value = item.slice(0,-1)
            result[unit] = value;
          });
        }
      }
      return result
}

var PrettifyTime = {
  secondsToDuration: function (seconds, timeUnits, displayZeroValues) {

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

    var time = extract(duration);
    time.totalTime = (negative ? '-' : '') + duration.join(' ') || '0h';
    return time;
  },

  durationToSeconds: function(duration) {
        if (typeof duration !== 'string' || duration === '') {
          return timeObject;
        }

        duration = duration.toString().trim().toLowerCase().replace(',','.');

        var isNegative = /-/.test(duration);
        if(isNegative) {
            duration = duration.replace(/-/g,'');
        }
        
        if(duration.charAt(0) === ".") {
          duration = "0" + duration;
        }

        var unitsMap = {
            s: 1,
            m: 60,
            h: 3600
        };

        var seconds = 0;
        var defaultUnit = 'h';
        var unit;

        duration = duration.replace(/([a-z])([0-9]+[a-z])/g, '$1 $2 $3');
        duration.split(' ').forEach(function (value) {
            unit = value.slice(-1);
            if (!(unit in unitsMap)) {
                unit = defaultUnit;
            }
            seconds += value.replace(unit, '') * unitsMap[unit];
        });

        var time = this.secondsToDuration(seconds);
        time.totalSeconds = isNegative ? -seconds : seconds;
        return time;

    },

}

module.exports = PrettifyTime;
