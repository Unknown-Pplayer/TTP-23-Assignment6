import React, {useState, useEffect} from 'react';
import TableRow from "./TableRow";

 const Table = () => {
    const [grid, setGrid] = useState([[""]]);
    const [selectedColor, setSelectedColor] = useState("");
    
    const addRow = () => {
        var newRow = new Array(grid[0]?.length || 0).fill("");
        setGrid(prevState => [...prevState, newRow]);
    }

    const addColumn = () => {
        setGrid(prevState => {
            return prevState.map(row => [...row, ""]);
            
        });
          
    }
    const selectColor = (event) => {
        setSelectedColor(event.target.value);   
    };
    
    const setCellColor = (event) => {
        event.target.style.backgroundColor = selectedColor;
    };

    console.log(selectedColor)
    return (
        <div>
         <table>
            <tbody>
             {grid.map((row, index) => (
                  <TableRow
                  row={row} 
                  key={index} 
                  setCellColor={setCellColor}
                  /> 
            
             ))}
             {console.log(selectedColor)}
            </tbody>
         </table>
             <button onClick={addRow}>Add Row</button>
             <button onClick={addColumn}>Add Column</button> 
             <label >Select a color:</label>
            <select  value="null" onChange={(event) => selectColor(event) }>
                <option value="---">---</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="orange">Orange</option>
            </select>
        </div>
     );
}
export default Table;