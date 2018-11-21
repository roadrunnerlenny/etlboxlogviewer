import { RECEIVE_PROCESSLOG, REQUEST_PROCESSLOG, CLEAR_PROCESSLOG } from "./actions";

export function processLog(state = {    
    selectLoadProcessKey : 0 
}, action) {
    switch (action.type) {     
        case REQUEST_PROCESSLOG:
            return state;
        case RECEIVE_PROCESSLOG:
            return Object.assign({}, action.processLog);
        case CLEAR_PROCESSLOG:
            return {};
        default:
            return state
    }
}

