import * as Types from './../constants/ActionTypes'

var data = JSON.parse(localStorage.getItem('CART'))
var initialState = data ? data : []

var findProductInCart = (cart, product) => {
    console.log('product ================ ', product)
    console.log('cart ================ ', cart)
    var index = -1 // = -1 là không tìm thấy
    if(cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].products[i].product_id === product[i].product_id) {
                index = i
                break
            }
        }
    }
    return index
}

var findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    });
    return result;
}

var cart = (state = initialState, action) => {
    var { products, quantity, id } = action
    var index = -1
    switch(action.type) {
        case Types.GET_ALL_PRODUCTS_IN_CART :
            state = action.cart.rows
            return [...state]
        case Types.DELETE_PRODUCT_IN_CART_ADMIN:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_PRODUCTS_TO_CART:
            index = findProductInCart(state, products)
            if (index !== -1) {
                state[index].quantity += quantity
            } else {
                state.push({
                    products : products,
                    quantity : quantity
                })
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        case Types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, products)
            console.log({ index })
            if (index !== -1) {
                state.splice(index, 1)
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        case Types.EDIT_PRODUCT:
            index = findIndex(state, products.id);
            state[index] = products
            return [...state]
        default :
            return [...state]
    }
}

export default cart