import { receiveProcessList, requestProcessList } from "./actions";

let timer = null;

export function fetchProcessList(dispatch) {
    return function () {
        dispatch(requestProcessList());
        fetch(`api/DemoProcess/GetStaticDemoProcessList`)
            .then(res => res.json())
            .then(jsonString => {
                const processList = JSON.parse(jsonString);
                dispatch(receiveProcessList(processList));
            })
    }
}

export function fetchProcessListPeriodically() {
    return function (dispatch) {
        fetchProcessList(dispatch)();
        if (timer) clearInterval(timer);
        timer = setInterval(fetchProcessList(dispatch), 5000);
    }
}

export function stopFetchingProcessListPeriodically() {
    return function (dispatch) {
        clearInterval(timer);
    }
}





