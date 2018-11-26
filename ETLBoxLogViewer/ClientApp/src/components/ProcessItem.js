import React, { Component } from 'react';
import { Button, Panel, Glyphicon, Grid, Row, Col } from 'react-bootstrap';
import '../styles/processList.css'
import { ProcessDetails } from './ProcessDetails'
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
        return (
            <div>
                <Panel expanded={this.state.open}>
                    <Panel.Heading>
                        <Panel.Title>
                            <Grid>
                                <Row >
                                    <Col sm={2} > <text>Key: {String(this.props.processObject.loadProcessKey)}</text></Col>
                                    <Col sm={6} > <text>Name: {this.props.processObject.processName}</text></Col>
                                    <Col sm={4} > <text>IsRunning: {this.props.processObject.isRunning ? trueIcon : falseIcon}</text></Col>
                                </Row>
                            </Grid>
                        </Panel.Title>

                        <Grid>
                            <Row>
                                <Col sm={4}>
                                    <Button onClick={() => this.setState({ open: !this.state.open })}>
                                        {this.state.open ?
                                            <text><Glyphicon glyph='chevron-up' />... show less</text> :
                                            <text><Glyphicon glyph='chevron-down' />...show more</text>
                                        }
                                    </Button>
                                </Col>
                                <Col sm={4}></Col>
                                <Col sm={4}>
                                    <LinkContainer to={this.props.routeToDetails}>
                                        <Button>
                                            <text>Show details <Glyphicon glyph='arrow-right' /></text>
                                        </Button>
                                    </LinkContainer>
                                </Col>
                            </Row>
                        </Grid>

                    </Panel.Heading>
                    <Panel.Collapse>
                        <Panel.Body>
                            <ProcessDetails processObject={this.props.processObject} />
                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
            </div>

        );
    }
}
