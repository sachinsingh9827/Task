import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <AllRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
