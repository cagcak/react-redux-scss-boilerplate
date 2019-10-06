import DATA_TYPES from '../../types'


const initialState = {
    data: [],
    loading: false,
    error: null
}

export default function data(
    state = initialState,
    action
) {
    switch(action.type) {
        case DATA_TYPES.FETCH_DATA_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }

        case DATA_TYPES.FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.data
            }

        case DATA_TYPES.FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                data: []
            }

        default:
            return state
    }
}
