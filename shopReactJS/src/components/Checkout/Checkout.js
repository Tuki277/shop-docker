import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { checkoutRequest } from '../../actions'
import Thankyou from '../Thankyou/Thankyou'

class Checkout extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name : '',
            address : '',
            phone : '',
            note : '',
            quantity : '',
            orders : [],
            price : '',
            totalPrice : 0
        }
    }

    onChange = (event) => {
        var target = event.target
        var name = target.name
        var value = target.value
        this.setState({
            [name] : value
        })
    }

    saveCart = (cart) => {
        var result = ""
        if ( cart.length > 0 ) {
            for (var i = 0; i < cart.length; i++) {
                result += String(cart[i].products[0].name) + ', '
            }
        }
        console.log(result)
        return result
    }

    onSave = (event) => {
        event.preventDefault()
        var { name, address, phone, note, orders, quantity, totalPrice, price } = this.state
        orders = this.saveCart(JSON.parse(localStorage.getItem('CART')))
        totalPrice = this.showTotalPrice(this.props.cart)
        quantity = this.showQuantity(this.props.cart)
        price = this.showPriceProduct(this.props.cart)
        var checkout = {
            name : name,
            address : address,
            phone : phone,
            note : note,
            orders : orders,
            quantity : quantity,
            price : price,
            totalPrice : totalPrice
        }
        this.props.checkout(checkout)
        localStorage.removeItem('CART')
        this.props.history.push('/thankyou')
    }

    showItemsInCart = (cart) => {
        var result = null
        if ( cart.length > 0 ) {
            result = cart.map((item, index) => {
                return (
                    <tr>
                        <td>{ item.products[0].name } <strong className="mx-2">x</strong> { item.quantity } </td>
                        <td>$ { item.products[0].price }</td>
                    </tr>
                )
            })
        }
        return result
    }

    showTotalPrice = (cart) => {
        var total = 0
        if ( cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].products[0].price * cart[i].quantity
            }
        }
        return total
    }

    showQuantity = (cart) => {
        var total = ''
        if ( cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += String(cart[i].quantity) + ', '
            }
        }
        return total
    }

    showPriceProduct = (cart) => {
        var price = ''
        if ( cart.length > 0 ) {
            for (var i = 0; i < cart.length; i++) {
                price += String(cart[i].products[0].price) + ', '
            }
        }
        return price
    }

    render() {
        var { cart } = this.props
        return (
            <div>
                <div className="bg-light py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-0"><a href="index.html">Home</a> <span className="mx-2 mb-0">/</span> <a href="cart.html">Cart</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Checkout</strong></div>
                        </div>
                    </div>
                </div>
                <form method="POST" onSubmit = { this.onSave }>
                    <div className="site-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 mb-5 mb-md-0">
                                    <h2 className="h3 mb-3 text-black">Billing Details</h2>
                                    <div className="p-3 p-lg-5 border">
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <label htmlFor="c_companyname" className="text-black">Name <span className="text-danger">*</span> </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="c_companyname"
                                                    name="name"
                                                    required
                                                    onChange = { this.onChange }
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <label htmlFor="c_address" className="text-black">Address <span className="text-danger">*</span></label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="c_address"
                                                    name="address"
                                                    placeholder="address"
                                                    required
                                                    onChange = { this.onChange }
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <label htmlFor="c_address" className="text-black">Phone <span className="text-danger">*</span></label>
                                                <input 
                                                    type="text"
                                                    className="form-control" 
                                                    id="c_address" name="phone" 
                                                    placeholder="phone" 
                                                    required
                                                    onChange = { this.onChange }
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="c_order_notes" className="text-black">Order Notes</label>
                                            <textarea
                                                name="note"
                                                id="c_order_notes"
                                                cols={30} rows={5}
                                                className="form-control"
                                                placeholder="Write your notes here..."
                                                defaultValue={""} 
                                                required
                                                onChange = { this.onChange }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row mb-5">
                                        <div className="col-md-12">
                                            <h2 className="h3 mb-3 text-black">Your Order</h2>
                                            <div className="p-3 p-lg-5 border">
                                                <table className="table site-block-order-table mb-5">
                                                    <thead>
                                                        <tr><th>Product</th>
                                                            <th>Total</th>
                                                        </tr></thead>
                                                    <tbody>
                                                        { this.showItemsInCart(cart) }
                                                        <tr>
                                                            <td className="text-black font-weight-bold"><strong>Order Total</strong></td>
                                                            <td className="text-black font-weight-bold"><strong>$ { this.showTotalPrice( cart ) } </strong></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="form-group">
                                                    {/* <Link to={'/thankyou'}> */}
                                                    <button type="submit" className="btn btn-primary btn-lg py-3 btn-block" onclick="window.location='thankyou.html'">Place Order</button>
                                                    {/* </Link> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* </form> */}
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        cart : state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        checkout : (product) => {
            dispatch(checkoutRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)