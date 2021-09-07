const displayCartProduct = () =>{
    const cart = getCart();
    for(let product in cart){
        displayItem(product);
    }
    // console.log(cart);
}

const addItem = () =>{
    const nameField = document.getElementById('prodact-name');
    const name = nameField.value;
    // display item 
    displayItem(name);
    // add product 
    addProductToCart(name);
    nameField.value = '';
}

const displayItem = productName => {
    const product =document.getElementById("products");
    const li = document.createElement("li");
    li.innerText = productName;
    products.appendChild(li);

}

const getCart =() =>{
    const cart = localStorage.getItem("cart"); 
    let cartObj;
    if (cart){
        console.log(cart)
        cartObj = JSON.parse(cart);
    }else{
        cartObj ={};
    }

    return cartObj;
}

const addProductToCart = name =>{
    const cart = getCart();
    cart[name] = 1;
    console.log(cart)
    const cartStringifeild = JSON.stringify(cart);
    localStorage.setItem("cart", cartStringifeild);
    console.log(cartStringifeild);
}

const prodactOrder = () =>{
    localStorage.removeItem("cart");
    location.reload()
}
displayCartProduct();

