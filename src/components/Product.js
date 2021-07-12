import React, { Component } from 'react';
import ProductDetail from './ProductDetail';
import {ProductConsumer} from '../context';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
export default class Product extends Component {

    // handleClick(e){
    //     e.preventDefault();
    //     console.log("clicked");
    //     return(
    //         <ProductDetail detail = {this.props.product}></ProductDetail>
    //     )
    //     // console.log(img);
    // }
    render() {
        const {id,title,img,price,inCart} = this.props.product;
        
        return (
            <React.Fragment>

                <div className="col-sm-4" style={{marginBlock:"5px",marginBottom:"25px"}}>
                    <ProductConsumer>
                        {
                            value=>{
                                return(
                                <div className ="card" style={{backgroundColor:"silver"}}>
                                <div className = "img-container p-5" onClick={()=>{value.handleDetail(id)}}>
                                    <Link to="/details" >
                                        <img src = {img} alt = "product" className="card-img-top"></img>
                                    </Link>   
                                </div>
                                {
                                    inCart?
                                    <button className="btn btn-primary" style={{marginLeft:"auto",marginBottom:"2px",marginRight:"2px"}}>Incart</button>
                                    :
                                    <button className="btn btn-primary" onClick={()=>{value.addToCart(id)}} style={{marginLeft:"auto",marginBottom:"2px",marginRight:"2px"}}>Add to Cart</button>
                                }
                                {/* <button className="btn btn-primary" disabled={inCart?true:false} onClick={()=>{value.addToCart(id)}} style={{marginLeft:"auto",marginBottom:"2px",marginRight:"2px"}}>Add</button> */}
                                <div className = "card-footer d-flex justify-content-between">
                                    {title} <p></p> <strong>${price}</strong>
                                </div>
                            </div>     
                                )}
                        }
                    </ProductConsumer>
                                 
                </div>
            </React.Fragment>
        )
    }
}

// Product.PropTypes = {
//     product:PropTypes.shape({
//         id:PropTypes.number,
//         inCart: PropTypes.bool
//     }).isRequired
// }