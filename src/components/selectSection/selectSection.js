"use client";
import { useState } from "react";

const SelectSection = ({data}) => {
  const [selectedBrand, setSelectedBrand] = useState("");

  const [numToShow, setNumToShow] = useState(8);

    const handleViewMore = () => {
        const increment = 4;
        setNumToShow(numToShow + increment);
    };

    const handleViewLess = () => {
        const decrement = 4;
        setNumToShow(numToShow - decrement);
    };


  const uniqueBrands = [...new Set(data.map((data) => data.brand))];
  return (
    <div className='py-3'>
      <div className='pb-5 font-bold text-xl'>
       <h1>  Select According to Brands</h1>
      </div>
      <div className='flex flex-wrap gap-10 px-7 justify-center'>
        { uniqueBrands.slice(0, numToShow).map((brand)  => (
         <div className='flex flex-col justify-center items-center gap-3'>
             <div className='h-48 w-48  border-2 hover:cursor-pointer hover:scale-110  flex items-center justify-center'>
                Logo 
             </div>
             <div>
                <span>{brand}</span>
             </div>
         </div>
         ))}
           
      </div>
        <div className="text-center py-5">
        {numToShow < data?.length ? (
                        <button onClick={handleViewMore} className="bg-red-400 text-white uppercase item-center font-bold py-2 px-7 rounded-sm border-[1px] border-white">View More</button>
                    ) : (
                        <button onClick={handleViewLess} className="bg-red-400 text-white uppercase item-center font-bold py-2 px-7 border-[1px] border-white rounded-sm">View Less</button>
                    )}
        </div>
    </div>
  )
}

export default SelectSection