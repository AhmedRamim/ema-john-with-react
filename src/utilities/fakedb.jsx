// use local Storage to manage data 
const addToCartDB = (id) => {
    let shoppingCart;
    // get the shoppingCart.......
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }
    else{
        shoppingCart = {}
    }
    // add quantity............
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = (quantity) + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1; 
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
}

const removeCartDB = (id) => {
   const storedCart = localStorage.getItem('shopping-cart')
   if(storedCart){
    const shoppingCart = JSON.parse(storedCart)
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
        }
   }
    
}

const totalPrice = (product) => {
    const reducer = (previous,current) => previous + current.price;
     const total = product.reduce(reducer,0);
     return total;
}

export  {addToCartDB,removeCartDB,totalPrice};