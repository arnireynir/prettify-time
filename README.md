# prettify-time

[![NPM](https://nodei.co/npm/prettify-time.png)](https://nodei.co/npm/prettify-time/)

## Playground

[![Edit 1y5jqxznoq](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/1y5jqxznoq)

## Description

Converts seconds into human readable text.

## Install

    npm i prettify-time

## API

    PrettifyTime(seconds: number, options: object);

    options:
        units: Array containing any of these options ['d','h','m', 's']. Default is ['h','m']
        showZeroValues: boolean // Default false

    return value:
        string
