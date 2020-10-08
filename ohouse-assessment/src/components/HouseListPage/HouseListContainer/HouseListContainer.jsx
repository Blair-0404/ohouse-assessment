import React, {Component} from 'react';
import "./HouseListContainer.scss";
import HouseItem from "./HouseItem/HouseItem";


export default class HouseListContainer extends Component {

    render() {
        const {houseList} = this.props;

        return (
            <div className="house-list-wrap">
                {/*{houseList.map(item => {*/}
                {/*    return (*/}
                {/*        <li key={item.id} className="item">*/}
                {/*            <HouseItem*/}
                {/*                image_url={item.image_url}*/}
                {/*                nickname={item.nickname}*/}
                {/*                profile_image_url={item.profile_image_url}/>*/}
                {/*        </li>*/}
                {/*    );*/}
                {/*})}*/}


                <HouseItem
                    image_url="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-cards-snapshots1547862370_LQp2.jpeg/640/640"
                    nickname="blair"
                    profile_image_url="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-default_images-avatar.png/80/80"/>
                <HouseItem
                    image_url="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-cards-snapshots1547862370_LQp2.jpeg/640/640"
                    nickname="blair"
                    profile_image_url="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-default_images-avatar.png/80/80"/>
                <HouseItem
                    image_url="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-cards-snapshots1547862370_LQp2.jpeg/640/640"
                    nickname="blair"
                    profile_image_url="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-default_images-avatar.png/80/80"/>
                <HouseItem
                    image_url="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-cards-snapshots1547862370_LQp2.jpeg/640/640"
                    nickname="blair"
                    profile_image_url="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-default_images-avatar.png/80/80"/>
                <HouseItem
                    image_url="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-cards-snapshots1547862370_LQp2.jpeg/640/640"
                    nickname="blair"
                    profile_image_url="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-default_images-avatar.png/80/80"/>
                <HouseItem
                    image_url="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-cards-snapshots1547862370_LQp2.jpeg/640/640"
                    nickname="blair"
                    profile_image_url="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-default_images-avatar.png/80/80"/>
                <HouseItem
                    image_url="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-cards-snapshots1547862370_LQp2.jpeg/640/640"
                    nickname="blair"
                    profile_image_url="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-default_images-avatar.png/80/80"/>
                <HouseItem
                    image_url="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-cards-snapshots1547862370_LQp2.jpeg/640/640"
                    nickname="blair"
                    profile_image_url="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-default_images-avatar.png/80/80"/>
                <HouseItem
                    image_url="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-cards-snapshots1547862370_LQp2.jpeg/640/640"
                    nickname="blair"
                    profile_image_url="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-default_images-avatar.png/80/80"/>
            </div>
        );
    }
}
