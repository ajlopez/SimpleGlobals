
var simpleglobals = require('..'),
    assert = require('assert');

// Create Database defined

assert.ok(simpleglobals.createDatabase);
assert.equal(typeof simpleglobals.createDatabase, 'function');

// Create database

var db = simpleglobals.createDatabase();

assert.ok(db);

// First node

var customer = db.node('customer');

assert.ok(customer);

// Name node

var name = db.node('customer', 'name');

assert.ok(name);

// Get value

assert.ok(!name.value());

// Set and Get value

name.value('Adam');

assert.equal(name.value(), 'Adam');

