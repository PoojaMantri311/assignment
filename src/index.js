import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.sass';
import Home from '../src/Component/HomePage';
import Cart from '../src/Component/Cart';
import { Route, Switch ,BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

class App extends React.PureComponent{
    state = {
        productCounter: {},
        counter: 0,
    };

    setProductCounter = (product) =>{
        const productCounter = {...this.state.productCounter};
        if(!productCounter[product.id]){
            productCounter[product.id]= {
                count : 0,
                ...product
            };
        }
        productCounter[product.id].count+=1;
        this.setState({productCounter})
        this.counter();
    };

    removeProductFromCart = (product) => {
        const productCounter = {...this.state.productCounter};
        let productCount = 0;
        if(productCounter[product.id]){
            productCount = productCounter[product.id].count;
            delete productCounter[product.id]
        }
        this.setState({productCounter});
        this.setState((state, props) => {
            return {counter: state.counter - productCount};
        });
    };

    counter = () => {
        this.setState((prevState) => prevState.counter++);
    };

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/cart" render={()=> <Cart
                        productCart={this.state.productCounter}
                        onClickRemove = {this.removeProductFromCart}/>} />

                    <Route path="/" render ={(props)=> <Home {...props}
                                                             counter = {this.state.counter}
                                                             productCounter={this.state.productCounter}
                                                             setProductCounter={this.setProductCounter}/>} />
                </Switch>
            </Router>
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
