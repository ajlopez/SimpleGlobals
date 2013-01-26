
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
    
    this.toObject = function () {
        if (value !== undefined)
            return value;
            
        var obj = undefined;
        
        for (var n in this.nodes) {
            var val = this.nodes[n].toObject();
            
            if (val === undefined)
                continue;
                
            if (obj === undefined)
                obj = {};
                
            obj[n] = val;
        }
            
        return obj;
    }
    
    this.fromObject = function (obj) {
        value = undefined;
        this.values = {};
        
        if (typeof obj === 'object') {
            for (var n in obj) {
                this.node(n).fromObject(obj[n]);
            }
            
            return;
        }
        
        value = obj;
    }
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

