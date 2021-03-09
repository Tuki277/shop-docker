import React, { Component } from 'react'

class CartItem extends Component {

    showTotalPrice = (price, quantity) => {
        return price * quantity
    }

    onDeleteProductInCartFunc = (products) => {
        var { onDeleteProductInCart } = this.props
        onDeleteProductInCart(products)
    }

    render () {
        var { item } = this.props
        return (
            <tr>
                <td className="product-thumbnail">
                    <img src={ item.products[0].image } alt="Image" className="img-fluid" />
                </td>
                <td className="product-name">
                    <h2 className="h5 text-black">{  item.products[0].name }</h2>
                </td>
                <td>$ { item.products[0].price }</td>
                <td>
                    <div className="input-group mb-3" style={{ maxWidth: 120 }}>
                        <div className="input-group-prepend">
                            {/* <button className="btn btn-outline-primary js-btn-minus" type="button">−</button> */}
                        </div>
                        <input type="text" className="form-control text-center" defaultValue={ item.quantity } placeholder aria-label="Example text with button addon" aria-describedby="button-addon1" />
                        <div className="input-group-append">
                            {/* <button className="btn btn-outline-primary js-btn-plus" type="button">+</button> */}
                        </div>
                    </div>
                </td>
                <td>$ { this.showTotalPrice(item.products[0].price, item.quantity) } </td>
                <td>
                    <button type="button" className="btn btn-primary btn-sm" onClick = { () => this.onDeleteProductInCartFunc(item.products) }>
                        X
                    </button>
                </td>
            </tr>
        )
    }
}

export default CartItem