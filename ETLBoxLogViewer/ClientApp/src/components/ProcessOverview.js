import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, { Component } from 'react';
import { ProcessItem } from './ProcessItem'
import { NoProcesses } from "./NoProcesses";
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
        this.props.onRefresh();
    }

    componentWillUnmount() {

    }

    render() {
        const processList = this.props.processList.sort((a, b) => a.loadProcessKey < b.loadProcessKey);
        const items = processList.map((process) => (
            <Fade key={process.loadProcessKey}>            
                <ProcessItem key={process.loadProcessKey}
                    loadProcessKey={process.loadProcessKey}
                    processName={process.processName}
                    startDate={process.startDate}
                    transferCompletedDate={process.transferCompletedDate}
                    endDate={process.endDate}
                    startMessage={process.startMessage}
                    isRunning={process.isRunning}
                    endMessage={process.endMessage}
                    wasSuccessful={process.wasSuccessful}
                    wasAborted={process.wasAborted}
                    isFinished={process.isFinished}
                    isTransferCompleted={process.isTransferCompleted}
                    routeToDetails={'/log/?loadProcessKey=' + process.loadProcessKey}
                    />                    
            </Fade>
        ))
        if (processList && processList.length > 0) {
            return (
                <TransitionGroup>
                    {items}
                </TransitionGroup>
            );
        } else {
            return (
                <NoProcesses />
            );
        }

    }

}

