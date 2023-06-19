import React from 'react';
import TableCell from './TableCell';

const TableRow = ({rowData, selectedColor}) => {
  
    return (
      <tr>
        {rowData.map((index, content) => (
          <TableCell key={index} content={""} selectedColor={selectedColor} />
        ))}
      </tr>
    );
  };

export default TableRow;