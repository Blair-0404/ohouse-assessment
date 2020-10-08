import React, {Component} from 'react';
import './App.scss';
import HouseListPage from "./pages/HouseListPage/HouseListPage";
import axios from "axios";


export default class App extends Component {
    state = {
        houseList: [],
        pageNumber: 0,
        isLastPage: false
    };

    constructor(props) {
        super(props);

        this.loadData.bind(this);
        this.loadData();
    }

    loadData() {
        const base_url = "https://bucketplace-coding-test.s3.amazonaws.com/cards/";

        axios.get(`${base_url}page_${this.state.pageNumber + 1}.json`)
            .then(response => {
                if (response.data.length === 0) {
                    this.setState({
                        isLastPage: true
                    })
                } else {
                    const newHouseList = [...this.state.houseList];
                    response.data.map((house) => {
                        return {
                            ...house,
                            isScrapped : false
                        }
                    })

                    newHouseList.push(...response.data);

                    this.setState({
                        houseList: newHouseList,
                        pageNumber: this.state.pageNumber + 1
                    });
                }
            });
    };

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll.bind(this));
    }

    listenToScroll() {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrolled = winScroll / height;

        if (!this.state.isLastPage && scrolled > 0.9) {
            this.loadData();
        }
    }

    render() {
        const {houseList} = this.state;

        return (
            <div className="App">
                <HouseListPage houseList={houseList}/>
            </div>
        );
    }
}