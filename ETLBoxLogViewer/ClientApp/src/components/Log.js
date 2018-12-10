import React, { Component } from 'react';
import { PageHeader, Button, ButtonGroup } from 'react-bootstrap';
import { LogHierarchyContainer } from '../containers/LogHierarchyContainer';
import '../styles/log.css'


export class Log extends Component {
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
                        <PageHeader>
                            Details for Load Process 
                        </PageHeader>

                        <ButtonGroup className="collapseExpandGroup">
                            <Button onClick={() => this.props.onCollapse()}>Collapse all</Button>
                            <Button onClick={() => this.props.onExpand()}>Expand all</Button>
                        </ButtonGroup>
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
