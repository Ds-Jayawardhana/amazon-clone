export const cart=[{
  productId:'04701903-bc79-49c6-bc11-1af7e3651358',
  quantity:4,
},{
  productId:'58b4fc92-e98c-42aa-8c55-b6b79996769a',
  quantity:1
}]; 



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
            quantity:1
          });
          
  
        }
    
  };
  