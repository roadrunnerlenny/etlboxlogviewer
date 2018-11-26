import React, { Component } from 'react';
import { Glyphicon, Grid, Row, Col } from 'react-bootstrap';
import '../styles/processList.css'


export class ProcessDetails extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const trueIcon = <Glyphicon glyph="ok-circle" />
        const falseIcon = <Glyphicon glyph="remove-circle" />
        const col1Width = 3
        const col2Width = 5
        return (
            <Grid className="processinformation">
                <Row>
                    <Col sm={col1Width}>Load Process Key:</Col>
                    <Col sm={col2Width}>{this.props.processObject.loadProcessKey}</Col>
                </Row>
                <Row>
                    <Col sm={col1Width}>Process Name:</Col>
                    <Col sm={col2Width}>{this.props.processObject.processName}</Col>
                </Row>
                <Row>
                    <Col sm={col1Width}>Still running:</Col>
                    <Col sm={col2Width}>{this.props.processObject.isRunning ? trueIcon : falseIcon}</Col>
                </Row>
                <Row>
                    <Col sm={col1Width}>Start Date:</Col>
                    <Col sm={col2Width}>{this.props.processObject.startDate}</Col>
                </Row>
                <Row>
                    <Col sm={col1Width}>Transfer Completed Date:</Col>
                    <Col sm={col2Width}>{this.props.processObject.transferCompletedDate}</Col>
                </Row>
                <Row>
                    <Col sm={col1Width}>End Date:</Col>
                    <Col sm={col2Width}>{this.props.processObject.endDate}</Col>
                </Row>
                <Row>
                    <Col sm={col1Width}>Start Message:</Col>
                    <Col sm={col2Width}>{this.props.processObject.startMessage}</Col>
                </Row>
                <Row>
                    <Col sm={col1Width}>End Message:</Col>
                    <Col sm={col2Width}>{this.props.processObject.endMessage}</Col>
                </Row>
                <Row>
                    <Col sm={col1Width}>Was successful:</Col>
                    <Col sm={col2Width}>{this.props.processObject.wasSuccessful ? trueIcon : falseIcon}</Col>
                </Row>
                <Row>
                    <Col sm={col1Width}>Was aborted:</Col>
                    <Col sm={col2Width}>{this.props.processObject.wasAborted ? trueIcon : falseIcon}</Col>
                </Row>
                <Row>
                    <Col sm={col1Width}>Is Finished:</Col>
                    <Col sm={col2Width}>{this.props.processObject.isFinished ? trueIcon : falseIcon}</Col>
                </Row>
                <Row>
                    <Col sm={col1Width}>Is Transfer Completed:</Col>
                    <Col sm={col2Width}>{this.props.processObject.isTransferCompleted ? trueIcon : falseIcon}</Col>
                </Row>
            </Grid>


        );
    }
}
