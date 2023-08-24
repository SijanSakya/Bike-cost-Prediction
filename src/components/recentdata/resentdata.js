"use client";
import { useState, useEffect } from "react";
import supabase from "@/config/supabaseClient";
import Card from "./card";

const ResentData = () => {
  const [fetchError, setFetchError] = useState(null);
  const [supaData, setsupaData] = useState(null);

  useEffect(() => {
    //homepageTable is the table name in supabase
    const fetchData = async () => {
      const { data, error } = await supabase.from("Bikedata").select();

      if (error) {
        setFetchError("Could not fetch the data");
        setsupaData(null);
      }
      if (data) {
        setsupaData(data);
        setFetchError(null);
      }
    };

    fetchData();
  }, []);

  console.log("data",supaData);
  return (
    <div>
      <div className="flex justify-center font-sans font-bold text-gray-600 ">
        {fetchError && <p>{fetchError}</p>}
      </div>
      <div className="pt-10">
        <h1 className="text-xl font-bold ">Recent Search</h1>
        <div className="flex gap-20 flex-wrap py-10 px-44 justify-start ">
          {supaData?.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResentData;
