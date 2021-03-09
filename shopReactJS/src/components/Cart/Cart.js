import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CartResult from '../CartResult/CartResult'

class Cart extends Component {
    render() {
        return (
            <div>
                <div className="bg-light py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-0"><a href="/">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Cart</strong></div>
                        </div>
                    </div>
                </div>
                <div className="site-section">
                    <div className="container">
                        <div className="row mb-5">
                            <form className="col-md-12" method="post">
                                <div className="site-blocks-table">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">Image</th>
                                                <th className="product-name">Product</th>
                                                <th className="product-price">Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-total">Total</th>
                                                <th className="product-remove">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                            { this.props.children }

                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row mb-5">
                                    <div className="col-md-6">
                                        <Link to={'/products'}>
                                            <button className="btn btn-outline-primary btn-sm btn-block">Continue Shopping</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            
                            <CartResult totalPrice = { this.props.children[1] } />

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Cart