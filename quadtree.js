var QuadTree = /** @class */ (function () {
    function QuadTree(depth) {
        this.MaxDepth = 9;
        this.allObjects = [];
        if (depth !== undefined) {
            this.MaxDepth = depth;
        }
    }
    /**
     * 新增对象
     * @param id
     * @param lon
     * @param lat
     */
    QuadTree.prototype.AddObject = function (id, lon, lat) {
        this.allObjects.push(new Position(id, lon, lat));
    };
    /**
     * 构建树结构
     */
    QuadTree.prototype.Build = function () {
        var _this = this;
        this.CreateRootNode();
        this.allObjects.forEach(function (element) {
            _this.Root.AddObject(element);
        });
    };
    /**
     * 查找
     * @param lon
     * @param lat
     */
    QuadTree.prototype.Search = function (lon, lat) {
        return this.Root.Search(lon, lat);
    };
    QuadTree.prototype.CreateRootNode = function () {
        var west = Number.MAX_VALUE;
        var east = Number.MIN_VALUE;
        var south = Number.MAX_VALUE;
        var north = Number.MIN_VALUE;
        this.allObjects.forEach(function (element) {
            if (element.lon < west) {
                west = element.lon;
            }
            if (element.lon > east) {
                east = element.lon;
            }
            if (element.lat < south) {
                south = element.lat;
            }
            if (element.lat > north) {
                north = element.lat;
            }
        });
        this.Root = new QuadTreeNode(this, 0, west, south, east, north);
    };
    return QuadTree;
}());
var Position = /** @class */ (function () {
    function Position(id, lon, lat) {
        this.id = id;
        this.lon = lon;
        this.lat = lat;
    }
    return Position;
}());
var QuadTreeNode = /** @class */ (function () {
    function QuadTreeNode(tree, level, west, south, east, north) {
        this.tree = tree;
        this.Level = level;
        this.West = west;
        this.South = south;
        this.East = east;
        this.North = north;
        this.allObjects = [];
        if (level < tree.MaxDepth - 1) {
            this.Children = [[], []];
        }
    }
    QuadTreeNode.prototype.AddObject = function (obj) {
        if (this.Children === undefined) {
            this.allObjects.push(obj);
        }
        else {
            var x = -1;
            var y = -1;
            var midLon = (this.West + this.East) * 0.5;
            var midLat = (this.North + this.South) * 0.5;
            if (obj.lon < midLon) {
                x = 0;
            }
            else {
                x = 1;
            }
            if (obj.lat < midLat) {
                y = 0;
            }
            else {
                y = 1;
            }
            if (x == -1 || y == -1) {
                this.allObjects.push(obj);
            }
            else {
                var node = this.Children[x][y];
                if (node === undefined) {
                    node = this.CreateNewNode(x, y);
                }
                node.AddObject(obj);
            }
        }
    };
    QuadTreeNode.prototype.Search = function (lon, lat) {
        if (lon < this.West || lon > this.East || lat < this.South || lat > this.North) {
            return [];
        }
        var res = [];
        if (this.Children === undefined) {
            res = res.concat(this.allObjects);
        }
        else {
            var x = -1;
            var y = -1;
            var midLon = (this.West + this.East) * 0.5;
            var midLat = (this.North + this.South) * 0.5;
            if (lon < midLon) {
                x = 0;
            }
            else {
                x = 1;
            }
            if (lat < midLat) {
                y = 0;
            }
            else {
                y = 1;
            }
            if (x == -1 || y == -1) {
                return [];
            }
            else {
                res = res.concat(this.allObjects);
                var node = this.Children[x][y];
                if (node !== undefined) {
                    res = res.concat(node.Search(lon, lat));
                }
            }
        }
        return res;
    };
    QuadTreeNode.prototype.CreateNewNode = function (x, y) {
        if ((x < 0 || x > 1) && (y < 0 || y > 1)) {
            return null;
        }
        var midLon = (this.West + this.East) * 0.5;
        var midLat = (this.North + this.South) * 0.5;
        var west = x == 0 ? this.West : midLon;
        var east = x == 0 ? midLon : this.East;
        var south = y == 0 ? this.South : midLat;
        var north = y == 0 ? midLat : this.North;
        var node = new QuadTreeNode(this.tree, this.Level + 1, west, south, east, north);
        this.Children[x][y] = node;
        return node;
    };
    return QuadTreeNode;
}());
