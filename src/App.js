import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import UserList from "./Pages/UserList";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coup-de-coeur" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
