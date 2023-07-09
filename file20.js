const userCart=[
    {productID:1,productName:"mobile",price:12000},
    {productID:2,productName:"fridge",price:15000},
    {productID:3,productName:"tv",price:17000},
    {productID:4,productName:"AC",price:19000},
    {productID:5,productName:"Cooler",price:20000},
]
// const ans=userCart.every((cartItem)=>cartItem.price<=35000)
// console.log(ans);
const ans=userCart.some((cartItem)=>cartItem.price<=35000)
 console.log(ans);