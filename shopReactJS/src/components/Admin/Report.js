import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionGetProductInCartRequest, actDeleteProductInCartAdminRequest } from '../../actions'

class Report extends Component {

    componentDidMount () {
        this.props.getAllProductsIntCart()
    }

    deleteCart = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.deleteProductInCart(id)
        }
    }

    showReport = (cart) => {
        var result = null
        if ( cart.length > 0 ) {
            result = cart.map((cart, index) => {
                return (
                    <tr>
                        <td> { cart.name } </td>
                        <td> { cart.address } </td>
                        <td> { cart.phone } </td>
                        <td> { cart.orders } </td>
                        <td> { cart.quantity } </td>
                        <td> { cart.price } </td>
                        <td> { cart.totalPrice } </td>
                        <td> { cart.note } </td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick = { () => this.deleteCart(cart.cart_id) }
                            >
                                X
                            </button>
                        </td>
                    </tr>
                )
            })
        }
        return result
    }

    render() {
        var { cart } = this.props
        console.log(this.props)
        return (
            <div className="site-wrap">
                <div className="site-section">
                    <div className="container">
                        <div className="row mb-5">
                            <form className="col-md-12" method="post">
                                <div className="site-blocks-table">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Address</th>
                                                <th>Phone</th>
                                                <th>Product</th>
                                                <th>Quantity</th>
                                                <th>Price Products </th>
                                                <th>Total Price</th>
                                                <th>Note</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { this.showReport(cart) }
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
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
        getAllProductsIntCart : () => {
            dispatch(actionGetProductInCartRequest())
        },
        deleteProductInCart : (id) => {
            dispatch(actDeleteProductInCartAdminRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Report)