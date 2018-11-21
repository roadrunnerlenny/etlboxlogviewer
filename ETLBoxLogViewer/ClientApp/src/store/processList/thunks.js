//import {
//    clearProcessDetails, receiveProcessDetails, receiveProcessList, requestProcessDetails,
//    requestProcesslist
//} from "./actions";
import { receiveProcessList, requestProcesslist } from "./actions";

//let timerList = null;
//let i = 0;

export function fetchProcessList() {
    return function (dispatch) {
        dispatch(requestProcesslist());
        fetch(`api/DemoProcess/GetStaticDemoProcessList`)
            .then(res => res.json())
            .then(jsonString => {
                const processList = JSON.parse(jsonString);
                dispatch(receiveProcessList(processList));
            })
    }
}

//export function fetchProcessListPeriodically() {
//    return function (dispatch) {
//        fetchProcessList(dispatch)();
//        if (timerList) clearInterval(timerList);
//        timerList = setInterval(fetchProcessList(dispatch), 5000);
//    }
//}

//export function stopFetchingProcessListPeriodically() {
//    return function (dispatch) {
//        clearInterval(timerList);
//    }
//}

//let timerDetails = null;
//let j = 0;
//export function fetchProcessDetails(dispatch, getState) {
//    var s = 3;
//    return function () {
//        j = j + 1;
//        if (j > 5) j = 1;
//        const lpk = getState().displayStatus.selectedLoadProcessKey;
//        dispatch(requestProcessDetails());
//        if (lpk === 2) {
//            fetch(`data/etllog_demo${j}.json`)
//                .then(res => res.json())
//                .then(json => dispatch(receiveProcessDetails(json)))
//        }
//        if (lpk === 1) {
//            fetch(`data/etllog_real.json`)
//                .then(res => res.json())
//                .then(json => dispatch(receiveProcessDetails(json)))
//        }

//    }
//}

//export function fetchProcessDetailsPeriodically() {
//    j = 0;
//    return function (dispatch, getState) {
//        if (timerDetails) clearInterval(timerDetails);
//        timerDetails = setInterval(fetchProcessDetails(dispatch, getState), 5000);
//    }
//}


//export function stopFetchingProcessDetailsPeriodically() {
//    return function (dispatch) {
//        clearInterval(timerDetails);
//        dispatch(clearProcessDetails());
//    }
//}




