import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Menu from '../Menu/Menu'
import { connect } from 'react-redux'

class Header extends Component {

    showQuantity = (cart) => {
        var result = 0
        if ( cart.length > 0 ) {
            for ( var i = 0; i < cart.length; i++ ) {
                result += cart[i].quantity
            }
        }
        return result
    }

    render() {
        var { cart } = this.props
        return (
            <header className="site-navbar" role="banner">
                <div className="site-navbar-top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
                                <form action className="site-block-top-search">
                                    <span className="icon icon-search2" />
                                    <input type="text" className="form-control border-0" placeholder="Search" />
                                </form>
                            </div>
                            <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
                                <div className="site-logo">
                                    <a href="/" className="js-logo-clone">Shoppers</a>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 order-3 order-md-3 text-right">
                                <div className="site-top-icons">
                                    <ul>
                                        <li>
                                            <Link to = {'/admin'}>
                                                <span className="icon icon-person" />
                                                </Link>
                                            </li>
                                        <li>
                                            <Link to = {'/cart'} className="site-cart">
                                                <span className="icon icon-shopping_cart" />
                                                <span className="count"> { this.showQuantity(cart) } </span>
                                            </Link>
                                        </li>
                                        <li className="d-inline-block d-md-none ml-md-0"><a href="#" className="site-menu-toggle js-menu-toggle"><span className="icon-menu" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="site-navigation text-right text-md-center" role="navigation">
                    <div className="container">
                        <Menu />
                    </div>
                </nav>
            </header>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart : state.cart
    }
}

export default connect(mapStateToProps, null)(Header)