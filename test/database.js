
var simpleglobals = require('..'),
    assert = require('assert');

// Create Database defined

assert.ok(simpleglobals.createDatabase);
assert.equal(typeof simpleglobals.createDatabase, 'function');

