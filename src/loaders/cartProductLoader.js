import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async() => {
    const loadedProducts = await fetch('products.json')
    const products = await loadedProducts.json()

    const storedCart = getShoppingCart()
    const savedCart = []
    for(const id in storedCart){
        const addedProduct = products.find( pd => pd.id === id)
        if(addedProduct){
            const newQuantity = storedCart[id]
            addedProduct.quantity = newQuantity;
            savedCart.push(addedProduct)
        }
    }


    return savedCart;

}

export {
    cartProductLoader
}