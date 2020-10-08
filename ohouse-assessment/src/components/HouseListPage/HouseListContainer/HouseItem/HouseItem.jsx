import React, {Component} from "react";
import "./HouseItem.scss"
import unScrapedIcon from "../../../../images/unScrapedIcon.svg"

export default class HouseItem extends Component {

    render() {
        const {image_url, nickname, profile_image_url} = this.props;

        return (
            <div className="house-item-wrap">
                <div className="user-info">
                    <div className="user-image"><img
                        src={profile_image_url}/>
                    </div>
                    <div className="user-name">{nickname}</div>
                </div>
                <div className="user-house-image">
                    <img
                        src={image_url}/>
                    <div className="scrap-icon">
                        <img src={unScrapedIcon}/>
                    </div>
                </div>

            </div>
        );
    }
}
