import React from 'react'

export const GlobalContext = React.createContext()

export const GlobalStorage = ( { children } )=>{
    const [products, setProducts] = React.useState([
        {id:"0", productName:"Cebola", quantity:0},
        {id:"1", productName:"Maçã", quantity:0},
        {id:"2", productName:"Laranja", quantity:0},
        {id:"3", productName:"Sabão em pó", quantity:0}
    ])
    const [productsCart, setProductsCart] =  React.useState([])
    return(
        <GlobalContext.Provider value={{products ,setProducts, productsCart,setProductsCart}}>
            {children}
        </GlobalContext.Provider>
    )
}