import items from "../components/orders"

function Body(prop){

    

   function clickhandler(food){
       let temp = prop.orders
      prop.setorder([...temp,food])
       
   }
   console.log(prop.orders)
   


    return(
        <>
        <div className="items">
        <div >
            <h3>{items[0].FoodName}</h3>
            <img src={items[0].image} alt=""/>
            <h4>{items[0].price}</h4>
            <p>{items[0].discription}</p>
            <button onClick={()=> clickhandler(items[0])}>Order Now</button>
        </div>
        <div>
            <h3>{items[1].FoodName}</h3>
            <img src={items[1].image} alt=""/>
            <h4>{items[1].price}</h4>
            <p>{items[1].discription}</p>
            <button onClick={()=>clickhandler(items[1])} >Order Now</button>
        </div>
        <div>
            <h3>{items[2].FoodName}</h3>
            <img src={items[2].image} alt=""/>
            <h4>{items[2].price}</h4>
            <p>{items[2].discription}</p>
            <button onClick={()=>clickhandler(items[2])} >Order Now</button>
        </div>
        <div>
            <h3>{items[3].FoodName}</h3>
            <img src={items[3].image} alt=""/>
            <h4>{items[3].price}</h4>
            <p>{items[3].discription}</p>
            <button onClick={()=>clickhandler(items[3])}>Order Now</button>
        </div>
        <div>
            <h3>{items[4].FoodName}</h3>
            <img src={items[4].image} alt=""/>
            <h4>{items[4].price}</h4>
            <p>{items[4].discription}</p>
            <button onClick={()=>clickhandler(items[4])}>Order Now</button>
        </div>
        </div>
        
        </>
    )
    
}

export default Body;
