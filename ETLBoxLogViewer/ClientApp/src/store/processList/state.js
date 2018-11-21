import { RECEIVE_PROCESSLIST, REQUEST_PROCESSLIST } from "./actions";

export function processList(state = [], action) {
    switch (action.type) {
        case REQUEST_PROCESSLIST:
            return state;
        case RECEIVE_PROCESSLIST:
            return Object.assign([], action.processList);
        default:
            return state
    }
}



