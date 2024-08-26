import satData from "./satData";
import id from "../App"
import "./styling.css"

// the props for the buttons are to filter, load the satellite information and display the results
const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div className="flex-container">
      {displaySats.map((sat, id)=> {
     return (
      // ***this is filtering the different types: low, medium high ect
      <button onClick = {() => filterByType(sat)} key={id}>
      {sat} Orbit 
      </button>
     );
})}
{/* this button/virtual DOM EVENT is displaying all via id */}
<button onClick={()=>setSat (satData)} key={id}> All Orbits</button>
</div>
  );
}


export default Buttons;