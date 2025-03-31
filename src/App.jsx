import { useState } from "react";
import Customer from "./customer/Customer";

const App = () => {
  let [count, setCount] = useState(0);

  const increase = (value) => {
    setCount(count+value);
  }

  const decrease = (value) => {
    if(count===0 || count<=0){
      setCount(0);
    }else{
      setCount(count-value);
    }
  }

  return (
    <>
      <h1>hello</h1>
      <h1> {count}</h1>
      <button className="btn btn-sm btn-primary" onClick={()=>increase(5)}>Increase</button>
      <button className="btn btn-sm btn-danger" onClick={()=>decrease(4)}>Decrease</button>
    </>
  )
}

export default App;