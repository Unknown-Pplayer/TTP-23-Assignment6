import React from "react";

const TableCell = ({setCellColor}) => {

    // var background;
    // const setColor = () => {
    //     background = selectedColor;
        
    // }
    return ( <td onClick={(event) => setCellColor(event)}></td> );
};
export default TableCell;