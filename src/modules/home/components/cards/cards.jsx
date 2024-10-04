import "./cards.css"
import React from 'react'

function Cards() {
  return (
    <div className="card">
        <div className="singlecardwrapper">
            <div className="discount"><p>-18%</p></div>
            <div className="imgcontainer">
                <img className="firstimage" src="https://ecomposer-khoapham.myshopify.com/cdn/shop/files/Rectangle142497_4_720x.png?v=1726044420" alt="" />
                <img className="secondimage" src="https://ecomposer-khoapham.myshopify.com/cdn/shop/files/Rectangle142497_5_720x.png?v=1726044420" alt="" />
            </div>
            <div className="product">BACKPACK LAPTOP SLEEVE</div>
            <div className="price">price</div>
            <div className="addtocartbtn">ADD TO CART</div>
        </div>
        <div className="singlecardwrapper">
            <div className="discount"><p>-18%</p></div>
            <div className="imgcontainer">
                <img className="firstimage" src="https://ecomposer-khoapham.myshopify.com/cdn/shop/files/Rectangle142497_4_720x.png?v=1726044420" alt="" />
                <img className="secondimage" src="https://ecomposer-khoapham.myshopify.com/cdn/shop/files/Rectangle142497_5_720x.png?v=1726044420" alt="" />
            </div>
            <div className="product">name</div>
            <div className="price">price</div>
            <div className="addtocartbtn">btn</div>
        </div>
        <div className="singlecardwrapper">
            <div className="discount"><p>-18%</p></div>
            <div className="imgcontainer">
                <img className="firstimage" src="https://ecomposer-khoapham.myshopify.com/cdn/shop/files/Rectangle142497_4_720x.png?v=1726044420" alt="" />
                <img className="secondimage" src="https://ecomposer-khoapham.myshopify.com/cdn/shop/files/Rectangle142497_5_720x.png?v=1726044420" alt="" />
            </div>
            <div className="product">name</div>
            <div className="price">price</div>
            <div className="addtocartbtn">btn</div>
        </div>
    </div>
  )
}

export default Cards
