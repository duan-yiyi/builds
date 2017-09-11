import 'whatwg-fetch';

const REQUEST_URL = `${location.origin}/getService.json`;

const fetchClient = (request) => {
    fetch(REQUEST_URL, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            x_mchannel: 'webapp'
        },
        body: JSON.stringify({
            actionName: request.actionName,
            ...request.body
        })
    })
        .then((response) => response.json())
        .then((response) => {
            if (response.respCode === '1000') {
                request.success(response);
            } else {
                if (request.fail) {
                    request.fail(response);
                    return;
                }
                console.log('弹框显示失败信息');
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

export default fetchClient;
