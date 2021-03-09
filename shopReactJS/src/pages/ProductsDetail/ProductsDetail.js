import React, { Component } from 'react'
import ShopDetails from './../../components/ShopDetails/ShopDetails'
import { connect } from 'react-redux'
import { actionGetProductByIdRequest, actionAddProductToCart } from './../../actions/index'

class ProductsDetails extends Component {

    componentDidMount() {
        var { match } = this.props
        if (match) {
            var id = match.params.id
            this.props.getProduct(id)
        }
    }

    render () {
        return (
            <div>
                <ShopDetails
                    products = { this.props.products }
                    onAddProductToCart = { this.props.onAddProductToCart }
                />
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
        getProduct : (id) => {
            dispatch(actionGetProductByIdRequest(id))
        },
        onAddProductToCart: (product) => {
            dispatch(actionAddProductToCart(product, 1))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductsDetails)