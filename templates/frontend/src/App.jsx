import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./api/auth";

function App() {
  // Root-level decision
  return isAuthenticated()
    ? <Navigate to="/dashboard" />
    : <Navigate to="/login" />;
}

export default App;
