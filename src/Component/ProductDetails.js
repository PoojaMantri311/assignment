import React,{Component} from "react";
import "../style/ProductCart.sass";
import book from "../download.png";
export default  class ProductDetails extends Component{
    render() {
        return (
            <div className="cart-box">
                <div className="product-image"><img style={{width:"160px", height:"160px"}} src={book} alt={book}/></div>
                <div className="discount-tag"> {this.props.discount}%</div>

            </div>
        );
    }
}