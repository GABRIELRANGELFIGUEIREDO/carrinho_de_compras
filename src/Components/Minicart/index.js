import React from "react";
import "./styles.css"
import cartIcon from '../../assets/carticon.svg'

const Minicart = ()=>{
    const [cartItems, setCartItems] = React.useState([])
    React.useEffect(()=>{
        setCartItems(["Item 1","item 2", "item 3"])
        },[])
    
    const handleClick = ()=>{
        const cart = document.querySelector(".cart")
        const divoverlay = document.querySelector(".setoverlay")
        divoverlay.classList.contains("overlay") ? divoverlay.classList.remove("overlay") :divoverlay.classList.add("overlay")
        const hasAtt = cart.getAttribute("open")
        hasAtt ? cart.removeAttribute("open"): cart.setAttribute("open",true);
        setTimeout(()=>cart.style.left = "33%",1000)
    }   


    return(
        <div className="minicartContainer">
            <img className="cartIcon" src={cartIcon} alt="cart icon" width={24} height={24} onClick={handleClick}/>
            <div className="setoverlay">
            </div>
            <dialog className="cart">
            <label >Carrinho de Compras</label>
                {
                    cartItems.map((item)=>{
                        return(<div>
                            {item}
                        </div>)
                    })
                }
            </dialog>
        </div>
    )
}  
export default Minicart