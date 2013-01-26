
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

var name = db.node('customer', 1234, 'name');

assert.ok(name);

// Get value

assert.ok(!name.value());
assert.equal(name.value(), undefined);

// Set and Get value

name.value('Adam');

assert.equal(name.value(), 'Adam');

// Get value

assert.equal(db.node('customer', 1234, 'name').value(), 'Adam');

// Unset value

name.value(null);
assert.equal(db.node('customer', 1234, 'name').value(), undefined);

