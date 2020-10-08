import React, {Component} from 'react';
import './App.scss';
import HouseListPage from "./pages/HouseListPage/HouseListPage";
import axios from "axios";


export default class App extends Component {
    state = {
        houseList: [],
    };

    render() {
        const {houseList} = this.state;

        return (
            <div className="App">
                <HouseListPage houseList={houseList}/>
            </div>
        );
    }
}


