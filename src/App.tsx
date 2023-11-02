import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import WorkDashboard from "./pages/WorkDashboard";
import Layout from "./pages/Layout";
import Clients from "./pages/Clients";
import Calendar from "./pages/Calendar";
import Appointments from "./pages/Appointments";
import { Projects } from "./pages/Projects";


function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<WorkDashboard />}
          />
          <Route 
            path="/clients" 
            element={<Clients />} 
          />
          <Route
            path="/projects"
            element={<Projects />}
          />
          <Route 
            path="/appointments" 
            element={<Appointments />} 
          />
          <Route 
            path="/calendar" 
            element={<Calendar />} 
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;