import React,{Component} from "react";
import "../style/ProductDetails.sass";

export default  class ProductDetails extends Component{
    render() {
        return (
            <div className="cartBox">
                <div className="left discount-tag"> {this.props.discount}%</div>
                <div className="productImage"><img src={this.props.imgUrl} alt="Book Cover Not available"/></div>
            </div>
        );
    }
}