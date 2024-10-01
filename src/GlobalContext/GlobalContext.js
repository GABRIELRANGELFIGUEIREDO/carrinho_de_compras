import React from 'react'

export const GlobalContext = React.createContext()

export const GlobalStorage = ({children})=>{
    const products = [
        {id:"0",name:"Cebola",quantity:0},
        {id:"1",name:"Maçã",quantity:0},
        {id:"2",name:"Laranja",quantity:0},
        {id:"3",name:"Sabão em pó",quantity:0}
    ]
    const [productsCart, setProductsCart] =  React.useState([])
    return(
        <GlobalContext.Provider value={{products , productsCart,setProductsCart}}>
            {children}
        </GlobalContext.Provider>
    )
}