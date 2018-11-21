import React, { Component } from 'react';
import { IndentedTree } from "../hierarchy/IndentedTree";
import '../styles/logHierarchy.css'

export class LogHierarchy extends Component {
    constructor(props) {
        super(props);
        this.indentedTree = null;
    }

    componentDidMount() {
        this.indentedTree = new IndentedTree(this.props.processLog, this.svgNode);
        this.indentedTree.paintHierarchy();

    }

    componentDidUpdate() {
        if (this.props.processLog != null && this.props.processLog.isCompleted == false) {
            this.indentedTree.processLog = this.props.processLog;
            this.indentedTree.paintHierarchy();
        }
        else if (this.props.requestCollapse || this.props.requestExpand) {
            if (this.props.requestCollapse)
                this.indentedTree.collapseAllInHierarchy();
            else if (this.props.requestExpand)
                this.indentedTree.expandAllInHierarchy();
            this.indentedTree.updateHierarchy();
            this.props.onCollapseExpandDone();
        }


    }

    render() {
        return (
            <svg ref={node => this.svgNode = node} />
        );
    }
}
