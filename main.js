let cart=document.querySelectorAll('.add_to_cart');

let products =[
    {
        name:'black-shirt',
        tag:'image1',
        price:60,
        incart:0
    },
    {
        name:'white-shirt',
        tag:'image2',
        price:50,
        incart:0
    },
    {
        name:'red-shirt',
        tag:'image3',
        price:75,
        incart:0
    },
    {
        name:'grey-shirt',
        tag:'image4',
        price:55,
        incart:0
    },
    {
        name:'black-shirt',
        tag:'image5',
        price:50,
        incart:0
    },
    {
        name:'black-shirt',
        tag:'image6',
        price:50,
        incart:0
    },
    {
        name:'black-shirt',
        tag:'image7',
        price:50,
        incart:0
    },
    {
        name:'black-shirt',
        tag:'image8',
        price:50,
        incart:0
    },
    {
        name:'black-shirt',
        tag:'image9',
        price:50,
        incart:0
    },
    {
        name:'black-shirt',
        tag:'image10',
        price:50,
        incart:0
    }
]


for(let i=0;i<cart.length;i++){
    cart[i].addEventListener('click',()=>{
        cartnumber(products[i]);
        cost(products[i]);
    })
}

function cartnumber(products){
    
    let productnumber = localStorage.getItem('cartnumber');
    productnumber= parseInt(productnumber);
    
    if(productnumber){
        localStorage.setItem('cartnumber',productnumber+1);
        document.querySelector('.cart span').textContent = productnumber + 1;
    }
        else{
            localStorage.setItem('cartnumber',1);
            document.querySelector('.cart span').textContent =1;
    }       

    setitems(products);
}

function setitems(products){
    let cartitems = localStorage.getItem("productsInCart");
    cartitems= JSON.parse(cartitems);


    if(cartitems != null){
        if(cartitems[products.name]== undefined){
            cartitems={
                ...cartitems,
                [products.name]:products
            }
        }
        
        cartitems[products.name].incart+=1;

    }else{
        products.incart = 1;
        cartitems = {
            [products.name]:products
        }

    }

    localStorage.setItem('productsInCart',JSON.stringify (cartitems))
}

function productnumbers(){
    let productnumber = localStorage.getItem('cartnumber');

    if(productnumber){
        document.querySelector('.cart span').textContent =productnumber;
    }

}

function cost(products){
    
    let cartcost = localStorage.getItem('CostOfCart');
    
    
    if(cartcost!=null){
        cartcost = parseInt(cartcost);
        console.log(typeof cartcost)
        localStorage.setItem('CostOfCart',cartcost + products.price);

    }else{
        cartcost = parseInt(cartcost);
        localStorage.setItem('CostOfCart',products.price);
    }

    
}

function displaycart(){
    let cartitems = localStorage.getItem("productsInCart");
    cartitems=JSON.parse(cartitems);
    let container_product = document.querySelector(".product");
    console.log(cartitems);
    let CostOfCart =localStorage.getItem("CostOfCart")

    if(cartitems && container_product){
        container_product.innerHTML=``;
        Object.values(cartitems).map(item  => {
            container_product.innerHTML += `
            <div class ="products">
                <img src="images/${item.tag}.webp">
                <span>${item.name}</span>
            </div> 
            <div class ="price">${item.price}.00</div>
            <div class = "quantity">${item.incart}</div>
            <div class="total">$${item.incart*item.price}.00</div>
            
                      
             `;
        });
        container_product.innerHTML += `
            <div class ="basketTotalTitle">
                
                <h2 class="basketTitle">
                    Basket Total:
                </h2>
                <h2 class="basketTotal">
                    $${CostOfCart}.00
                </h2> 
                <div class="checkout">
                    <button>CHECKOUT</button>
                </div>  
            </div> 
        
        `
    }
}



productnumbers();
displaycart();