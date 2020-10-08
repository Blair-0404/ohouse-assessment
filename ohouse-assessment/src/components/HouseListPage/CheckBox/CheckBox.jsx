import React, {Component} from "react";
import "./CheckBox.scss";
import checkedIcon from "../../../images/checkedIcon.svg";
import uncheckedIcon from "../../../images/uncheckedIcon.svg";

export default class CheckBox extends Component {
    render() {
        const {viewOnlyScrapped, onlyScrapped} = this.props;
        console.log(onlyScrapped)

        return (
            <div className="check-box-wrap">
                <div className="check-box" onClick={() => viewOnlyScrapped()}>
                    {onlyScrapped ? (<img src={uncheckedIcon} alt="check-box"/>) : (
                        <img src={checkedIcon} alt="check-box"/>)}
                </div>
                <div className="check-box-text">스크랩한 것만 보기</div>
            </div>
        );
    }
}
