import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import { useState } from "react";
import satData from "./components/satData"

function App() {
  //**** */ this hook is setting the default as the satData.jsx
  const [sat, setSat] = useState(satData);
  //**** displaySats is using the spread operator/map () to extract satData  and create a new array and storing them into displaySats using orbitType
  const displaySats =[...new Set(satData.map((data)=> data.orbitType))];
  // ****
  const filterByType=(currentType)=>{
    const displaySats = satData.filter((newSatDisplay)=>{
      return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
  }
  return (
    // ****
    <div>
      <Banner />
      <Buttons 
      filterByType={filterByType}
      setSat={setSat}
      displaySats={displaySats}/>
      <Table sat={sat} />
    </div>
  );
}

export default App;