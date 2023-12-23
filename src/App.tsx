import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { router } from "./Router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          {router.map((route, index) => (
            <Route key={index} path={`${route.path}`} element={route.element} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
