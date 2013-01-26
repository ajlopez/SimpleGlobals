
var simpleglobals = require('..'),
    assert = require('assert');

// Create Database defined

assert.ok(simpleglobals.createDatabase);
assert.equal(typeof simpleglobals.createDatabase, 'function');

// Create database

var db = simpleglobals.createDatabase();

assert.ok(db);

// First node

var customer = db.node('customers');

assert.ok(customer);

// Name node

var name = db.node('customers', 1234, 'name');

assert.ok(name);

// Get value

assert.ok(!name.value());
assert.equal(name.value(), undefined);

// Set and Get value

name.value('Adam');

assert.equal(name.value(), 'Adam');

// Get value

assert.equal(db.node('customers', 1234, 'name').value(), 'Adam');

// Unset value

name.value(null);
assert.equal(db.node('customers', 1234, 'name').value(), undefined);

// Set second customer name

db.node('customers', 1234, 'name').value('Adam');
db.node('customers', 1235, 'name').value('Eve');

// To Object

var obj = db.node('customers').toObject();

assert.ok(obj);
assert.ok(obj[1234]);
assert.ok(obj[1235]);
assert.ok(obj[1234].name);
assert.ok(obj[1235].name);
assert.equal(obj[1234].name, 'Adam');
assert.equal(obj[1235].name, 'Eve');

