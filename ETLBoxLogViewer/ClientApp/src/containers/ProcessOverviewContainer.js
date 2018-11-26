import { connect } from 'react-redux'
import { ProcessOverview } from "../components/ProcessOverview"
import { fetchProcessListPeriodically, stopFetchingProcessListPeriodically } from "../store/processList/thunks";


const mapStateToProps = state => {
    return {
        processList: state.processList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => dispatch(fetchProcessListPeriodically()),
        onUnload: () => dispatch(stopFetchingProcessListPeriodically())
    }
}

export const ProcessOverviewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProcessOverview);


