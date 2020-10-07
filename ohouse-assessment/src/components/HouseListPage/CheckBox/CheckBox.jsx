import React, {Component} from "react";
import "./CheckBox.scss";
import checkedIcon from "../../../images/checkedIcon.svg";



export default class CheckBox extends Component {
    render() {
        return (
            <div className="check-box-wrap">
                <div className="check-box"><img src={checkedIcon}/></div>
                <div className="check-box-text">스크랩한 것만 보기</div>
            </div>
        );
    }
}
