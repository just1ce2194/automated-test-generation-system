import fetch from 'isomorphic-fetch';

const fetchWrapper = (url, data = {}, onSuccess, onError,
    fetchStarted, fetchDone) => {
        fetchStarted && fetchStarted();

        fetch( url, data )
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

const FetchUtil = {fetchWrapper};

export default FetchUtil;
