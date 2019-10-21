import React, {PureComponent} from 'react';
import '../style/App.sass';

export default class ProductCart extends PureComponent{

    onClick = () => {
        this.props.productCounter(this.props.product);
    };

    render() {
        const product = this.props.product;
        let cost =(parseFloat(product.price).toFixed(2)) - (parseFloat(product.price))*(parseInt(product.discount))/100;

        return (
            <div style={{height:"20%",borderTop: "solid black 1px", position:"relative"}}>
                <div className="left" style={{position:"absolute", top:"3px"}}>{product.name}</div>
                <div style={{display:"flex"}}>
                    <div className="left" style={{textDecoration: "line-through" , position:"absolute", bottom:"3px"}}>${product.price}</div>
                    <div className="left" style={{position:"absolute",left : "40px" ,bottom:"3px"}}>${cost}</div>
                </div>
                <div className="column" style={{position:"absolute", right:"5px", top:"5px"}}>
                    <button style={{height:"70%"}} onClick={this.onClick}>Add to Cart</button>
                </div>
            </div>
        );
    }
}

