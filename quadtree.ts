class QuadTree {
    private Root: QuadTreeNode;
    private allObjects: Position[];

    public MaxDepth = 9;

    constructor (depth?: number) {
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
    public AddObject(id: string, lon: number, lat: number): void
    {
        this.allObjects.push(new Position(id, lon, lat));
    }

    /**
     * 构建树结构
     */
    public Build(): void {

        this.CreateRootNode();

        this.allObjects.forEach(element => {
            this.Root.AddObject(element);
        });
    }

    /**
     * 查找
     * @param lon 
     * @param lat 
     */
    public Search(lon: number, lat: number): string[] {
        return this.Root.Search(lon, lat);
    }

    private CreateRootNode(): void {
        let west = Number.MAX_VALUE;
        let east = Number.MIN_VALUE;
        let south = Number.MAX_VALUE;
        let north = Number.MIN_VALUE;

        this.allObjects.forEach(element => {
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
    }
}

class Position {
    public id: string;
    public lon: number;
    public lat: number;

    constructor(id: string, lon: number, lat: number) {
        this.id = id;
        this.lon = lon;
        this.lat = lat;
    }
}

class QuadTreeNode
{
    private tree: QuadTree;

    /// <summary>
    /// 当前节点的层级
    /// </summary>
    public Level: number;

    /// <summary>
    /// 节点在当前层的索引
    /// </summary>
    public Index: number;

    public West: number;

    public South: number;

    public East: number;

    public North: number;

    public allObjects: Position[];

    public Children: QuadTreeNode[][];

    constructor(tree: QuadTree, level: number, west: number, south: number, east: number, north: number)
    {
        this.tree = tree;

        this.Level = level;
        this.West = west;
        this.South = south;
        this.East = east;
        this.North = north;

        this.allObjects = [];

        if (level < tree.MaxDepth - 1)
        {
            this.Children = [[],[]];
        }
    }

    public AddObject(obj: Position): void
    {
        if (this.Children === undefined) {
            this.allObjects.push(obj);
        }
        else {
            let x = -1;
            let y = -1;
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
    }

    public Search(lon: number, lat: number): any[] {
        if (lon < this.West || lon > this.East || lat < this.South || lat > this.North) {
            return [];
        }

        let res: Position[] = [];

        if (this.Children === undefined) {
            res = res.concat(this.allObjects);
        }
        else {
            let x = -1;
            let y = -1;
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
    }

    private CreateNewNode(x: number, y: number): QuadTreeNode {
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
    }
}
