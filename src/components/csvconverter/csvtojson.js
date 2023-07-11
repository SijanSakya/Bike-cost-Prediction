import React, { useState } from 'react';
import Papa from 'papaparse';


const CsvToJson = () => {
    const [jsonData, setJsonData] = useState([]);

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
  
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          setJsonData(results.data);
        },
      });
    };
  return (
    <div>
    <input type="file" accept=".csv" onChange={handleFileUpload} />
    <pre>{JSON.stringify(jsonData, null, 2)}</pre>
  </div>
  )
}

export default CsvToJson