function calculateTotal(products){
    let total = 0;
    products.forEach((product) => {
        //total += product.quantity * product.quantity;
        // After Debugging we correct this above formula
        total += product.quantity * product.price;
    });
    return total;
}

const productList = [
    {name: "Shoes", price: 50, quantity: 2},
    {name: "Hat", price: 25, quantity: 1},
    {name: "Gloves", price: 30, quantity: 2}
];

const grandTotal = calculateTotal(productList);
console.log(grandTotal);