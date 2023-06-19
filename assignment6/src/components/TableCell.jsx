import React, {Component} from "react";

const TableCell = ({content, selectedColor, onCellClick}) => {
    const setColor = () => {
        onCellClick(selectedColor);
    }
    return <td onclick={setColor}>{content}</td>
}
export default TableCell;