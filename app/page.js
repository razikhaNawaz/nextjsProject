"use client"
import axios from 'axios';
import React, { useState } from 'react';

const Page = () => {
  const[images,setImages]=useState([]);

  const getRequest=async function(){
    try{
      const response=await axios.get('https://picsum.photos/v2/list')
      const data=response.data;
    setImages(data)
    }catch(error){
      console.log(error)
    }
    
  }
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1>This is the home page</h1>
      <button onClick={getRequest} className='px-5 py-5 bg-green-800 flex justify-center items-center rounded'>
        Get images
      </button>
      <div>
         {images.length > 0 && (
        <div>
          {images.map((elem, i) => {
            return (
              <img
                key={i}
                src={elem.download_url}
                width={300}
                height={300}
                className='m-10 inline-block'
                alt={`Image ${i}`}
              />
            );
          })}
        </div>
      )}
      </div>
    </div>
  );
};

export default Page;
