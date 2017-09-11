import fetchMock from 'fetch-mock';
import API from '../constant/API';

const REQUEST_URL = `${location.origin}/getService.json`;

fetchMock.post(REQUEST_URL, (url, opts) => {
    if (JSON.parse(opts.body).actionName === API.GET_CITIES) {
        return {
            respCode: '1000',
            respMsg: '操作成功',
            countryId: '001',
            countryName: '',
            cities: [{
                cityId: '001',
                cityImgSrc: '',
                cityImgAlt: '图片1',
                cityName: ''
            }, {
                cityId: '002',
                cityImgSrc: '',
                cityImgAlt: '图片2',
                cityName: ''
            }]
        };
    }

    return null;
});
