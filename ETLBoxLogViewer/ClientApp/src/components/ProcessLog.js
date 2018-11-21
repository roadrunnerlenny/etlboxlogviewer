import React, { Component } from 'react';
import { LogHierarchyContainer } from '../containers/LogHierarchyContainer';

export class ProcessLog extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search);
        const loadProcessKey = params.get('loadProcessKey'); 
        this.props.onLoad(loadProcessKey);
    }

    componentWillUnmount() {
        this.props.onUnload();
    }


    render() {       
        if (this.props.processLog) {
            if (this.props.processLog.children) {
                return (
                    <div>
                        <LogHierarchyContainer />
                    </div>
                );
            }
            else {
                return <div>Still loading</div>
            }
        }
        else {
            return (
                <div>
                    Invalid process selected
                </div>
            );
        }
    }
}
