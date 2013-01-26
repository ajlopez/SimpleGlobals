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

- Samples

## Contribution

Feel free to [file issues](https://github.com/ajlopez/SimpleGlobals) and submit
[pull requests](https://github.com/ajlopez/SimpleGlobals/pulls) — contributions are
welcome.

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.

