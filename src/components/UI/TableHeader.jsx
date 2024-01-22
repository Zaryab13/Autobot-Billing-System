import React from 'react';

const TableHeader = ({ headings }) => {
  return (
    <thead className='bg-[rgba(238,80,87,0.9)] rounded-t-2xl'>
      <tr>
        {headings.map((item, index) => (
          <td key={index} className='text-center py-2 w-[7rem] font-semibold text-slate-200'>
            {item}
          </td>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
