import React, {Component} from 'react';
import "./HouseListContainer.scss";
import HouseItem from "./HouseItem/HouseItem";


export default class HouseListContainer extends Component {

    render() {
        const {houseList} = this.props;

        return (
            <div className="house-list-wrap">
                {houseList.map(item => {
                    return (
                        // <li key={item.id} className="item">
                            <HouseItem
                                image_url={item.image_url}
                                nickname={item.nickname}
                                profile_image_url={item.profile_image_url}/>
                        // </li>
                    );
                })}
            </div>
        );
    }
}
