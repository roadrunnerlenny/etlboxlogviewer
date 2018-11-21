import React, { Component } from 'react';
import { Button, Panel, Glyphicon, Grid, Row, Col } from 'react-bootstrap';
import '../styles/processList.css'
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

export class ProcessItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }


    render() {
        const trueIcon = <Glyphicon glyph="ok-circle" />
        const falseIcon = <Glyphicon glyph="remove-circle" />
        const col1Width = 4
        const col2Width = 5
        return (
            <div>
                <Panel expanded={this.state.open}>
                    <Panel.Heading>
                        <Panel.Title>
                            <Grid>
                                <Row >
                                    <Col sm={4} > <text>Key: {String(this.props.loadProcessKey)}</text></Col>
                                    <Col sm={4} > <text>Name: {this.props.processName}</text></Col>
                                    <Col sm={4} > <text>IsRunning: {this.props.isRunning ? trueIcon : falseIcon}</text></Col>
                                </Row>
                            </Grid>
                        </Panel.Title>
                        
                            <Grid>
                                <Row>
                                    <Col sm={4}>
                                        <Button onClick={() => this.setState({ open: !this.state.open })}>                                     
                            {this.state.open ?
                                <text className="expandbutton"><Glyphicon glyph='collapse-up' />... show less</text> :
                                <text className="expandbutton"><Glyphicon glyph='collapse-down' />...show more</text>
                                        }
                                    </Button>
                                    </Col>
                                <Col sm={7}>
                                    <LinkContainer to={this.props.routeToDetails}>
                                        <Button>
                                        Show details
                                        </Button>
                                    </LinkContainer>
                                    </Col>
                                </Row>
                            </Grid>
                        
                    </Panel.Heading>
                    <Panel.Collapse>
                        <Panel.Body>
                            <Grid className="processinformation">
                                <Row>
                                    <Col sm={col1Width}>Load Process Key:</Col>
                                    <Col sm={col2Width}>{this.props.loadProcessKey}</Col>
                                </Row>
                                <Row>
                                    <Col sm={col1Width}>Process Name:</Col>
                                    <Col sm={col2Width}>{this.props.processName}</Col>
                                </Row>
                                <Row>
                                    <Col sm={col1Width}>Still running:</Col>
                                    <Col sm={col2Width}>{this.props.isRunning ? trueIcon : falseIcon}</Col>
                                </Row>
                                <Row>
                                    <Col sm={col1Width}>Start Date:</Col>
                                    <Col sm={col2Width}>{this.props.startDate}</Col>
                                </Row>
                                <Row>
                                    <Col sm={col1Width}>Transfer Completed Date:</Col>
                                    <Col sm={col2Width}>{this.props.transferCompletedDate}</Col>
                                </Row>
                                <Row>
                                    <Col sm={col1Width}>End Date:</Col>
                                    <Col sm={col2Width}>{this.props.endDate}</Col>
                                </Row>
                                <Row>
                                    <Col sm={col1Width}>Start Message:</Col>
                                    <Col sm={col2Width}>{this.props.startMessage}</Col>
                                </Row>
                                <Row>
                                    <Col sm={col1Width}>End Message:</Col>
                                    <Col sm={col2Width}>{this.props.endMessage}</Col>
                                </Row>
                                <Row>
                                    <Col sm={col1Width}>Was successful:</Col>
                                    <Col sm={col2Width}>{this.props.wasSuccessful ? trueIcon : falseIcon}</Col>
                                </Row>
                                <Row>
                                    <Col sm={col1Width}>Was aborted:</Col>
                                    <Col sm={col2Width}>{this.props.wasAborted ? trueIcon : falseIcon}</Col>
                                </Row>
                                <Row>
                                    <Col sm={col1Width}>Is Finished:</Col>
                                    <Col sm={col2Width}>{this.props.isFinished ? trueIcon : falseIcon}</Col>
                                </Row>
                                <Row>
                                    <Col sm={col1Width}>Is Transfer Completed:</Col>
                                    <Col sm={col2Width}>{this.props.isTransferCompleted ? trueIcon : falseIcon}</Col>
                                </Row>
                            </Grid>
                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
            </div>

        );
    }
}
