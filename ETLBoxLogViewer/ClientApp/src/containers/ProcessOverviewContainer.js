import { connect } from 'react-redux'
import { ProcessOverview } from "../components/ProcessOverview"
import { fetchProcessList } from "../store/processList/thunks";


const mapStateToProps = state => {
    return {
        processList: state.processList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRefresh: () => dispatch(fetchProcessList()),        
    }
}

export const ProcessOverviewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProcessOverview);


