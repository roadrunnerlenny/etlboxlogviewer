import * as d3 from 'd3';

//const totalwidth = 900;
const shiftright = 30;
const barheight = 20;
const minHeight = 100;

export class IndentedTree {
    constructor(processLog, node) {
        this.processLog = processLog;
        this.svgNode = node;
        this.id = 0;
        this.hier = null;
        this.svg = null;
        this.nodes = null;
    }

    paintHierarchy() {
        this.init();
        this.calculateLevelForParentNodes();
        //this.collapseAllInHierarchy();
        this.updateHierarchy();
    }

    init() {
        this.hier = d3.hierarchy(this.processLog);

        var maxHeight = Math.max(minHeight, this.hier.descendants().length * barheight);

        this.svg = d3.select(this.svgNode)
            .attr("height", maxHeight)            
            //.attr("width", totalWidth);
            .attr("width", "100%");

    }

    calculateLevelForParentNodes() {
        const possibleLevel = ['warn', 'error'];
        this.hier.eachAfter(function (d) {
            if (d.data.level != null) d.data.level = d.data.level.toLowerCase();
            if (d.data.level != null && possibleLevel.includes(d.data.level)) {
                d.level = d.data.level;
                if (d.parent != null) {
                    if (d.parent.level != null && d.data.level === 'error' && d.parent.level !== 'error')
                        d.parent.level = d.data.level;
                    else if (d.parent.level == null)
                        d.parent.level = d.data.level;
                }
            }
            else if (d.parent != null && d.level != null && possibleLevel.includes(d.level)) {
                d.parent.level = d.level;
            }
        });
    }


    collapseAllInHierarchy() {
        this.hier.eachAfter(function (d) {
            if (d.children) {
                d._children = d.children;
                d.children = null;
            }
        });
    }

    expandAllInHierarchy() {
        this.hier.eachBefore(function (d) {
            if (d._children) {
                d.children = d._children;
                d._children = null;
            }
        });
    }

    updateHierarchy() {
        this.nodes = this.getNodesWithID();
        this.calculateBaseFieldsOnHierarchy();
        this.enter();
        this.exit();
        this.update();
    }

    getNodesWithID(nodes) {
        return this.svg.selectAll(".node")
            .data(this.hier.descendants(), function (d) {
                return d.id || (d.id = ++this.id);
            });
    }

    calculateBaseFieldsOnHierarchy() {
        var index = 0;

        function calculateChildrenCount(d) {
            if (d.children != null) d.childrencount = d.children.length;
            else if (d._children != null) d.childrencount = d._children.length;
            else d.childrencount = 0;
        }

        function calculateCoordinates(d) {
            d.x = d.depth * shiftright;
            d.y = d.index * barheight;
            //d.width = totalwidth - (d.depth * shiftright) + d.index;
            d.height = barheight;
        }

        this.hier.eachBefore(function (d) {
            d.index = index++;
            calculateChildrenCount(d);
            calculateCoordinates(d);
        });

    }

    enter() {
        let nodeenter = this.nodes.enter().append("g")
            .attr("class", "node")
            .attr("transform", function (d) {
                return "translate(" + d.x + "," + d.y + ")";
            })
            .style("opacity", 0.5);


        nodeenter.append("rect")
            .attr("height", function (d) {
                return d.height;
            })
            .attr("width", function (d) {
                return '100%';
                //return d.width;
            })
            .attr("class", function (d) {
                let result = "leaf";
                if (d.childrencount > 0)
                    result = "branch";
                if (d.level != null && (d.level.toLowerCase() === "warn" || d.level.toLowerCase() === "error"))
                    result += d.level.toLowerCase();
                return result;
            })
            .on("click", this.click())

            ;

        nodeenter.append("text")
            .attr("dx", 7)
            .attr("dy", 15)
            .text(function (d) {
                return "#" + d.data.logKey
                    + " | " + d.data.taskType
                    + " | " + d.data.stage
                    + " | " + d.data.level
                    + " | " + d.data.message
                    + " | " + d.data.startDate
                    //+ " | " + calcDuration(d.data.startDate, d.data.endDate)
                    + (d.childrencount > 0 ? " | " + d.childrencount + " more..." : "");
            })
            ;


        nodeenter.transition()
            .duration(700)
            .style("opacity", 1)
    }

    exit() {
        this.nodes.exit()
            .transition()
            .duration(400)
            .style("opacity", 0)
            .remove();
    }

    update() {
        this.nodes.attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")";
        });
    }


    click() {
        var self = this;
        return function (d) {
            self.toggleChildren(d);
            self.updateHierarchy();
        }
    }

    toggleChildren(d) {
        if (d.children) {
            d._children = d.children;
            d.children = null;
        } else {
            d.children = d._children;
            d._children = null;
        }
    }
}
