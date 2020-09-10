import {
    FETCH_JOKE,
    FETCH_JOKE_SUCCESS,
    FETCH_JOKE_FAIL
} from '../actions/JokesAction'

const initialState = {
    jokes:[],
    loadingJokes: true,
    errorMessage: ''
}

export default (state=initialState, action) => {
    switch(action.type) {
        case FETCH_JOKE:
            return{
                ...state,
                loadingJokes: true,
                errorMessage:'',
            }
        case FETCH_JOKE_SUCCESS:
            return{
                ...state,
                loadingJokes: false,
                errorMessage:'',
                jokes: action.payload

            }
        case FETCH_JOKE_FAIL: 
            return{
                ...state,
                errorMessage: action.payload.message,
                loadingJokes: false
            }
        default: return state
    }
}