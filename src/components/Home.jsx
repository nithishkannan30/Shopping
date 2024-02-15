import React, {  useContext } from 'react'
import ImageComponent from './ImageComponent';
import { GlobalText } from '../context-api';
const Home = () => {
   const {data} = useContext(GlobalText);
   console.log(data)
  return (
    <div className='Home'>
     {data.map((item, key) => (
        <div key={key}>
          <ImageComponent image={item.images[0]} title={item.title} id={item.id}/>
        </div>
      ))}
    </div>
  )
}

export default Home
