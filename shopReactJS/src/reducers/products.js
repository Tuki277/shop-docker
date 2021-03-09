import * as Types from './../constants/ActionTypes';
var initialState = [];

const products = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_PRODUCTS :
            state = action.products.rows
            return [...state]
        case Types.GET_PRODUCT_BY_ID :
            state = action.product.rows
            return [...state]
        default:
            return [...state]
    }
}

export default products