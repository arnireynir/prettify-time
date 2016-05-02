# prettify-time
[ ![Codeship Status for arnireynir/prettify-time](https://codeship.com/projects/fcf26af0-f28d-0133-1d88-521033f49c46/status?branch=master)](https://codeship.com/projects/149505)
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

    
