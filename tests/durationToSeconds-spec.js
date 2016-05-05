var expect = require('chai').expect;
var PrettifyTime = require('../src/PrettifyTime.js');

describe("Convert duration to seconds", function() {

  it("Return undefined if invalid value is entered", function() {
    expect(PrettifyTime.durationToSeconds(200)).to.equal(undefined);
  });

  it("Take in 1h and return 3600s", function() {
    expect(PrettifyTime.durationToSeconds("1h")).to.equal(3600);
  });

  it("Take in 1h 30m and return 5400", function() {
    expect(PrettifyTime.durationToSeconds("1h 30m")).to.equal(5400);
  });

  it("Supports comma fractions take in 1,5h and return 5400", function() {
    expect(PrettifyTime.durationToSeconds("1,5h")).to.equal(5400);
  });

  it("Supports dot fraction take in 1.5h", function() {
    expect(PrettifyTime.durationToSeconds("1.5h")).to.equal(5400);
  });

  it("Default value is hours, 1.5 will return 5400", function() {
    expect(PrettifyTime.durationToSeconds("1.5")).to.equal(5400);
  });

  it(".5h turns into 0.5h", function() {
    expect(PrettifyTime.durationToSeconds(".5h")).to.equal(1800);
  });

  // it("Take in -1h 30m and return -5400s", function() {
    // expect(PrettifyTime.durationToSeconds("-1h 30m")).to.equal(-5400);
  // });

  it("Take in 1h 0m and return 3600s", function() {
    expect(PrettifyTime.durationToSeconds("1h 0m")).to.equal(3600);
  });

});
