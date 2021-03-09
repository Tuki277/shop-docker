import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductsItem from '../ProductsItem/ProductsItem'
import { actionFetchProductsRequest } from './../../actions/index'

class Shop extends Component {

    componentDidMount () {
        this.props.fetchAllProducts();
    }

    showProducts (products) {
        var result = null
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductsItem 
                        index={index}
                        product={product}
                        key={index}
                    />
                )
            })
        }
        return result
    }

    render() {
        var { products } = this.props
        return (
            <div>
                <div className="bg-light py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-0"><a href="index.html">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Shop</strong></div>
                        </div>
                    </div>
                </div>
                <div className="site-section">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md-9 order-2">
                                <div className="row">
                                    <div className="col-md-12 mb-5">
                                        <div className="float-md-left mb-4"><h2 className="text-black h5">Shop All</h2></div>
                                        <div className="d-flex">
                                            <div className="dropdown mr-1 ml-md-auto">
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                                    <a className="dropdown-item" href="#">Men</a>
                                                    <a className="dropdown-item" href="#">Women</a>
                                                    <a className="dropdown-item" href="#">Children</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    { this.showProducts(products) }
                                </div>
                            </div>
                            <div className="col-md-3 order-1 mb-5 mb-md-0">
                                {/* <div className="border p-4 rounded mb-4">
                                    <h3 className="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
                                    <ul className="list-unstyled mb-0">
                                        <li className="mb-1"><a href="#" className="d-flex"><span>Men</span> <span className="text-black ml-auto">(2,220)</span></a></li>
                                        <li className="mb-1"><a href="#" className="d-flex"><span>Women</span> <span className="text-black ml-auto">(2,550)</span></a></li>
                                        <li className="mb-1"><a href="#" className="d-flex"><span>Children</span> <span className="text-black ml-auto">(2,124)</span></a></li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products : state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts : () => {
            dispatch(actionFetchProductsRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)