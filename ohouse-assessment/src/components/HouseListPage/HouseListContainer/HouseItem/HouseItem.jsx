import React, {Component} from "react";
import "./HouseItem.scss"
import unScrapedIcon from "../../../../images/unScrapedIcon.svg";
import scrapedIcon from "../../../../images/scrapedIcon.svg";

export default class HouseItem extends Component {
    render() {
        const {id, image_url, isScrapped, nickname, profile_image_url, updateScrapped} = this.props;

        return (
            <div className="house-item-wrap">
                <div className="user-info">
                    <div className="user-image"><img
                        src={profile_image_url} alt="user-image"/>
                    </div>
                    <div className="user-name">{nickname}</div>
                </div>
                <div className="user-house-image">
                    <img
                        src={image_url} alt="user-house-image"/>
                    <div className="scrap-icon" onClick={() => updateScrapped(isScrapped, id)}>
                        {isScrapped ? (<img src={scrapedIcon} alt="scrap-icon"/>) : (
                            <img src={unScrapedIcon} alt="scrap-icon"/>)}
                    </div>
                </div>

            </div>
        );
    }
}
