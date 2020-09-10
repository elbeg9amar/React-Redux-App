import axios from 'axios'

export const FETCH_JOKE = 'FETCH_JOKE'
export const FETCH_JOKE_SUCCESS = 'FETCH_JOKE_SUCCESS'
export const FETCH_JOKE_FAIL = 'FETCH_JOKE_FAIL'

export const getData = () => dispatch => {
    dispatch ({ type: FETCH_JOKE })
    axios
    .get('https://sv443.net/jokeapi/v2/joke/Any?type=single&amount=10')
    .then(res => {
        console.log(res)
        dispatch({ type: FETCH_JOKE_SUCCESS, payload: res.data.jokes})
    })
    .catch(err => {
        console.log(err);
        dispatch({type: FETCH_JOKE_FAIL, payload: {message: 'https://tsal-eszuskq0bptlfh8awbb.stackpathdns.com/wp-content/uploads/beans/images/Waiting-Memes-52918-aad4877.jpg'}})
    })

}

