import React , {Component} from 'react';
import '../style/ProductCart.sass';
import ProductCart from "./ProductCart.js";
import ProductDetail from "./ProductDetails";

export default class Product extends Component{
    render() {
        const {product} = this.props
        return (
            <div className="product">
                <ProductDetail discount = {product.discount} imgUrl={product.img_url}/>
                <ProductCart
                    product = {product}
                    productCounter = {this.props.productCounter}
                />
            </div>
        );
    }
}