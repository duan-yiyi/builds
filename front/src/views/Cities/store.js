import { observable, action } from 'mobx';
import FetchClient from 'fetch-client';
import API from '../constant/API';
import './mock.js';

class CitiesInfo {
    @observable citiesInfo = [];
    @action.bound
    getCitiesInfo() {
        let fetchClient = new FetchClient();
        fetchClient.post(API.GET_CITIES)
            .then((response) => response.json())
            .then((json) => {
                this.citiesInfo = json.cities;
            })
            .catch((error) => console.error(error));
    }
}

export default new CitiesInfo();
