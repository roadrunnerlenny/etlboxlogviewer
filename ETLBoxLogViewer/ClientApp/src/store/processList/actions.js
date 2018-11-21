///* action types */
//export const SHOW_DETAILS = 'SHOW_DETAILS'
//export const REQUEST_PROCESSDETAILS = 'REQUEST_PROCESSDETAILS'
//export const RECEIVE_PROCESSDETAILS = 'RECEIVE_PROCESSDETAILS'
//export const REQUEST_EXPAND_HIERARCHY = 'REQUEST_EXPAND_HIERARCHY'
//export const REQUEST_COLLAPSE_HIERARCHY = 'REQUEST_COLLAPSE_HIERARCHY'
//export const EXPANDCOLLAPSE_DONE = 'EXPORTCOLLAPSE_DONE'
//export const CLEAR_PROCESSDETAILS = 'CLEAR_PROCESSDETAILS'
///* action creators */

//export function showDetails(loadProcessKey) {
//    return { type: SHOW_DETAILS, loadProcessKey }
//}

//export function requestExpandProcessHierarchy() {
//    return { type: REQUEST_EXPAND_HIERARCHY }
//}

//export function requestCollapseProcessHierarchy() {
//    return { type: REQUEST_COLLAPSE_HIERARCHY }
//}

//export function collapseExpandDone() {
//    return { type: EXPANDCOLLAPSE_DONE }
//}

export const REQUEST_PROCESSLIST = 'REQUEST_PROCESSLIST'
export const RECEIVE_PROCESSLIST = 'RECEIVE_PROCESSLIST'

export function requestProcesslist(max) {
    return { type: REQUEST_PROCESSLIST, max }
}

export function receiveProcessList(processList) {
    return {
        type: RECEIVE_PROCESSLIST,
        processList: processList,
        receivedAt: Date.now()
    }
}

//export function requestProcessDetails(loadProcessKey) {
//    return { type: REQUEST_PROCESSDETAILS, loadProcessKey }
//}

//export function receiveProcessDetails(data) {
//    return {
//        type: RECEIVE_PROCESSDETAILS,
//        processDetails: data,
//        receivedAt: Date.now()
//    }
//}

//export function clearProcessDetails() {
//    return { type: CLEAR_PROCESSDETAILS }
//}
