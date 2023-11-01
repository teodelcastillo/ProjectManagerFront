import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import WorkDashboard from "./pages/WorkDashboard";
import Layout from "./pages/Layout";


function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<WorkDashboard />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;