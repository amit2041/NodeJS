function calculateTotal(products){
    let total = 0;
    products.forEach((product)=>{
        total+= product.quantity * product.quantity;
    })
}

const productList = [
    {name: "Shoes", price: 50, quantity: 2},
    {name: "Hat", price: 25, quantity: 1},
    {name: "Gloves", price: 30, quantity: 2}
];

function printTotalValue(value){
    console.log(value);
};

//Expected result = 100+25+60 = 185
const grandTotal = calculateTotal(productList);
printTotalValue(grandTotal);