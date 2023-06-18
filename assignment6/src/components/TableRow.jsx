import React from 'react';
import TableCell from './TableCell';

const TableRow = ({ rowData }) => {
    return (
      <tr>
        {rowData.map((content, index) => (
          <TableCell key={index} content={content} />
        ))}
      </tr>
    );
  };

export default TableRow;