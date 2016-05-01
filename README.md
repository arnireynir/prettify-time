# prettify-time

Turns seconds into human readable text. 

## Install
    npm i prettify-time
    
## Usages
    Type:
      seconds: number,
      units: array
      displayZeroValues: boolean
    
    Values:
      units: Array containg any of these options ['h','m', 's']. Default is ['h','m']
      displayZeroValues: Default is false.
    
    PrettifyTime.duration(seconds, units, displayZeroValues);

## Examples
    // ES6
    import PrettifyTime from 'prettify-time';
    // Require
    var PrettifyTime = require('prettify-time');
    
    PrettifyTime.duration(3600); // Returns "1h"
    PrettifyTime.duration(3600, ['h','m','s'], true); // Returns "1h 0m 0s"
    PrettifyTime.duration(-3600); // Returns "-1h"
    
    
    For more examples you look at the tests.

    
