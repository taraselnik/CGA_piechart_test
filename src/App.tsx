import React, { useEffect, useState } from "react";
import "./App.css";
// import { dataIn } from "./utils/data";
import { Incident } from "./types/Incident";
import { Chart } from "react-google-charts";
import { fetchData } from "./utils/fetchIncidents";

function App() {

const [dataIn, setDataIn] = useState<Incident[]>([]);
useEffect(() => {
 fetchData()
  .then(data => setDataIn(data.results))
}, [])

  const incedentTypes = (input: Incident[]) => {
    const allTypes: string[] = [];
    input.forEach((obj) => {
      if (!allTypes.includes(obj.type)) {
        allTypes.push(obj.type);
      }
    });

    const res: (string | number)[][] = [];

    allTypes.forEach((type) => {
      const count = input.filter((obj) => obj.type === type).length;
      res.push([type, count]);
    });

    return res;
  };

  const toChart = [["Incident", "Quantity"], ...incedentTypes(dataIn)];

  const options = {
    title: "Incidents",
    is3D: true,
  };

  return (
    // <div>hello</div>
    <Chart
      chartType="PieChart"
      data={toChart}
      options={options}
      width={"100%"}
      height={"500px"}
    />
  );
}

export default App;
