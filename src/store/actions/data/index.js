import DATA_TYPES from './../../types'

export const fetchDataBegin = () => ({
    type: DATA_TYPES.FETCH_DATA_BEGIN
})

export const fetchDataSuccess = data => ({
    type: DATA_TYPES.FETCH_DATA_SUCCESS,
    payload: { data }
})

export const fetchDataFailure = error => ({
    type: DATA_TYPES.FETCH_DATA_FAILURE,
    payload: { error }
})