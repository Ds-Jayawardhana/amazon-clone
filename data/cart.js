export let cart= JSON.parse(localStorage.getItem('cart'));

if(!cart) {
  cart = [{
    productId:'04701903-bc79-49c6-bc11-1af7e3651358',
    quantity:4,
    deliveryOptionId:'1'
  },{
    productId:'58b4fc92-e98c-42aa-8c55-b6b79996769a',
    quantity:1,
    deliveryOptionId:'2'
  }]; 
}



function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}


export function addToCart(productId){
    let matchingItem;
  
        cart.forEach((item)=>{
          if(productId===item.productId){
            matchingItem=item;
          }
        });
  
        if(matchingItem){
          matchingItem.quantity+=1
        }else{
          cart.push({
            productId:productId,
            quantity:1,
            deliveryoptionId:'2',
          });
          
  
        }
        saveToStorage();
  }

export function removeFromCart(productId){
const newCart=[];

  cart.forEach((item)=>{ 
    if(item.productId !== productId){
      newCart.push(item);
    }
  });
    cart = newCart;
    saveToStorage();
  }

export function updateDeliveryOption(productId,deliveryOptionId){
    let matchingItem;

    cart.forEach((item)=>{
      if(productId===item.productId){
        matchingItem=item;
      }
    });

    matchingItem.deliveryOptionId=deliveryOptionId; 
    saveToStorage();

  }
  