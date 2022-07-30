import {useState, useEffect, useRef} from "react";

export const useFetchFunc = (debounceTimeout = 600) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const timeout = useRef()

    const handleFetch = ({pathLink, requestData, method = 'GET'}) => {
        clearTimeout(timeout.current)
        const requestOptions = {
            method,
            headers: {
                'content-Type': 'application/x-www-form-urlencoded',
                'accept': 'application/json',
                'credentials': 'include',
            },
        };
        if (requestData) {
            requestOptions['body'] = JSON.stringify(requestData);
        }
        
        timeout.current = setTimeout(() => { fetch(pathLink, requestOptions)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong: ' + response?.statusText);
                }
            })
            .then(data => setData(data))
            .catch(e => setError(`${e}`));
        }, debounceTimeout)
    }
    return {data, handleFetch, error};
};


const useFetch = ({pathLink, requestData, method = 'GET'}) => {
    const { data, handleFetch, error } = useFetchFunc();
    
    useEffect(() => {
        handleFetch({ pathLink, requestData, method });
    }, [pathLink, requestData, method, handleFetch])
    
    return {data, error};
};

export default useFetch;