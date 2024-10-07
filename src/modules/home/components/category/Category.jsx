import React from 'react'
import categories from "../../../../utils/categories/Categories.json"
import "./Category.css"
function Category() {
  console.log(categories.Items)
  return (
    
    <div>
      <div className="categorywrapper">
        <div className="categorycontainer">
          {categories.Items.map((item, index) => (
            <div className="category" key={index}>
              <img src={item.imgUrl} alt="" />
              <h3>{item.name}</h3>
            </div>
          ))}
          
          
        </div>
      </div>
    </div>
  )
}

export default Category



{/* <div className="category">
            <img src="https://ecomposer-khoapham.myshopify.com/cdn/shop/collections/Rectangle_142493_535x.png?v=1725510438" alt=""   />
            <h3>ELECTRONICS</h3>
          </div>
          <div className="category">
            <img src="	https://ecomposer-khoapham.myshopify.com/cdn/shop/collections/Rectangle_142494_535x.png?v=1725510456" alt=""   />
            <h3>BACKPACKS & BAGS</h3>
          </div>
          <div className="category">
            <img src="https://ecomposer-khoapham.myshopify.com/cdn/shop/collections/Rectangle_142495_535x.png?v=1725510479" alt=""   />
            <h3>CLOTHING</h3>
          </div> */}