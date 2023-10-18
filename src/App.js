import "./App.css";
import DateBooking from "./components/DateBooking";
import Landingpage from "./components/Landingpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (

    <>

      <Router>

        <Routes>

          <Route exact path="/" element={<Landingpage />} />
          <Route exact path="/datebooking" element={<DateBooking />} />
        
        </Routes>
        
      </Router>

    </>

  );
}

export default App;
