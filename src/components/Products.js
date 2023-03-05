import React, { useState } from 'react'
import Product from './Product'
import '../styles/products.css'
import PanelView from './PanelView'

const Products = ({products, sortResults, setSortResults}) => {

 const [view, setView] = useState("grid");

 const sortProducts = () => {
    switch (sortResults) {
        case 'A-Z':
            return products.sort((a, b) => a.title.localeCompare(b.title));

        case 'Z-A':
            return products.sort((a, b) => b.title.localeCompare(a.title));
        
        case 'Lowest to Heighest':
            return products.sort((a, b) => a.price - b.price);
        
        case 'Heighest to Lowest':
            return products.sort((a, b) => b.price - a.price);
    
        default:
            return products.sort((a, b) => a.title.localeCompare(b.title));
    }
 }

  return (
    <div className='products-view'>
        <PanelView quantity={products.length} setView={setView} sortResults={sortResults} setSortResults={setSortResults}/>
        <div className={`${view}`}>
            {
                products && sortProducts().map(product => <Product view={view} product={product}/>)
            }
        </div>
    </div>
  )
}

export default Products