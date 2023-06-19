import React from 'react';
import TableCell from './TableCell';

const TableRow = ({rowData}) => {
  
    return (
      <tr>
        {rowData.map((index, content) => (
          <TableCell key={index} content={""} />
        ))}
      </tr>
    );
  };

export default TableRow;