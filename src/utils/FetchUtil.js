import fetch from 'isomorphic-fetch';

const getHeaders = () =>{
    const login = window.localStorage.login;
    const password = window.localStorage.password;

    return {
        'Authorization': 'Basic ' + btoa( login + ':' + password ),
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    };
};

const fetchWrapper = (url, data = {}, onSuccess, onError,
    fetchStarted, fetchDone, type = 'GET') => {
        fetchStarted && fetchStarted();

        const params = {
            headers: getHeaders(),
            method: type,
        };

        if ( type === 'POST') {
            params.body = JSON.stringify(data);
        }
        fetch( url, params )
            .then( ( response ) => {
                if ( response.ok ) {
                    return response.json();
                } else if ( !response.ok && onError ) {
                    onError( error);
                }
            } )
            .then( ( json ) => {
                fetchDone && fetchDone();
                onSuccess && onSuccess( json );
            } )
            .catch( ( error ) => {
                fetchDone && fetchDone();
                onError && onError( error );
            } );
};

const fetchPostWrapper = (url, data = {}, onSuccess, onError,
    fetchStarted, fetchDone) => {
        fetchStarted && fetchStarted();

        fetch( url, {
                body: JSON.stringify(data), // must match 'Content-Type' header
                // credentials: 'same-origin', // include, same-origin, *omit
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                    'authorization': 'Basic RkRYY2p0akA4c3FxOlhZN2ttem9OemwxMDA=',
                    // 'Accept': 'application/json',
                },
                method: 'post',
                // redirect: 'follow', // manual, *follow, error
                // referrer: 'no-referrer', // *client, no-referrer
            })
            .then( ( response ) => {
                console.log( response );
                if ( response.ok ) {
                    return response.json();
                } else if ( !response.ok && onError ) {
                    onError( error);
                }
            } )
            .then( ( json ) => {
                fetchDone && fetchDone();
                onSuccess && onSuccess( json );
            } )
            .catch( ( error ) => {
                fetchDone && fetchDone();
                onError && onError( error );
            } );
};

const FetchUtil = {fetchWrapper, fetchPostWrapper};

export default FetchUtil;