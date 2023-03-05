import React from 'react'
import '../styles/product.css'

const Product = ({product, view}) => {
  
  const productClass = view === 'list' && 'list-product';
  const productImageClass = view === 'list' && 'list-product-image';

  return (
    <div className={`product ${productClass}`}>
        <img className={`product-image ${productImageClass}`} src={product.image.src} alt={product.image.alt} />
        <div className='product-info'>
            <span className='product-title'>{product.title}</span>
            <span>{product.product_type}</span>
            <span>Quantity sold: {product.quantitySold}</span>
            <div className='product-variant'>
                <span>{product.variantTitle}</span>
                <span>$ {product.price}</span>
            </div>
        </div>
        
    </div>
  )
}

export default Product