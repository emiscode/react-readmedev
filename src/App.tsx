import "./App.css";
import RdRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RdRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
