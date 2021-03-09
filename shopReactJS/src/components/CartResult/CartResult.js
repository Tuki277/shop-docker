import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CartResult extends Component {
    render () {
        return (
            <div className="col-md-6 pl-5">
                <div className="row justify-content-end">
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-12 text-right border-bottom mb-5">
                                <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-md-6">
                                <span className="text-black">Total</span>
                            </div>
                            <div className="col-md-6 text-right">
                                <strong className="text-black">$ { this.props.totalPrice } </strong>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <Link to={'/checkout'} >
                                <button className="btn btn-primary btn-lg py-3 btn-block" onclick="window.location='checkout.html'">Proceed To Checkout</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartResult