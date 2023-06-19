import React, { Component } from "react";
import TableRow from "./TableRow";

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grid : [""],
            color : "",
            mouseIsDown : false,
        };
    }
    addRow = () => {
    //     var table = document.getElementById("grid");
    //     var newRow = table.insertRow();
    //     var columnsCount = table.rows[0].cells.length;

    //     for (let i = 0; i < columnsCount; i++) {
    //       var cell = newRow.insertCell();
    //       cell.onclick = changeCellColor;
    //     }
    //   }
    /*
    this.setState((prevState) => ({
      grid: [...prevState.grid, []],
    }));
    */
   
        var columsCount = this.state.grid.length;
        var newRow = new Array(columsCount).fill("");
        this.setState ((rows) => ({
        grid: [...rows.grid, newRow]
    }));
    }

    
    render () {
        const {grid} = this.state;
        return (
           <div>
            <table>
                {grid.map((row, index) => (
                    <TableRow  />
                ))}
                {/* key={index} rowData={row} */}
                
            </table>
                <button onClick={this.addRow}>Add Row</button>
                <button onClick={this.addColumn}>Add Column</button> 
           </div>
        )
    }
};
export default Table;
