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

const getUploadHeaders = () =>{
    const login = window.localStorage.login;
    const password = window.localStorage.password;

    return {
        'Authorization': 'Basic ' + btoa( login + ':' + password ),
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
                if ( response.ok && type !== 'POST' ) {
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

const uploadFile = (url, file = {}, onSuccess, onError,
    fetchStarted, fetchDone) => {
        fetchStarted && fetchStarted();

        const data = new FormData();
        data.append('file', file);

        fetch( url, {
                body: data,
                headers: getUploadHeaders(),
                method: 'post',
            })
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

const FetchUtil = {fetchWrapper, uploadFile};

export default FetchUtil;