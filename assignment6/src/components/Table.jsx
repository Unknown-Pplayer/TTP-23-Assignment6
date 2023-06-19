import React, {useState} from 'react';
import TableRow from "./TableRow";

 const Table = () => {
    const [grid, setGrid] = useState([[""]]);
    const addRow = () => {
        var newRow = new Array(grid[0]?.length || 0).fill("");
        setGrid(prevState => [...prevState, newRow]);
    }

    const addColumn = () => {
        setGrid(prevState => {
            const updatedGrid = prevState.map(row => [...row, ""]);
            return updatedGrid;
        });
          
    }

    return (
        <div>
         <table>
             <tbody>
             {grid.map((row, index) => (
                  <TableRow key={index} rowData={row} />   
             ))}
        </tbody>
         </table>
             <button onClick={addRow}>Add Row</button>
             <button onClick={addColumn}>Add Column</button> 
        </div>
     );
}
export default Table;
