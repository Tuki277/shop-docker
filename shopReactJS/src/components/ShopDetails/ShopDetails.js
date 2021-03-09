import React, { Component } from 'react'

class ShopDetails extends Component {

    onAddProductToCart = (products) => {
        this.props.onAddProductToCart(products)
    }

    render() {
        var { products } = this.props

        return (
            <div>
                <div className="bg-light py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-0"><a href="/">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">{ products[0].name }</strong></div>
                        </div>
                    </div>
                </div>
                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={ products[0].image } alt="Image" className="img-fluid" />
                            </div>
                            <div className="col-md-6">
                                <h2 className="text-black">{ products[0].name }</h2>
                                <p> Chi Tiết : { products[0].detail }</p>
                                <p className="mb-4">Màu sắc : { products[0].color }</p>
                                <p> Size : { products[0].size }</p>
                                <p><strong className="text-primary h4">${ products[0].price }</strong></p>
                                <div className="mb-1 d-flex">
                                    {/* <label htmlFor="option-sm" className="d-flex mr-3 mb-3">
                                        <span className="d-inline-block mr-2" style={{ top: '-2px', position: 'relative' }}><input type="radio" id="option-sm" name="shop-sizes" /></span> <span className="d-inline-block text-black">Small</span>
                                    </label>
                                    <label htmlFor="option-md" className="d-flex mr-3 mb-3">
                                        <span className="d-inline-block mr-2" style={{ top: '-2px', position: 'relative' }}><input type="radio" id="option-md" name="shop-sizes" /></span> <span className="d-inline-block text-black">Medium</span>
                                    </label>
                                    <label htmlFor="option-lg" className="d-flex mr-3 mb-3">
                                        <span className="d-inline-block mr-2" style={{ top: '-2px', position: 'relative' }}><input type="radio" id="option-lg" name="shop-sizes" /></span> <span className="d-inline-block text-black">Large</span>
                                    </label>
                                    <label htmlFor="option-xl" className="d-flex mr-3 mb-3">
                                        <span className="d-inline-block mr-2" style={{ top: '-2px', position: 'relative' }}><input type="radio" id="option-xl" name="shop-sizes" /></span> <span className="d-inline-block text-black"> Extra Large</span>
                                    </label> */}
                                </div>
                                {/* <div className="mb-5">
                                    <div className="input-group mb-3" style={{ maxWidth: 120 }}>
                                        <div className="input-group-prepend">
                                            <button className="btn btn-outline-primary js-btn-minus" type="button">−</button>
                                        </div>
                                        <input type="text" className="form-control text-center" defaultValue={1} placeholder aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-primary js-btn-plus" type="button">+</button>
                                        </div>
                                    </div>
                                </div> */}
                                <p>
                                    <a style= {{ color : 'white' }}
                                        className="buy-now btn btn-sm btn-primary"
                                        onClick = { () => this.onAddProductToCart(products) }
                                    >
                                        Add To Cart
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopDetails