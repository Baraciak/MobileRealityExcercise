export const get = async (url = '', config = {}) => {
    return new Promise(async (resolve, reject) => {
        const configuration = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            ...config,
        };
        // console.log(['configuration', configuration]);
        const response = await fetch(url, configuration);
        // console.log(["get response ->", response])

        resolve(response.json());
    }).catch((err) => {
        console.log(['err', err]);
        return err;
    });
};

export const post = async (url = '', data = {}, config = {}) => {
    return new Promise(async (resolve, reject) => {
        const configuration = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            ...config,
        };
        // console.log(['configuration', configuration]);
        const response = await fetch(url, configuration);
        console.log(['post response ->', response]);
        if (response.ok) {
            resolve(response.json());
        } else {
            reject(response.json());
        }
    });
};

export const del = async (url = '', data = {}, config = {}) => {
    return new Promise(async (resolve, reject) => {
        const configuration = {
            method: 'DELETE',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            ...config,
        };
        // console.log(['configuration', configuration]);
        const response = await fetch(url, configuration);
        console.log(['post response ->', response]);
        if (response.ok) {
            resolve(response.json());
        } else {
            reject(response.json());
        }
    });
};
