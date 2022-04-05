import Wrapper from "./Hoc/Wrapper";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Edit from "./Pages/Edit";
import List from "./Pages/List";

const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </Wrapper>
  );
};

export default App;
