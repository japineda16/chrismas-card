import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { router } from "./Router";

function App() {
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
