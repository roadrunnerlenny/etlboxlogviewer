import {
    REQUEST_EXPAND_HIERARCHY, REQUEST_COLLAPSE_HIERARCHY, EXPANDCOLLAPSE_DONE
} from "./actions";

export const logHierarchy = (state = {
    requestCollapseHierarchy: false,
    requestExpandHierarchy: false,    
}, action) => {
    switch (action.type) {      
        case REQUEST_EXPAND_HIERARCHY:
            return Object.assign({}, state, {
                requestExpandHierarchy: true
            });
        case REQUEST_COLLAPSE_HIERARCHY:
            return Object.assign({}, state, {
                requestCollapseHierarchy: true
            });
        case EXPANDCOLLAPSE_DONE:
            return Object.assign({}, state, {
                requestCollapseHierarchy: false,
                requestExpandHierarchy: false
            });
        default:
            return state;
    }
}

