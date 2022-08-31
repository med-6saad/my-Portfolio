import React from "react";
import './productList.css';
import Product from '../product/Product';
import { products } from "../../data";
const ProductList=()=>{
    return(
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire</h1>
                <p className="pl-desc">
                    This is a set of projects that I did, You can look at them and get an idea about them
                </p>

            </div>
            <div className="pl-list">
                {products.map((item)=>(
                    <Product key={item.id} img={item.img} link={item.link}/>
                ))}
            </div>
        </div>
    )
}
export default ProductList;