import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalText } from "../context-api";
export default function DisplayItem() {
  const { id } = useParams();
  const { curData, setCurData, loading, setLoading, handleAddItem } =
    useContext(GlobalText);
  async function fetchData() {
    setLoading(true);
    try {
      const item = await fetch(`https://dummyjson.com/products/${id}`);
      const itemData = await item.json();
      setCurData(itemData);
      setLoading(false);
    } catch (err) {
      console.log(err.msg);
    }
  }
  useEffect(() => {
    setCurData();
    fetchData();
  }, []);
  if (loading || !curData || !curData.images || curData.images.length === 0) {
    return null; // or render a loading indicator
  }

  return (
    <div className="ImgContainer">
     
      <img src={curData.images[0]} alt="" />
      <div>
        <h1 className="text-3xl my-[4px]">{curData.title}</h1>
        <h1 className="text-3xl my-[4px]"> $ {curData.price}</h1>
        <h3 className="text-3xl my-[20px]">

          Category :{" "}
          {curData.category &&
            curData.category.charAt(0).toUpperCase() +
              curData.category.slice(1)}
        </h3>
        <h5  className="text-xl my-[20px]">{curData.description}</h5>
        <button onClick={() => handleAddItem(id)}>Add To Cart</button>
      </div>
    </div>
  );
}
