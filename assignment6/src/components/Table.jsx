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
            const updatedGrid = prevState.map(row => [...row, ""]);
            return updatedGrid;
        });
          
    }
            const selectColor = (event) => {
                setSelectedColor(event.target.value);
                console.log(selectedColor);
                
            }
        
        
    

    const clickCell = (event) => {
        const color = selectedColor;
        event.target.style.backgroundColor = color;
      };

    /*
    const selectColor = (e) => {
        setSelectd(e.target.value);
    }*/
    
 
    return (
        <div>
            <div>
                {/* onClick ={clickCell} */}
            </div>
         <table>
            <tbody>
             {grid.map((row, index) => (
                  <TableRow key={index} rowData={row} color={selectedColor}/>   
             ))}
            </tbody>
         </table>
             <button onClick={addRow}>Add Row</button>
             <button onClick={addColumn}>Add Column</button> 
             <label >Select a color:</label>
            <select  value={selectedColor} onChange={() => selectColor(event)}>
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
