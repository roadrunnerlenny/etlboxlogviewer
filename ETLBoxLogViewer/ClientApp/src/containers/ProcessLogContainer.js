import { connect } from 'react-redux'
import { ProcessLog } from "../components/ProcessLog"
import { fetchProcessLogPeriodically, stopFetchingProcessLogPeriodically } from "../store/processLog/thunks";


const mapStateToProps = state => {
    return {
        processLog: state.processLog
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoad: (loadProcessKey) => dispatch(fetchProcessLogPeriodically(loadProcessKey)),        
        onUnload: () => dispatch(stopFetchingProcessLogPeriodically())
    }
}

export const ProcessLogContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProcessLog);


