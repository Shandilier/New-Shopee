import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
export default class ProductDetail extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <ProductConsumer>
                    {
                        value =>{
                            // console.log(value.detailProduct);
                            const {id,title,img,inCart,price,info} = value.detailProduct;
                            return(
                                <React.Fragment>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="img-container p-5" style={{marginLeft:"10rem"}}>
                                                    <img src={img}></img>
                                                </div>

                                                <table>
                                                    <tr>
                                                    <td>
                                                    <Link to ="/products" className="btn btn-primary"  style={{marginLeft:"15rem"}}>Back to Products</Link></td>
                                                    <td><Link to ="/cart" className="btn btn-primary"  style={{marginLeft:"2rem"}}>Add to Cart</Link></td>
                                                    
                                                    </tr>
                                                </table>
                                                    
                                            </div>
                                            <div className="col-sm-4">
                                                <p style = {{marginTop:"5rem"}}>Name: <strong>{title}</strong> </p>   
                                                <p>Price: <strong>${price}</strong></p>
                                                <p>Detail: <strong>{info}</strong></p>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                </React.Fragment>
                            )
                        }
                    }
                </ProductConsumer>
            </div>
        )
    }
}
