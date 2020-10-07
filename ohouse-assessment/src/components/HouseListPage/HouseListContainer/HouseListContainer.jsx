import React, {Component} from 'react';
import "./HouseListContainer.scss";
import HouseItem from "./HouseItem/HouseItem";


export default class HouseListContainer extends Component {
    render() {
        return (
            <div className="house-list-wrap">
                <HouseItem/>
                <HouseItem/>
                <HouseItem/>
                <HouseItem/>
                <HouseItem/>
                <HouseItem/>
                <HouseItem/>
                <HouseItem/>
            </div>
        );
    }
}
