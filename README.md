# prettify-time

[![NPM](https://nodei.co/npm/prettify-time.png)](https://nodei.co/npm/prettify-time/)

## Description

Converts seconds into human readable text.
PrettifyTime(3600) // Returns "1h"

## Install

    npm i prettify-time

## API

    PrettifyTime(seconds: number, options: object);

    options:
        units: Array containing any of these options ['d','h','m', 's']. Default is ['h','m']
        showZeroValues: boolean // Default false

    return value:
        string
