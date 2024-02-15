import { useState, useEffect, createContext } from "react";
import useLocalStroage from "../components/custom-hook";
export const GlobalText = createContext(null);

export default function GlobalState({ children }) {
  const [data, setData] = useState([]);
  const [curData, setCurData] = useState({});
  const [loading, setLoading] = useState(false);
  const [cartData, setCartData] = useLocalStroage({
    key: "cartData",
    value: [],
  });
  const [price, setPrice] = useLocalStroage({
    key:"price",
    value: [],
  });
  const [allCnt, setAllCnt] = useState([]);
  const [cost,setCost] = useState(0);
  async function fetchSingleData(id) {
    try {
      const item = await fetch(`https://dummyjson.com/products/${id}`);
      const itemData = await item.json();
   
      if(cartData.indexOf(itemData) === -1){
        setCartData((prev) => [...prev, itemData]);
        setPrice(prev => [...prev,{id:itemData.id,value:1,cost:itemData.price}])
      }
    } catch (err) {
      console.log(err.msg);
    }
  }
 
  useEffect(()=>{
    handleCost();
  },[price])
  function handleAddItem(id) {
    fetchSingleData(id);

  }
  function handleCost(){

    if (price){
      var tempPrice =0;
      for(const element of price){
        tempPrice+=(element.value*element.cost);
      }
      setCost(tempPrice);
      }
    else  setCost(0)

  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("https://dummyjson.com/products");
        const result = await data.json();
        setData(result.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  function handleDeleteCartData(gnId) {
    setCartData(prev=>prev.filter((element)=>element.id!==gnId))
  }
  function handleDeletePriceData(gnId){
    setPrice(prev=>prev.filter((element)=>element.id!==gnId))


  }

  return (
    <GlobalText.Provider
      value={{
        data,
        setData,
        curData,
        setCurData,
        loading,
        setLoading,
        handleAddItem,
        cartData,
        setCartData,
        price,
        setPrice,
        allCnt,
        setAllCnt,
        handleDeleteCartData,
        cost,
        setCost,
        handleCost,
        handleDeletePriceData
      }}
    >
      {children}
    </GlobalText.Provider>
  );
}
