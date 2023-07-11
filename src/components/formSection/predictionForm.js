"use client";
import { useState } from "react";
import axios from 'axios';


const PredctionForm = ({ data }) => {
  const [selectedBike, setSelectedBike] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedKmsDriven, setSelectedKmsDriven] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedPower, setSelectedPower] = useState("");
  const [selectedOwner, setSelectedOwner] = useState("");

  const uniqueBrands = [...new Set(data.map((data) => data.brand))];

  const uniqueBike = [...new Set(data.map((data) => data.bike_name))];
  const uniqueCity = [...new Set(data.map((data) => data.city))];
  const uniquekms = [...new Set(data.map((data) => data.kms_driven))];
  const uniquePower = [...new Set(data.map((data) => data.power))];
  const uniqueAge = [...new Set(data.map((data) => data.age))];
  const uniqueOwner = [...new Set(data.map((data) => data.owner))];

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      bikeName: selectedBike,
      brand: selectedBrand,
      city: selectedCity,
      power: selectedPower,
      owner: selectedOwner,
      kmsDriven: selectedKmsDriven,
      age: selectedAge,
    };

    console.log(formData);

    axios.post('http://localhost:5000/bike-data', formData)
      .then(response => {
        
        console.log(response.data);
        alert("successfull")
      })
      .catch(error => {
       
        console.error(error);
        alert("Data not send something error")
      });
    
  };



  return (
    <div>
      <div className="py-5">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold"> Check Price of Used Bikes</h1>
          <p className="text-sm ">
            This web application helps to suggests used bike valuation through
            its basic and valuation reports. While buying a used bike, it is
            very important to understand fair market price at that point of
            time. Through our application, you can check used bike price of any
            bike model produced by any manufacture like Maruti Suzuki, Hyundai,
            Mahindra, Honda, Tata, etc.
          </p>
        </div>
      </div>
      <div className="py-6 px-7">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap flex-col gap-5">
            <div>
              <label htmlFor="bike_name" className=" inline-block w-24">
                Bike Name:
              </label>
              <select
                className="w-40 px-2 ml-3 border-2"
                name="bike name"
                value={selectedBike}
                onChange={(e) => setSelectedBike(e.target.value)}
              >
                <option value="" className=""></option>
                {/* Map over the bike names from jsondata and create options */}
                {uniqueBike.map((bike) => (
                  <option key={bike} value={bike}>
                    {bike}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="brand" className=" inline-block w-24">Brand:</label>
              <select
                className="w-40 px-2 ml-3 border-2"
                id="brand"
                name="brand"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                <option value=""></option>
                {/* Map over the unique brands and create options */}
                {uniqueBrands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="city" className=" inline-block w-24">City:</label>
              <select
                className="w-40 px-2 ml-3 border-2"
                name="city"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                placeholder="City"
              >
                <option value=""></option>
                {/* Map over the bike names from jsondata and create options */}
                {uniqueCity.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="city" className=" inline-block w-24">Power:</label>
              <select
                className="w-40 px-2 ml-3 border-2"
                name="power"
                value={selectedPower}
                onChange={(e) => setSelectedPower(e.target.value)}
                placeholder="power"
              >
                <option value=""></option>
                {/* Map over the bike names from jsondata and create options */}
                {uniquePower.map((power) => (
                  <option key={power} value={power}>
                    {power}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="city" className=" inline-block w-24">Owner:</label>
              <select
                className="w-40 px-2 ml-3 border-2"
                name="owner"
                value={selectedOwner}
                onChange={(e) => setSelectedOwner(e.target.value)}
                placeholder="owner"
              >
                <option value=""></option>
                {/* Map over the bike names from jsondata and create options */}
                {uniqueOwner.map((owner) => (
                  <option key={owner} value={owner}>
                    {owner}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="city" className=" inline-block w-24">Kms Driven</label>
              <input
                className="w-40 px-2 ml-3 border-2 placeholder-black placeholder-opacity-50"
                name="kms_driven"
                value={selectedKmsDriven}
                onChange={(e) => setSelectedKmsDriven(e.target.value)}
                placeholder="kms driven"
              />
            </div>

            <div>
              <label htmlFor="city" className=" inline-block w-24">Age</label>
              <input
                className="w-40 px-2 ml-3 border-2 placeholder-black placeholder-opacity-50"
                name="age"
                value={selectedAge}
                onChange={(e) => setSelectedAge(e.target.value)}
                placeholder="Age"
              />
            </div>

            <div className="bg-yellow-700 px-4 py-1 rounded-sm text-white w-20 ">
              <button type="submit">Predict</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PredctionForm;
