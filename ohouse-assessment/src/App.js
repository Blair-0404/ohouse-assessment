import React, {Component} from 'react';
import './App.scss';
import HouseListPage from "./pages/HouseListPage/HouseListPage";
import axios from "axios";


export default class App extends Component {

    state = {
        houseList: null
    };

    handleClick = async() => {
        const base_url = "https://bucketplace-coding-test.s3.amazonaws.com/cards/";

        await axios.get(`${base_url}page_1.json`)
            .then(response => {
                this.setState({
                    houseList: response.data
                });
            }).then(() => {
            console.log(this.state.houseList)
        })
    };

    constructor() {
        super();
        this.handleClick();
    }

    // async componentDidMount() {
    //     const base_url = "https://bucketplace-coding-test.s3.amazonaws.com/cards/";
    //     await axios.get(`${base_url}page_1.json`)
    //         .then(response => {
    //             this.setState({
    //                 houseList: response.data
    //             });
    //         }).then(() => {
    //         console.log(this.state.houseList)
    //     })
    // }

    render() {
        const {houseList} = this.state;

        return (

            <div className="App">
                <HouseListPage houseList={houseList}/>
            </div>
        );
    }
}


