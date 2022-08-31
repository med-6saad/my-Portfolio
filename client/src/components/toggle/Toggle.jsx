import React from "react";
import './toggle.css';
import sun from '../../images/sun.png';
import moon from '../../images/moon.png';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toBlackMode,toWhiteMode } from "../../store/actions";

const Toggle=()=>{
    const bollColor=useSelector(State=>State.blackMode)
    const dispatch=useDispatch();
    return (
        <div className="t">
            <img src={sun} alt="" className="t-icon" />
            <img src={moon} alt="" className="t-icon" />
            <div className={bollColor?'t-button-left':'t-button-right'} onClick={bollColor?()=>dispatch(toWhiteMode()):()=>dispatch(toBlackMode())} ></div>
        </div>
    )
}
export default Toggle;