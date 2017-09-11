import {observable, action} from 'mobx';
import fetchClient from '../Common/fetchClient';
import API from '../../constant/API';
import '../../mock/getCities';

class CitiesInfo {

    @observable citiesInfo = [];
    @action.bound
    getCitiesInfo() {
        fetchClient({
            method: 'POST',
            actionName: API.GET_CITIES,
            success: (response) => {
                this.citiesInfo = response.cities;
            }
        });
    }

}

export default new CitiesInfo();
