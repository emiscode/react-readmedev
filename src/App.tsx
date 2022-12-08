import "./App.css";
import RdRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <RdRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
