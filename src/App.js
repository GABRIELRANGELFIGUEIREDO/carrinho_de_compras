import React from 'react';
import './App.css';
import Header from './Components/Header';
import { GlobalContext } from './GlobalContext/GlobalContext';
import Product from './Components/Product';
function App() {
    const {
        products,
        setProducts,
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
                    qty={product.quantity}
                    products={products}
                    setProducts={setProducts}
                    productsCart={productsCart}
                    productName={product.productName}
                    setProductsCart={setProductsCart}
                    />)
            })}
        </div>
    </>
);
}
export default App;