import "./styling.css"


// // sat is the props/paramater, the Table function is looping through satData and rendering the 
// table information
const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr>
       {/* this is the table header */}
       <th>Name</th>
      <th>Type of Satellite</th>  
      <th>Launch Date</th>
      <th>Status</th>
     </tr>
     </thead>
     <tbody>
      {/* this loops through the data in the satData array of objects */}
      {sat.map((data)=>(
        // since the satData.jsx array of objects includes an ID, I used ID for the key
        <tr key={data.id}>
        <td>{data.name}</td>
        <td>{data.type}</td>
        <td>{data.launchDate}</td>
        {/* ternary conditional/ if else statement */}
        <td>{data.operational ? "Active" : "Inactive"}</td>
        </tr>
      )
      
      )}
    
     </tbody>
   </table>
  );
};

export default Table;