import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data';

const ProductContext = React.createContext();


//Provider

//Consumer

class ProductProvider extends Component {



    constructor(props){
        super(props);
        this.state = {
            products: storeProducts,
            detailProduct: detailProduct,
            cart : []
        };

        this.getItem = this.getItem.bind(this);
        this.handleDetail = this.handleDetail.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.sleep = this.sleep.bind(this);
    }
    getItem = id =>{
        const product = this.state.products.find(item=>item.id===id);
        return product;
    };

    handleDetail(id){
        console.log("hello");
        const product = this.getItem(id);
        
        this.setState(()=>{
            return {detailProduct : product};
        });
    };
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    async addToCart(id){
        console.log("Hello from cart");
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        console.log(index);
        const product = tempProducts[index];
        product.inCart = true;
        product.count=1;
        const price = product.price;
        product.total = price;
        this.setState(()=>{return {products:tempProducts,cart:[...this.state.cart,product]}});
        await this.sleep(1);
        console.log(this.state.cart);
    }

    render() {
        return (
            <ProductContext.Provider value = {{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart : this.addToCart

            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider,ProductConsumer};