"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Package1 from "@/static/img/royal.png";

import { AiOutlineEye, AiOutlineEyeInvisible , AiFillDelete} from 'react-icons/ai';
import supabase from "../../config/supabaseClient";
import { icons } from "react-icons";
const Card = ({ data }) => {
  console.log(data);
  const handleDelete = async () => {
    try {
      const { data: deletedData, error } = await supabase
        .from("Bikedata")
        .delete()
        .eq("id", data.id);

      if (error) {
        console.log(error);
      } else {
        console.log("Delete successful");
        console.log(deletedData);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full  h-full border-2 py-2">
      <div className="px-4 py-2 flex justify-between ">
       <div className="flex flex-col gap-2">
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
       <div className="h-44 w-44 border-2  hover:cursor-pointer hover:scale-110 flex items-center justify-center">
       <Image
          src={Package1}
          alt="Package Image 1"
          width={177}
          height={177}
          quality={100}
          className="rounded-full"
        />
       </div>
      </div>
      <div className="flex justify-center items-center">
        <button onClick={handleDelete}><AiFillDelete /></button>
      </div>
    </div>
  );
};

export default Card;
