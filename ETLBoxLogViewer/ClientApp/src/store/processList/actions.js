export const REQUEST_PROCESSLIST = 'REQUEST_PROCESSLIST'
export const RECEIVE_PROCESSLIST = 'RECEIVE_PROCESSLIST'

export function requestProcessList(max) {
    return { type: REQUEST_PROCESSLIST, max }
}

export function receiveProcessList(processList) {
    return {
        type: RECEIVE_PROCESSLIST,
        processList: processList,
        receivedAt: Date.now()
    }
}
