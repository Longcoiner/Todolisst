import { useState } from "react";
import {
  Filter,
  Research,
  Button,
} from "./styled";

function PageList({
  handleAdd,
  setInput,
  $width = "100%",
  aligin,
  ...rest
}) {
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    handleAdd()
  };

  return (
    <Filter>
      <Research
        placeholder="Research"
        onChange={(e) => handleChange(e)}
        $width="70%"
      ></Research>

      <Button $width="10%" onClick={handleClick}>
        Add
      </Button>
    </Filter>
  );
}
export default PageList;
