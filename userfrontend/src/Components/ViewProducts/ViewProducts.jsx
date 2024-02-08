import React from 'react'
import './ViewProducts.css'
import all_product from '../Assets/all_product'
import Item from '../Item/Item'

const ViewProducts = () => {
  return (
    <div className='view-products'>
      <h1>ALL PRODUCTS</h1>
      <hr />
      <div className="view-product-item">
        {all_product.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default ViewProducts