import React from 'react';
import './styles.css';

const Product = ({
    id,
    productName,
    productsCart,
    setProductsCart})=>{
    
    const [quantity, setQuantity] = React.useState(0)
    const [action, setAction] = React.useState("")
    const handleClickPlus = ()=>{
        setQuantity(old => old + 1)
        setAction("update")
    }

    const handleClickMinus = () => {
        if(quantity > 0){
            setQuantity(old => old - 1)
            setAction("update")
        }
    }
    const updateItem = ()=>{
        const items = productsCart.filter(product =>{ return (product.id !== id && product.quantity !== 0)})
        quantity !== 0 && setProductsCart([...items,{id , productName, quantity }])
        quantity === 0 && setProductsCart([...items])
    }
    React.useEffect( ( ) => {
        if(action === "update") {
            updateItem()
            setAction("")
        }
    }, [quantity] )
    
    return (
        <div className='productCard'>
            <h3>{productName}</h3>
            <div className='btnsContainer'>
                <button className='plusBtn' onClick={()=>handleClickPlus()}>+</button>
                <span className='qty'>{quantity}</span>
                <button className='minusBtn' disabled={quantity === 0} onClick={()=>handleClickMinus()}> - </button>
            </div>
        </div>
    )
}

export default Product