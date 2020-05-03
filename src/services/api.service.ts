const getApiData = async (url: string): Promise<string> => {
    try {
        let response = await fetch(url);
        return response.json();
    } catch (e) {
        throw e;
    }
}

const postApiData = async (url: string, data: any): Promise<boolean> => {
    try {
        let request = {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: data
        }

        const response = await fetch(url, request);
        return response.ok;
    }
    catch (e) {
        return false;
    }
}

export { getApiData, postApiData };