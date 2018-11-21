import { combineReducers } from 'redux';
import { processList } from './processList/state'
import { processLog } from './processLog/state'
import { logHierarchy } from './logHierarchy/state'

export const combinedReducers = combineReducers({
    processList,
    processLog,
    logHierarchy
});


