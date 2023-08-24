"use client";
'use client'
import Link from "next/link";
import {useState} from "react";
import supabase from '../../config/supabaseClient'
const Card = ({ data }) => {
   console.log(data)
  const handleDelete=async()=>{
  
   try {
    const { data: deletedData, error } = await supabase
      .from("homepageTable")
      .delete()
      .eq("id", data.id);

    if (error) {
      console.log(error);
    } else {
      console.log("Delete successful");
      console.log(deletedData);
      window.location.reload()
    }
  } catch (error) {
    console.log(error);
  }

  
  }
  return (
    <div className="w-full h-full border-2 ">
      <div className="px-4 py-2 flex flex-col justify-center items-start ">
        <h3>
          <b>Bike Name: </b>
          {data.bikename}
        </h3>
        <p>
          <b>Brands: </b>
          {data.brand}
        </p>

        <p>
          <b>Kms Driven: </b>
          {data.kmsdriven}
        </p>

        <p>
          <b>owner: </b>
          {data.owner}
        </p>

        <p>
          <b>City: </b>
          {data.city}
        </p>

        <p>
          <b>Power: </b>
          {data.power}
        </p>
        <p>
          <b>Age: </b>
          {data.age}
        </p>
       
      </div>
     
    </div>
  );
};

export default Card;
