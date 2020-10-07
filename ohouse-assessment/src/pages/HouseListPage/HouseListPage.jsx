import React, {Component} from "react";
import "./HouseListPage.scss";
import CheckBox from "../../components/HouseListPage/CheckBox/CheckBox";
import HouseListContainer from "../../components/HouseListPage/HouseListContainer/HouseListContainer";


export default class HouseListPage extends Component {
    render() {
        return (
            <div className="house-list-page">
                <div className="house-list-page-wrap">
                <div className="header-section">
                    <CheckBox/>
                </div>
                <div className="body-section">
                    <HouseListContainer/>
                </div>
                </div>
            </div>
        );
    }
}