import React from "react";

import { Table, Tr, Th, Td, Select } from "../pageList/styled";
const TableList = ({ data, handleCheck }) => {
  
  const handleChange=(e, id)=>{
     console.log(e.target.value, id)
     handleCheck(e.target.value, id)
  }

  return (
    <Table>
      <Tr>
        <Th>Title</Th>
        <Th>Status</Th>
      </Tr>
      {data.map((value, key) => {
        return (
          <Tr key={value.id}>
            <Td>{value.title}</Td>
            <Td>
              <Select
                key={value.id}
                value={value.status}
                aria-label="Default select example"
                onChange={(e)=> handleChange(e, value.id)}
              >
                <option value="done">Done</option>
                <option value="notStart">Not Start</option>
                <option value="inprogress">inprogress</option>
              </Select>
            </Td>
          </Tr>
        );
      })}
    </Table>
  );
};

export default TableList;
