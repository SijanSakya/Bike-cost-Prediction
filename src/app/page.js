'use client'
import PredctionForm from "@/components/formSection/predictionForm";
import HeroSection from "@/components/heroSection/heroSection";
import MasterLayout from "@/components/masterLayout/masterLayout";
import SelectSection from "@/components/selectSection/selectSection";
import jsondata from "@/static/csvjson.json";
import Image from "next/image";

export default function Home() {
 
  const data = jsondata;
  console.log(data)
  return (
    <div>
      <MasterLayout>
        <HeroSection />
        <div className="md:px-44 sm:px-10">
          {/* form for Predction */}
          <PredctionForm data={data} />

          <SelectSection data={data}/>
        </div>
      </MasterLayout>
    </div>
  );
}
