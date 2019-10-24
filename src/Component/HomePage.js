import Product from "./Product";
import React,{Component} from "react";
import "../style/HomePage.sass";
export default class HomePage extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            data: [],
            error: null,
        }
    }

    productCounter = (product) => {
        this.props.setProductCounter(product);
    };



    fetchData = () => {
        fetch(`https://api.myjson.com/bins/qhnfp`)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    data: data,
                    isLoading: false,
                })
            ).catch(error => this.setState({ error, isLoading: false }));
    };

    componentDidMount() {
        this.fetchData();
    }

    render() {
        const {history} = this.props;

        return (
            <div>
                <div className="header">
                    <div className="column"> All items</div>
                    <div className="column">
                        <button onClick={()=> history.push("/cart")}>Go to Cart </button>
                        <span style={{marginRight:"10px"}}>{this.props.counter} Item Added into cart</span>
                    </div>
                </div>
                <div style={{display:'box' ,marginTop : "30px" , marginLeft: "30px"}}>
                    {this.state.data.map(product => (
                        <div className="inline-display" key={product.id}>
                            <Product
                                product={product}
                                productCounter ={this.productCounter}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}