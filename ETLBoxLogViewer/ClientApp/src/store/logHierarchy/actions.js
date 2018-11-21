export const REQUEST_EXPAND_HIERARCHY = 'REQUEST_EXPAND_HIERARCHY'
export const REQUEST_COLLAPSE_HIERARCHY = 'REQUEST_COLLAPSE_HIERARCHY'
export const EXPANDCOLLAPSE_DONE = 'EXPANDCOLLAPSE_DONE'

export function requestExpandProcessHierarchy() {
    return { type: REQUEST_EXPAND_HIERARCHY }
}

export function requestCollapseProcessHierarchy() {
    return { type: REQUEST_COLLAPSE_HIERARCHY }
}

export function collapseExpandDone() {
    return { type: EXPANDCOLLAPSE_DONE }
}
