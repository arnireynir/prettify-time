# prettify-time
[ ![Codeship Status for arnireynir/prettify-time](https://codeship.com/projects/fcf26af0-f28d-0133-1d88-521033f49c46/status?branch=master)](https://codeship.com/projects/149505)
[![coverage](https://codecov.io/gh/arnireynir/prettify-time/branch/version2/graph/badge.svg)](https://codecov.io/gh/arnireynir/prettify-time)


[![NPM](https://nodei.co/npm/prettify-time.png)](https://nodei.co/npm/prettify-time/)

## Description
 Converts seconds into human readable text and back.
     PrettifyTime.secondsToDuration(3600) // Returns "1h"
     PrettifyTime.durationToSeconds("1h 30m") // Return 3600
 ...more to come

## Install
    npm i prettify-time

## API
    PrettifyTime
        .secondsToDuration(seconds, units, displayZeroValues);

            Type:
                seconds: number,
                units: Array containing any of these options ['h','m', 's']. Default is ['h','m']
                displayZeroValues: boolean // Default false

        .durationToSeconds(time);

            Type:
                time: string,

        returns
            {
                "h":number,
                "m":number,
                "s":number,
                totalTime: string,
                totalSeconds: number
            }

## Examples
    // ES6
    import PrettifyTime from 'prettify-time';

    var PrettifyTime = require('prettify-time');

    PrettifyTime.secondsToDuration(3600).totalTime; // Returns "1h"
    PrettifyTime.secondsToDuration(3600, ['h','m','s'], true).totalTime; // Returns "1h 0m 0s"
    PrettifyTime.secondsToDuration(3600, ['h','m','s']).totalTime; // Returns "1h"
    PrettifyTime.secondsToDuration(-3600).totalTime; // Returns "-1h"


    PrettifyTime.durationToSeconds("1h").totalSeconds; // Returns "3600"
    PrettifyTime.durationToSeconds("1h 30m").totalSeconds; // Returns "5400"
    PrettifyTime.durationToSeconds("1h 30m").h; // Returns "1"
    PrettifyTime.durationToSeconds(-1h).totalSeconds; // Returns "-3600"


    For more examples you look at the tests.
