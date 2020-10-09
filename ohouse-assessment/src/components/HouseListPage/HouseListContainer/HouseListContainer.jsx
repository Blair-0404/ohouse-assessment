import React, {Component} from 'react';
import "./HouseListContainer.scss";
import HouseItem from "./HouseItem/HouseItem";

export default class HouseListContainer extends Component {
    render() {
        const {houseList, updateScrapped} = this.props;

        return (
            <div className="house-list-wrap">
                {houseList.map(item => {
                    return (
                        <HouseItem
                            key={item.id}
                            id={item.id}
                            isScrapped={item.isScrapped}
                            image_url={item.image_url}
                            nickname={item.nickname}
                            profile_image_url={item.profile_image_url}
                            updateScrapped={updateScrapped}/>
                    );
                })}
            </div>
        );
    }
}
