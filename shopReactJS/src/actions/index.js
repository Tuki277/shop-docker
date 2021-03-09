import * as Types from './../constants/ActionTypes'
import callApi from './../utils/apiCall'

export const actionAddProductRequest = (products) => {
    return dispatch => {
        return callApi('products', 'POST', products).then(res => {
            dispatch(actionAddProduct(res.data))
        })
    }
}

export const actionAddProduct = (products) => {
    return {
        type: Types.ADD_PRODUCT,
        products
    }
}

export const actionUpdateProductRequest = (products) => {
    console.log(products)
    return dispatch => {
        return callApi(`products/${products.id}/edit`, 'PUT', products).then(res => {
            dispatch(actionUpdateProduct(res.data));
        });
    }
}

export const actionUpdateProduct = (products) => {
    return {
        type : Types.EDIT_PRODUCT,
        products
    }
}

export const actionFetchProductsRequest = () => {
    return dispatch => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actionFetchProducts(res.data))
        })
    }
}

export const actionFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

export const actionGetProductByIdRequest = (id) => {
    return dispatch => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
            dispatch(actionGetProductById(res.data))
        })
    }
}

export const actionGetProductById = (product) => {
    return {
        type: Types.GET_PRODUCT_BY_ID,
        product
    }
}

export const actionDeleteProductRequest = (id) => {
    return dispatch => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actionDeleteProduct(res.data))
        })
    }
}

export const actionDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const actionGetProductInCartRequest = () => {
    return dispatch => {
        return callApi('cart/products', 'GET', null).then(res => {
            dispatch(actionGetProductInCart(res.data))
        })
    }
}

export const actionGetProductInCart = (cart) => {
    return {
        type : Types.GET_ALL_PRODUCTS_IN_CART,
        cart
    }
}

export const actionAddProductToCart = (products, quantity) => {
    return {
        type: Types.ADD_PRODUCTS_TO_CART,
        products,
        quantity
    }
}

export const actionDeleteProductInCart = (products) => {
    return {
        type: Types.DELETE_PRODUCT_IN_CART,
        products
    }
}

export const actDeleteProductInCartAdminRequest = (id) => {
    return dispatch => {
        return callApi(`cart/products/${id}`, 'DELETE', null).then(res =>{
            dispatch(actDeleteProductInCartAdmin(id));
        })
    }
}

export const actDeleteProductInCartAdmin = (id) => {
    return {
        type : Types.DELETE_PRODUCT_IN_CART_ADMIN,
        id
    }
}

export const checkoutRequest = (products) => {
    return dispatch => {
        return callApi('cart/products', 'POST', products).then(res => {
            dispatch(checkout(res.data))
        })
    }
}

export const checkout = (products) => {
    return {
        type : Types.CHECKOUT,
        products
    }
}