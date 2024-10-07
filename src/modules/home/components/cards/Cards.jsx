import "./Cards.css"
import { useState, useEffect } from "react";
import data from "../../../../utils/limitedtimeoffer/Limitedtimeoffer.json"

function Cards() {


  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     setCurrentIndex(currentIndex+2 === data.Items.length - 1 ? 0 : currentIndex + 1);
  //     console.log(currentIndex, data.Items.length)
  //   }, 2000);
  // }, [currentIndex, data]);
  
  // const handleLeftArrowClick = () => {
  //   setCurrentIndex(Math.max(0,currentIndex - 1));
  // };

  // const handleRightArrowClick = () => {
  //   setCurrentIndex(Math.min(data.Items.length - 3, currentIndex + 1));
  // };

    const [currentIndex, setCurrentIndex] = useState(0);
    let intervalId;

    useEffect(() => {
    intervalId = setInterval(() => {
        setCurrentIndex(currentIndex + 2 === data.Items.length - 1 ? 0 : currentIndex + 1);
    }, 5000);
    return () => clearInterval(intervalId);
    }, [currentIndex, data]);

    const handleLeftArrowClick = () => {
    clearInterval(intervalId);
    setCurrentIndex(Math.max(0, currentIndex - 1));
    intervalId = setInterval(() => {
        setCurrentIndex(currentIndex + 2 === data.Items.length - 1 ? 0 : currentIndex + 1);
    }, 5000);
    };

    const handleRightArrowClick = () => {
    clearInterval(intervalId);
    setCurrentIndex(Math.min(data.Items.length - 3, currentIndex + 1));
    intervalId = setInterval(() => {
        setCurrentIndex(currentIndex + 2 === data.Items.length - 1 ? 0 : currentIndex + 1);
    }, 5000);
    };


  return (
    <div className="card">
      <div className="leftslide" onClick={handleLeftArrowClick}><h2>&lt;</h2></div>
      
        {/* {console.log(data.Items)} */}
        
            {data.Items.slice(currentIndex, currentIndex + 3).map((item,index)=>(
                <div className="singlecardwrapper">
                    {
                    item.discount &&
                    <div className="discount"><p>{item.discount}</p>
                    </div>
                    }
                    <div className="imgcontainer">
                        <img className="firstimage" src={item.imgUrl1} alt="" />
                        <img className="secondimage" src={item.imgUrl2} alt="" />
                    </div>
                    <div className="product">{item.name}</div>
                    <div className="price">{item.price}</div>
                    <div className="addtocartbtn">ADD TO CART</div>
                </div>
            ))}

      <div className="rightslide" onClick={handleRightArrowClick}><h2>&gt;</h2></div>

    </div>
  )
}

export default Cards
