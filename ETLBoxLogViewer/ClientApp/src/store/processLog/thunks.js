import {
    receiveProcessLog, requestProcessLog, clearProcessLog
} from "./actions";


let timer = null;

export function fetchProcessLog(dispatch, getState, loadProcessKey) {
    return function () {
        const lpk = loadProcessKey;//getState().displayStatus.selectedLoadProcessKey;
        dispatch(requestProcessLog());
        fetch(`api/DemoLog/GetStaticDemoLog/${lpk}.json`)
            .then(res => res.json())
            .then(jsonString => dispatch(receiveProcessLog(JSON.parse(jsonString))))
    }
}


export function fetchProcessLogPeriodically(loadProcessKey) {
    return function (dispatch, getState) {
        fetchProcessLog(dispatch, getState, loadProcessKey)();
        if (timer) clearInterval(timer);
        timer = setInterval(fetchProcessLog(dispatch, getState, loadProcessKey), 5000);
    }
}


export function stopFetchingProcessLogPeriodically() {
    return function (dispatch) {
        clearInterval(timer);
        dispatch(clearProcessLog());
    }
}




