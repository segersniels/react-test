const apiRequest = function(url, options) {
    return fetch(url, options)
        .then(response => {
            return response
                .json()
                .then(json => {
                    return { json, response };
                })
                .catch(err => {
                    return {
                        html: response._bodyText,
                        status: response.status,
                        statusText: response.statusText,
                        url: response.url,
                    };
                });
        })
        .then(({ json, response }) => {
            if (response && !response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
        .then(response => {
            return { response };
        })
        .catch(error => {
            return error;
        });
};

export const get = args => {
    const url = args.endpoint;
    const options = {
        method: 'GET',
        // mode: 'cors',
        headers: new Headers(args.headers || {}),
        qs: args.query || {},
    };
    return apiRequest(url, options);
};
