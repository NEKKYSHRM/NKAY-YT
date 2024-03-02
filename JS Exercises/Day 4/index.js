const shoppingCart = [
    {name:"ipad", price: 10500},
    {name:"watch", price: 900},
    {name:"phone", price: 8000}
]

function totalPrice(cart) {
    let netPrice = 0
    for(let item of cart) {
        netPrice += item.price;
    }
    return netPrice;
}

// Using an arrow function
const calculateTotalPriceArrow = (cart) => {
    return cart.reduce((total, item) => total + item.price, 0);
};

console.log("Your total price is: ", totalPrice(shoppingCart));
console.log("Total Price (Arrow Function):", calculateTotalPriceArrow(shoppingCart));