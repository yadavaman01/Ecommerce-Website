import React from 'react'
import "./Todayonly.css"
import data from "../../../../utils/todayonly/Todayonly.json"
function Todayonly() {
  return (
    <div style={{overflowX:"visible"}}>
      <div className="todayonlywrapper">
        <div className="todayonlycontainer">
          
          <div className="todayonlyheading">
            <h1>TODAY ONLY: 10/9 SPECIAL!</h1>
          </div>

          <div className="todaydiscount">
            <div style={{width:"95%",display:"flex", justifyContent:'flex-start', gap:"1rem", flexWrap:"wrap"}}>

            {
              data.Items.map((item,index)=>(
              <div className="goldenhour">
                <div className="goldenhourdetails">
                  <div className="mainbtn"><p>{item.name}</p></div>
                  <div><h1>UP TO</h1></div>
                  <div className='percentage'>
                    <h1>{item.discount}</h1>
                    <div>
                      <p>% 
                        <br /> 
                        OFF
                      </p>
                      </div>
                  </div>
                  <div>
                    {item.detail1} <br />{item.detail2}
                  </div>
                  <div className="button todaybtn">{item.btn}</div>
                </div>
                <div className="goldenhourimg todaydealimg">
                  <img src={item.imgUrl} alt="" />
                </div>
              </div>
            ))} 
          
            {/* <div className="flashsale">
            <div className="flashsaledetails">
                <div className="btn">GOLDEN HOUR</div>
                <div><h1>UP TO</h1></div>
                <div>
                  <h1>70</h1>
                  <div>
                    <p>% 
                      <br />
                      OFF
                    </p>
                    </div>
                </div>
                <div>
                  FOR TABLETS & OFF TECHNOLOGY <br />PRODUCTS
                </div>
                <div className="btn">SHOP NOW</div>
              </div>
              <div className="flashsaleimg todaydealimg">
                <img src="https://cdn.shopify.com/s/files/1/0623/8303/0317/files/ecom-no-replace-QpilbOyWKlimage_69.png" alt="" />
              </div>
            </div> */}

            {/* <div className="goldenhour">
              <div className="goldenhourdetails">
                <div className="mainbtn"><p>GOLDEN HOUR</p></div>
                <div><h1>UP TO</h1></div>
                <div className='percentage'>
                  <h1>70</h1>
                  <div>
                    <p>% 
                      <br /> 
                      OFF
                    </p>
                    </div>
                </div>
                <div>
                  FOR TABLETS & TECHNOLOGY <br />PRODUCTS
                </div>
                <div className="button todaybtn">SHOP NOW</div>
              </div>
              <div className="goldenhourimg todaydealimg">
                <img src="https://cdn.shopify.com/s/files/1/0623/8303/0317/files/ecom-no-replace-kWSGDGiNfT61QfSvAihfL._AC_SL1500__1.png?v=1725583956" alt="" />
              </div>
            </div> */}
            
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Todayonly
