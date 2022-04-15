import { useState } from "react";
import "./App.css";
import PageList from "./component/pageList";
import { Wrapper } from "./component/pageList/styled";
import TableList from "./component/TableComponent/TableList";
const InitData = [
  {
    id: 1,
    title: "homework",
    status: "done",
    day: "today",
  },
  {
    id: 2,
    title: "excise",
    status: "notStart",
    day: "today",
  },
  {
    id: 3,
    title: "swimming",
    status: "inprogress",
    day: "today",
  },
];
function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(InitData);
  
  const handleCheck = (values, id) => {
    const check = data.map((value,key)=>{
      if(id === value.id){
        return {...value, status: values}
      }
      return {...value}
    })
    setData(check)
  }

  const handleAdd = () => {
    const newData = {
      id: data.length+1,
      title: input,
      status: "none",
    };

    setData((prev) => [...prev, newData]);
  };

  // console.log(data);
  return (
    <Wrapper>
      <PageList setInput={setInput} handleAdd={handleAdd}></PageList>
      <TableList data={data} handleCheck={handleCheck} ></TableList>
    </Wrapper>
  );
}

export default App;
