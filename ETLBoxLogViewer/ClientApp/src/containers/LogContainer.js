import { connect } from 'react-redux'
import { Log } from "../components/Log"
import { fetchProcessLogPeriodically, stopFetchingProcessLogPeriodically } from "../store/processLog/thunks";
import { requestCollapseProcessHierarchy, requestExpandProcessHierarchy } from "../store/logHierarchy/actions"

const mapStateToProps = state => {
    return {
        processLog: state.processLog
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoad: (loadProcessKey) => dispatch(fetchProcessLogPeriodically(loadProcessKey)),        
        onUnload: () => dispatch(stopFetchingProcessLogPeriodically()),
        onExpand: () => dispatch(requestExpandProcessHierarchy()),
        onCollapse: () => dispatch(requestCollapseProcessHierarchy())
    }
}

export const LogContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Log);


