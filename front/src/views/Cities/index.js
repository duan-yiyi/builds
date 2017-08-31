import React, {Component} from 'react';
import { observer } from 'mobx-react';
import store from "./store";

@observer
class Cities extends Component {

    componentDidMount() {
        store.getCitiesInfo();
    }

    render() {
        const {citiesInfo} = store;
        return (
            <div className="cityinfo">
                {citiesInfo.map(cityInfo =>
                    <div className="citiinfo-list" key={cityInfo.cityId}>
                        <div className="citiinfo-list_img">
                            <img src={cityInfo.cityImgSrc} alt={cityInfo.cityImgAlt}/>
                        </div>
                        <div className="citiinfo-list_name">
                            <h4>{cityInfo.cityName}</h4>
                        </div>
                        <div className="citiinfo-list_button">
                            <button>进入</button>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Cities;
