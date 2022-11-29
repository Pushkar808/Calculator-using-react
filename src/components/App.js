import { useState } from 'react';
import '../App.css';
import Wrapper from './Wrapper';

function App() {
  const [value, setvalue] = useState("");
  const evaluate = () => {
    setvalue(value.replace("=", ""))
    const ans = eval(value);
    setvalue(ans)
  }


  return (
    <>
      <Wrapper />
    </>
  );
}

export default App;
