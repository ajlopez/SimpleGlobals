# SimpleGlobals

Simple Globals implementation, inspired by Mumps Globals.

## Installation

Via npm on Node:

```
npm install simpleglobals
```


## Usage

Reference in your program:

```js
var simpleglobals = require('simpleglobals');
```

Create a database:

```js
var db = simpleglobals.createDatabase();
```

Get a node:
```js
var customer = db.node('customers', 1234);
```

Set and get a value:
```js
db.node('customers', 1234, 'name').value('Adam');
var name = db.node('customers', 1234, 'name').value();
```

Alternatively, you can use a node:
```js
var adam = db.node('customers', 1234);
adam.node('name').value('Adam');
var name = adam.node('name').value();
```

A node can be converted to a plain JavaScript object:
```js
db.node('customers', 1234, 'name').value('Adam');
db.node('customers', 1234, 'age').value(800);

var obj = db.node('customers', 1234).toObject();
// obj is { name : 'Adam', age: 800 }
```

A node can be defined from a plain JavaScript object:
```js
db.node('customers', 1235).fromObject( { name: 'Eve', age: 700 });
```

## Development

```
git clone git://github.com/ajlopez/SimpleGlobals.git
cd SimpleGlobals
npm install
npm test
```

## Samples

TBD

## To do

- Persistence
- Samples

The current implementation is a naive one, all in-memory. It should be refactored to have a persistence store,
using a database, file system, o NoSQL provider.

## References

- [A Universal NoSQL Engine, Using a Tried and Tested Technology](http://www.mgateway.com/docs/universalNoSQL.pdf).
- [Extreme Database programming with MUMPS Globals, Chapter 1](http://gradvs1.mgateway.com/download/extreme1.pdf).
- [Healthcare needs the help of the Node.js Community](http://robtweed.wordpress.com/2013/01/26/to-the-node-js-community-healthcare-needs-your-help/).
- [A Phoenix rises](http://robtweed.wordpress.com/2013/01/24/a-phoenix-rises/).

## More mature modules

- [ewdGateway2](https://github.com/robtweed/ewdGateway2): Node.js-based EWD Gateway for GT.M & Cache.
- [NodeM](https://github.com/dlwicksell/nodem): A Node.js binding to the GT.M language and database.

## Inception

This module was inspired by the discussion [Healthcare needs the help of the Node.js Community](https://mail.google.com/mail/#inbox/13c76a2c55670604) at
Node.js mailing list, triggered by [@rtweed](https://twitter.com/rtweed).

## Versions

- 0.0.1: Published.

## Contribution

Feel free to [file issues](https://github.com/ajlopez/SimpleGlobals) and submit
[pull requests](https://github.com/ajlopez/SimpleGlobals/pulls) — contributions are
welcome.

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.

