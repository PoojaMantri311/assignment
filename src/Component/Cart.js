import React,{Component} from "react";
import '../style/Cart.sass';

export default class Cart extends Component{

    onClickRemove(product){
        this.props.onClickRemove(product)
    }

    totalCost = (productCart) => {
        let cost =0;
        Object.keys(productCart).forEach( key => {
            cost+= (productCart[key].price*productCart[key].count)
        });
        return cost
    };

    totalDiscount = (productCart) => {
        let discount =0;
        Object.keys(productCart).forEach( key => {
            discount+= ((productCart[key].price*productCart[key].discount)/100);
        });
        return discount;
    };

    render() {

        const productCart = this.props.productCart;
        const cost = this.totalCost(productCart);
        const discount = this.totalDiscount(productCart);

        return (
            <div>
                <div className="basket">
                    <div className="basket-module">

                    </div>
                    <div className="basket-labels">
                        <ul>
                            <li className="item item-heading">Item</li>
                            <li className="price">Price</li>
                            <li className="quantity">Quantity</li>
                            <li className="subtotal">Subtotal</li>
                        </ul>
                    </div>
                    {
                        Object.keys(productCart).map((d, key) => (
                            <div key={key} className="basket-product">
                                <div className="item">
                                        <div className="product-frame" >
                                            <div style={{width: "90%"}}>
                                                {productCart[d].name}
                                            </div>
                                            <div style={{
                                                backgroundColor: "white",
                                                display: 'relative',
                                                top: "10px",
                                                right: "5px",
                                                alignContent: "center"
                                            }}>
                                                <button className="remove-button" onClick={()=> this.props.onClickRemove(productCart[d])}>X</button>
                                            </div>
                                    </div>
                                </div>
                                <div className="price">{productCart[d].price}</div>
                                <div className="quantity">
                                    <div>{productCart[d].count}</div>
                                </div>
                                <div className="subtotal">{productCart[d].price*productCart[d].count}</div>
                                <div className="remove">
                                </div>
                            </div>
                        ))
                    }
                </div>

                <aside>
                    <div className="summary">
                        <div className="summary-total-items"><span className="total-items">
                            </span> Items in your Bag
                        </div>
                        <div>
                            <div className="subtotal-title">Total</div>
                            <div className="subtotal-value final-value" id="basket-subtotal">{cost}</div>
                        </div>
                        <div>
                            <div className="subtotal-title">Discount</div>
                            <div className="subtotal-value final-value" id="basket-subtotal">{discount}</div>
                        </div>
                        <div className="summary-total">
                            <div className="total-title">Total</div>
                            <div className="total-value final-value" id="basket-total">{cost-discount}</div>
                        </div>
                        <div className="summary-checkout">
                            <button className="checkout-cta">Go to Secure Checkout</button>
                        </div>
                    </div>
                </aside>
            </div>
        );
    }
}