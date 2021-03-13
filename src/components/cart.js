function Cart (prop){
    console.log("prop value is",prop.orders)
    let yash = prop.orders
    let xyz = prop.setorder

    
    return(
        <div className="cart">
            <h2 className="head"> YOUR CART</h2>
           {
               
               yash.map((jaja)=>{
                    function remove(cart){
                        xyz(yash.filter((product)=>product!== cart))
                    }
                    return(
                   <>
                   <div className="cartt"> 
                     <div className="imgdiv">
                         <img src={jaja.image} alt=""/>
                     </div>
                     <div className="desc">
                      <h2>{jaja.FoodName}</h2>
                      <h2>{jaja.discription}</h2>
                      <h2>{jaja.price}</h2>
                     </div>
                     <div className="btn">
                         <button className="btnrem"  onClick={()=>remove(jaja)}>
                             Remove
                         </button>
                     </div>
                     </div>
                   </>
                   )
               })
           }

        </div>
    )
}

export default Cart;