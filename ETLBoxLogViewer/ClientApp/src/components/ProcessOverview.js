import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, { Component } from 'react';
import { ProcessItem } from './ProcessItem'
import { NoProcesses } from "./NoProcesses";
import { PageHeader } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Fade = ({ children, ...props }) => (
    <CSSTransition
        {...props}
        timeout={1000}
        classNames="fade">
        {children}
    </CSSTransition>
);


export class ProcessOverview extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onLoad();
    }

    componentWillUnmount() {
        this.props.onUnload();
    }

    render() {
        const processList = this.props.processList.sort((a, b) =>
            (a.loadProcessKey < b.loadProcessKey) ? 1 : -1);
        const show = true;
        const items = processList.map((process) => (
            <Fade key={process.loadProcessKey} in={show}>            
                <ProcessItem key={process.loadProcessKey}
                    processObject={process}
                    routeToDetails={'/log/?loadProcessKey=' + process.loadProcessKey}
                    />                    
            </Fade>
        ))
        if (processList && processList.length > 0) {
            return (
                <div>
                <PageHeader>All Processes in Database</PageHeader>
                <TransitionGroup>
                    {items}
                    </TransitionGroup>
                </div>
                    
            );
        } else {
            return (
                <NoProcesses />
            );
        }

    }

}

