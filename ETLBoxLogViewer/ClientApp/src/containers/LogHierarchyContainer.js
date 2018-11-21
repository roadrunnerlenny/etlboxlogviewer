import { connect } from 'react-redux'
import { LogHierarchy } from "../components/LogHierarchy"
import { collapseExpandDone } from '../store/logHierarchy/actions'


const mapStateToProps = state => {
    return {
        isHierarchyExpanded: state.logHierarchy.isHierarchyExpanded,
        processLog: state.processLog,
        requestExpand: state.logHierarchy.requestExpandHierarchy,
        requestCollapse: state.logHierarchy.requestCollapseHierarchy
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onCollapseExpandDone: () => dispatch(collapseExpandDone())
    }
}

export const LogHierarchyContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LogHierarchy);

