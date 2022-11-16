const BASE_URL = (new URL(window.location.href)).origin

export default (route, data) => {
    return fetch(BASE_URL + route, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}