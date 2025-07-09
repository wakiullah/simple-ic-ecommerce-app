
export const cartInitialValue = {
    totalProducts: 0,
    totalPrice: 0,
    cart: []
}
export const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            {
                const product = action.payload
                const isExistingIndex = state.cart?.findIndex(item => item.id === product.id);
                let updatedProduct;

                if (isExistingIndex > -1) {
                    console.log('update', isExistingIndex);
                    updatedProduct = state.cart.map(item => item.id === product.id ? { ...item, totalItem: item.totalItem + 1, } : item)
                } else {
                    updatedProduct = [...state.cart, { ...product, totalItem: 1 }]
                }

                return {
                    totalProducts: state.totalProducts + 1,
                    totalPrice: state.totalPrice + product.price,
                    cart: updatedProduct
                }
            }
        case "REMOVE_PRODUCT":
            {
                const product = action.payload
                const isExistingIndex = state.cart?.findIndex(item => item.id === product.id);
                let updatedProduct;

                if (state.cart[isExistingIndex].totalItem > 1) {
                    updatedProduct = state.cart.map(item => item.id === product.id ? { ...item, totalItem: item.totalItem - 1, } : item)
                } else {
                    updatedProduct = state.cart.filter(item => item.id !== product.id)
                }
                return {
                    totalProducts: state.totalProducts - 1,
                    totalPrice: state.totalPrice - product.price,
                    cart: updatedProduct
                }
            }
        case "DELETE_PRODUCT":
            {
                const product = action.payload
                const isExistingIndex = state.cart?.findIndex(item => item.id === product.id);
                let updatedProduct;
                console.log(isExistingIndex);


                if (isExistingIndex > -1) {
                    updatedProduct = state.cart.filter(item => item.id !== product.id)
                } else {
                    updatedProduct = [...state.cart]
                }
                return {
                    totalProducts: state.totalProducts - state.cart[isExistingIndex].totalItem,
                    totalPrice: state.totalPrice - product.price * state.cart[isExistingIndex].totalItem,
                    cart: updatedProduct
                }
            }
    }
}