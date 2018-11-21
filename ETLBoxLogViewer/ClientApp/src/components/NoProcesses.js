import React from 'react';
import { Alert } from 'react-bootstrap';


export function NoProcesses(props) {
    return (
        <Alert bsStyle="info">No process found! No ETL job run in the selected database.</Alert>
    );
}
