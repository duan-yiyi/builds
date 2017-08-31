import fetchMock from 'fetch-mock';
import API from '../constant/API';

fetchMock.post(API.GET_CITIES, {
    "countryId": "001",
    "countryName": "中国",
    "cities": [{
        "cityId": "001",
        "cityImgSrc": "",
        "cityImgAlt": "上海图片",
        "cityName": "上海"
    }, {
        "cityId": "002",
        "cityImgSrc": "",
        "cityImgAlt": "武汉图片",
        "cityName": "武汉"
    }]
});
