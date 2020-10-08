import React, {Component} from 'react';
import './App.scss';
import HouseListPage from "./pages/HouseListPage/HouseListPage";
import axios from "axios";


export default class App extends Component {

    // set = new Set();
    STORAGE_KEY = "scrappedHouseIdList";
    storageSet = new Set();

    state = {
        houseList: [],
        pageNumber: 0,
        isLastPage: false
    };

    constructor(props) {
        super(props);

        // todo : localstorage 에 해당키 없으면 만들기
        if (JSON.parse(localStorage.getItem(this.STORAGE_KEY)) === null) {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(Array.from(this.storageSet)));
        } else {
            const tmpArr = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
            this.storageSet = new Set(tmpArr);
        }


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
                    // todo : localstorage 조회해서 house.id가 저장되어있다면 isScrapped : true로 저장 그렇지 않다면 false
                    const updatedDate = response.data.map((house) => {
                        if (this.storageSet.has(house.id)) {
                            return {
                                ...house,
                                isScrapped: true
                            }
                        } else {
                            return {
                                ...house,
                                isScrapped: false
                            }
                        }
                    });
                    const newHouseList = [...this.state.houseList];

                    newHouseList.push(...updatedDate);

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