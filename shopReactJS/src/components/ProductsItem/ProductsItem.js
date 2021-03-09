import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ProductsItem extends Component {
    render() {
        var { product } = this.props
        return (
            <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                <div className="block-4 text-center border">
                    <figure className="block-4-image">
                        <Link to= {`product/${product.product_id}`}>
                            <img src={ product.image } alt="Image placeholder" className="img-fluid" />
                        </Link>
                    </figure>
                    <div className="block-4-text p-4">
                        <h3>
                            <Link to= {`product/${product.product_id}`}>
                                { product.name }
                            </Link>
                        </h3>
                        <p className="text-primary font-weight-bold">$ { product.price }</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductsItem