import * as types from '../constants/ActionTypes'
import axios from 'axios';

export function FetchHomepageJob() {
    return function (dispatch) {
        axios.get('http://127.0.0.1:8000/j/?format=json')
            .then(response => {
                dispatch({
                    type: types.FETCH_HOMEPAGE_JOB,
                    payload: response.data.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
}
export function FetchHomepageCompany() {
    return function (dispatch) {
        axios.get('http://127.0.0.1:8000/i/?format=json')
            .then(response => {
                dispatch({
                    type: types.FETCH_HOMEPAGE_COMPANY,
                    payload: response.data.list
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export function FetchCompany(slug) {
    return function (dispatch) {
        dispatch({
            type: types.FETCH_COMPANY,
            loading: true,
            data: {},
        });
        axios.get('http://127.0.0.1:8000/i/' + slug + '?format=json')
            .then(response => {
                dispatch({
                    type: types.FETCH_COMPANY,
                    loading: false,
                    payload: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export function FetchJob(id) {
    return function (dispatch) {
        dispatch({
            type: types.FETCH_JOB,
            loading: true,
            data: {},
        });
        axios.get('http://127.0.0.1:8000/j/' + id + '?format=json', {withCredentials: true})
            .then(response => {
                dispatch({
                    type: types.FETCH_JOB,
                    loading: false,
                    payload: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export function FetchCompanyList(page) {
    return function (dispatch) {
        axios.get('http://127.0.0.1:8000/i/?p=' + page + '&n=6')
            .then(response => {
                dispatch({
                    type: types.FETCH_COMPANY_LIST,
                    payload: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export function FetchJobList(page) {
    return function (dispatch) {
        axios.get('http://127.0.0.1:8000/j/?p=' + page + '&n=6', {withCredentials: true})
            .then(response => {
                dispatch({
                    type: types.FETCH_JOB_LIST,
                    payload: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export function ResetListCompany() {
    return function (dispatch) {
        dispatch({
            type: types.RESET_LIST_COMPANY
        });
    }
}

export function FetchSearch(next_page) {
    return function (dispatch) {
        if (next_page!==null) {
            axios.get(next_page)
                .then(response => {
                    dispatch({
                        type: types.FETCH_SEARCH,
                        payload: response.data
                    });
                })
                .catch((error) => {
                    console.log(error.response);
                })
        }
    }
}

export function GetKeySearch(key) {
    console.log('getkeysearch');
    return function (dispatch) {
        dispatch({
            type: types.GET_KEY_SEARCH,
            key: key,
            nextHrefs:'http://127.0.0.1:8000/s/?p=1&match='+key,
        });
    }
}

export function FetchReview(company) {
    return function (dispatch) {
        axios.get("http://127.0.0.1:8000/r/" + company)
            .then(response => {
                dispatch({
                    type: types.FETCH_REVIEW,
                    payload: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export function FetchUser(client_id, secret_key) {
    return (dispatch) => {
        axios.get('http://127.0.0.1:8000/user/?client_id=' + client_id + "&client_secret=" + secret_key, {withCredentials: true})
            .then(response => {
                if (response.data.token.is_expired === true) {
                    RefreshToken(client_id, secret_key, response.data.token.refresh_token);
                }
                else
                    dispatch({
                        type: types.FETCH_USER,
                        payload: response.data
                    });
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export function RefreshToken(client_id, secret_key, refresh_token) {
        axios.post('http://127.0.0.1:8000/auth/token',
            {
                "grant_type": "refresh_token",
                "client_id" : client_id,
                "client_secret" : secret_key,
                "refresh_token" : refresh_token
            }
        , {withCredentials: true})
            .then(response => {
                FetchUser(client_id, secret_key)
            })
            .catch((error) => {
                console.log(error);
            })
}