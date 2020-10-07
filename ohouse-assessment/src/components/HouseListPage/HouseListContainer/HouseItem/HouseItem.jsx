import React, {Component} from "react";
import "./HouseItem.scss"
import unScrapedIcon from "../../../../images/unScrapedIcon.svg"


export default class HouseItem extends Component {
    render() {
        return (
            <div className="house-item-wrap">
                <div className="user-info">
                    <div className="user-image"><img
                        src="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-default_images-avatar.png/80/80"/>
                    </div>
                    <div className="user-name">blair</div>
                </div>
                <div className="user-house-image">
                    <img
                        src="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-cards-snapshots1547771148_zt.jpeg/640/640"/>
                    <div className="scrap-icon">
                        <img src={unScrapedIcon}/>
                    </div>
                </div>

            </div>
        );
    }
}
