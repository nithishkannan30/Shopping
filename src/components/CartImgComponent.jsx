import { IoIosAdd } from "react-icons/io";
import { useContext, useEffect } from "react";
import { IoIosRemove } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";
import { GlobalText } from "../context-api";
import useLocalStroage from "./custom-hook";
export default function CartImgComponent({ item }) {
  const [cnt, setcnt] = useLocalStroage({ key: item.id, value: 1 });
  const { handleDeleteCartData, setPrice, handleCost, handleDeletePriceData } = useContext(GlobalText);
  useEffect(()=>{
    setPrice(prev => prev.map(element =>
      element.id === item.id ? { ...element, value: cnt } : element
  ));
  
  },[cnt])
  return (
    <div className="image-cart-container">
      <CiCircleRemove
        onClick={() => {
          window.localStorage.removeItem(item.id);
          handleDeleteCartData(item.id);
          handleDeletePriceData(item.id);
        }}
        className="relative  top-2  ml-auto"
        size={33}
      />
      <img src={item.images[0]} alt="img" />
      <h4 className="text-xl my-[3px] font-bold">
        {item.title.length > 10 ? item.title.slice(0, 10) + "... " : item.title}
      </h4>
      <h6 className="text-xl my-[3px]">
        {" "}
        Price <span className=" font-bold">${item.price}</span>
      </h6>
      <p className=" font-bold">{cnt}</p>
      <div className="relative">
        <button onClick={() =>{setcnt(cnt + 1);   handleCost(); }}>
          <IoIosAdd
            size={20}
            className="absolute top-[2px] left-[36%]  text-black"
          />
        </button>
        <button
          className="absolute  left-[45%] mx-auto text-black"
          onClick={() => {
            cnt > 0 && setcnt(cnt - 1);
            handleCost();
            
          }}
        >
          <IoIosRemove size={20} />
        </button>
      </div>
    </div>
  );
}
