import React from "react";
import './product.css';
const Product=({img,link})=>{
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle" style={{background:'red'}}>

                </div>
                <div className="p-circle" style={{background:'yallow'}}>
                    
                </div>
                <div className="p-circle" style={{background:'green'}}>
                    
                </div>
            </div>
            <a href={link} target='_blank' rel='noreferrer'>
                <img src={img} alt="" className="p-img" />
            </a>
        </div>
    )
}
export default Product;