
function Node(name, parent) {
    this.nodes = {};
    var value = undefined;
    
    this.value = function (newvalue) {
        if (newvalue === undefined)
            return value;
            
        value = newvalue;
        
        return value;
    };
}

Node.prototype.node = function () {
    var node = this;
    var args = [];
    
    for (var n in arguments)
        args.push(arguments[n]);
    
    while (args.length) {
        var name = args.shift();
        if (node.nodes[name] !== undefined)
            node = node.nodes[name];
        else
            node = node.nodes[name] = new Node(name, node);
    }
    
    return node;
};

exports.createDatabase = function () {
	return new Node();
};

