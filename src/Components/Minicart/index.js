import React from "react";
import "./styles.css"
import cartIcon from '../../assets/carticon.svg'
import { GlobalContext } from "../../GlobalContext/GlobalContext";

const Minicart = ( ) => {
    const { 
        productsCart,
        products,
        setProductsCart,
        setProducts
    } = React.useContext(GlobalContext)

    const handleClick = ()=>{
        const cart = document.querySelector(".cart")
        const hasAtt = cart.getAttribute("open")
        hasAtt ? cart.removeAttribute("open"): cart.setAttribute("open",true);
    }

    const updateQuantityItem = ( productId )=>{
        const index = products.findIndex(product => product.id === productId )
        const items = products
        items[index].quantity = 0
        setProducts([...items])
    }

    const handleClickRemove = ( { target }, productId )=>{
        const newArrProd =  productsCart.filter( ( { id } ) => id !== target?.id )
        updateQuantityItem( productId )
        setProductsCart( newArrProd )
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
                                    <div id={id} className="removeBtn"  onClick={(e)=> handleClickRemove(e,id) } >
                                    </div>
                                </div>
                            </div>)
                    })
                }
            </dialog>
        </div>
    )
}  
export default Minicart