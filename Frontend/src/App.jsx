// import { Home } from '@mui/icons-material';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerRoutes from "./Routes/CustomerRoutes";

function App() {

  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/*" element={<CustomerRoutes />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
