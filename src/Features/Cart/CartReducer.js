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
                console.log(updatedProduct);


                return {
                    totalProducts: state.totalProducts + 1,
                    totalPrice: state.totalPrice + product.price,
                    cart: updatedProduct
                }
            }
    }
}