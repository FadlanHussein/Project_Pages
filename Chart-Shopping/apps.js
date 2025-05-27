const  addToCartButtons= document.querySelectorAll(".Add-To-Cart")
const cartItems=document.getElementById("cart-items")
const totalElement=document.getElementById("Total")

let cart=[]
let total=0;
console.log(addToCartButtons)
addToCartButtons.forEach(button=>{
     console.log(button)
    button.addEventListener("click",()=>{
        const productName=button.getAttribute("data-name")
        const productPrice=parseInt(button.getAttribute("data-price"))
        cart.push({name:productName,price:productPrice})
        total +=productPrice
        renderCart()
    })
})

function removeFromCart(index){
    total -= cart[index].price
    cart.splice(index,1)

    renderCart()
}

function renderCart(){
    cartItems.innerHTML = ""
cart.forEach((item,index)=>{
    const li = document.createElement("li")
    li.innerHTML =`${item.name} $${item.price.toFixed(0)} <button onclick="removeFromCart(${index})">Remove</button>`
    cartItems.appendChild(li)
})
totalElement.innerText=`Total: $${total.toFixed(0)}`
}