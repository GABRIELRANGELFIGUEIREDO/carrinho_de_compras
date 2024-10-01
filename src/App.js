import React from 'react';
import './App.css';
import Header from './Components/Header';
import { GlobalContext } from './GlobalContext/GlobalContext';
import Product from './Components/Product';
function App() {
    const {
        products,
        productsCart,
        setProductsCart,
    } = React.useContext(GlobalContext)
return (
    <>
        <Header/>
        <div className='productsContainer'>
            {products?.map(product=>{
                return (<Product
                    key={product.id}
                    id={product.id}
                    productsCart={productsCart}
                    productName={product.name}
                    setProductsCart={setProductsCart}
                    />)
            })}
        </div>
    </>
);
}
export default App;