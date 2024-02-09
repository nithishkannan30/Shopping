import React, { useState,useEffect } from 'react'
import ImageComponent from './ImageComponent';
const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data= await fetch('https://fakestoreapi.com/products');
            const result = await data.json();
            setData(result);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
      console.log(data);
  return (
    <div className='Home'>
     {data.map((item, key) => (
        <div key={key}>
          <ImageComponent image={item.image} title={item.title}/>
        </div>
      ))}
    </div>
  )
}

export default Home
