import React from "react";
import "./styles.css"
import cartIcon from '../../assets/carticon.svg'
import { GlobalContext } from "../../GlobalContext/GlobalContext";

const Minicart = ()=>{
    const { productsCart, setProductsCart } = React.useContext(GlobalContext)

    const handleClick = ()=>{
        const cart = document.querySelector(".cart")
        const hasAtt = cart.getAttribute("open")
        hasAtt ? cart.removeAttribute("open"): cart.setAttribute("open",true);
    }

    const handleClickRemove = (e)=>{
        e?.preventDefault()
        console.log("removing")
        const newArrProd =  productsCart.filter(({ id }) => id !== e?.target?.id )
        setProductsCart(newArrProd)
    }

    return(
        <div className="minicartContainer">
            <img className="cartIcon" src={cartIcon} alt="cart icon" width={24} height={24} onClick={handleClick}/>
            <dialog className="cart">
            <label >Carrinho de Compras</label>
                {
                    productsCart?.map(({id, productName, quantity})=>{
                        return(
                            <div key={id} id={id} >
                                <div  style={{display:"flex", justifyContent: "space-between", alignItems:"center", marginBottom:"15px"}}>
                                    <span className="productName" >{productName}</span>
                                    <span className="productQuantity">{quantity}</span>
                                    <button  id={id} className="removeBtn"  onClick={(e)=> handleClickRemove(e) } >
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>)
                    })
                }
            </dialog>
        </div>
    )
}  
export default Minicart