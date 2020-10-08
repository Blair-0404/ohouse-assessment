import React, {Component} from 'react';
import './App.scss';
import HouseListPage from "./pages/HouseListPage/HouseListPage";
import axios from "axios";

export default class App extends Component {
    STORAGE_KEY = "scrappedHouseIdList";
    storageSet = new Set();

    state = {
        houseList: [],
        pageNumber: 0,
        isLastPage: false,
        onlyScrapped: false
    };

    constructor(props) {
        super(props);

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
                    });
                } else {
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

    updateScrapped = (isScrapped, id) => {
        isScrapped ? this.storageSet.delete(id) : this.storageSet.add(id);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(Array.from(this.storageSet)));

        const newHouseList = this.state.houseList.map((houseItem) => {
            if (houseItem.id === id) {
                return {
                    ...houseItem,
                    isScrapped: !houseItem.isScrapped
                }
            }

            return houseItem;
        });

        this.setState({houseList: newHouseList});

    };

    // todo : 제 생각에는 북마크만 보기는 따로 api가 있는것이 더 좋을 것 같습니다.
    //        여기서는 해당 기능을 위해 임의로 현재페이지까지의 북마크된 아이템을 rendering 하겠습니다.
    viewOnlyScrapped = () => {
        if (this.state.onlyScrapped) {
            this.setState({
                houseList: [],
                pageNumber: 0
            }, () => this.loadData());
        } else {
            const newHouseList = this.state.houseList.filter((houseItem) => {
                return houseItem.isScrapped;
            });

            this.setState({
                houseList: newHouseList
            });
        }

        this.setState({
            onlyScrapped: !this.state.onlyScrapped
        });
    };

    render() {
        const {houseList, onlyScrapped} = this.state;

        return (
            <div className="App">
                <HouseListPage houseList={houseList}
                               updateScrapped={this.updateScrapped}
                               viewOnlyScrapped={this.viewOnlyScrapped}
                               onlyScrapped={onlyScrapped}
                />
            </div>
        );
    }
}