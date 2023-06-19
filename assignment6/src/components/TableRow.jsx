import React from 'react';
import TableCell from './TableCell';
import Table from './Table';

const TableRow = ({row , setCellColor}) => {
   
    return (
      <tr>
        {row.map((row, colNumber) => (
          <TableCell 
          key={colNumber}  
          row={row} 
          setCellColor={setCellColor} 
          
          />
          
        ))}
      
      </tr>
    );
  };

export default TableRow;