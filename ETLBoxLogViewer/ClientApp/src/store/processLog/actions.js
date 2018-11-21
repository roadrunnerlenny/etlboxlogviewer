export const REQUEST_PROCESSLOG = 'REQUEST_PROCESSDETAILS'
export const RECEIVE_PROCESSLOG = 'RECEIVE_PROCESSDETAILS'
export const CLEAR_PROCESSLOG = 'CLEAR_PROCESSDETAILS'


export function requestProcessLog(loadProcessKey) {
    return { type: REQUEST_PROCESSLOG, loadProcessKey }
}

export function receiveProcessLog(data) {
    return {
        type: RECEIVE_PROCESSLOG,
        processLog: data,
        receivedAt: Date.now()
    }
}

export function clearProcessLog() {
    return { type: CLEAR_PROCESSLOG }
}
