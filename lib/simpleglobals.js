
function Node(name, parent) {
    this.nodes = {};
    var value = undefined;
    
    this.value = function (newvalue) {
        if (newvalue === undefined)
            return value;
            
        value = newvalue;
            
        if (value === null)
            delete parent.nodes[name];
        
        return value;
    };
}

Node.prototype.node = function () {
    var node = this;
    var args = [];
    var l = arguments.length;
    
    for (var k = 0; k < l; k++) {
        var name = arguments[k];
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

