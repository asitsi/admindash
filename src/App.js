import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AdminDashboard from "./Pages/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admindash/" exact component={AdminDashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
