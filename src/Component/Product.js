import React , {Component} from 'react';
import '../style/App.sass';
import ProductCart from "./ProductCart.js";
import ProductDetail from "./ProductDetails";

export default class Product extends Component{
    render() {
        const {product} = this.props
        return (
            <div className="Product">
                <ProductDetail discount = {product.discount} imgUrl={product.img_url}/>
                <ProductCart
                    product = {product}
                    productCounter = {this.props.productCounter}
                />
            </div>
        );
    }
}