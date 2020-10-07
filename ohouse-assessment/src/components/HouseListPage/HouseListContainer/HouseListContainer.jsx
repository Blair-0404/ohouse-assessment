import React, {Component} from 'react';
import axios from "axios";
import "./HouseListContainer.scss";
import HouseItem from "./HouseItem/HouseItem";


export default class HouseListContainer extends Component {

    state = {
        data: null
    };

    componentDidMount() {
        const base_url = "https://bucketplace-coding-test.s3.amazonaws.com/cards/";
        axios.get(`${base_url}page_1.json`)
            .then(response => {
                this.setState({
                    data: response.data
                });
            }).then(() => {
            console.log(this.state.data)
        })
    }




    render() {
        const { data } = this.state;

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
