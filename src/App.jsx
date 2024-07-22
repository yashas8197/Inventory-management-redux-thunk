import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AddItemsFormPage from "./pages/AddItemsFormPage";
import Inventory from "./pages/Inventory";
import RemainItems from "./pages/RemainItems";
import RemoveItems from "./pages/RemoveItems";

export default function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/inventory">Inventory</Link>
              </li>
              <li>
                <Link to="/removeItems">Removed Items</Link>
              </li>
              <li>
                <Link to="/remainItem">Remaining Items</Link>
              </li>
              <li>
                <Link to="/">Add New Items</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<AddItemsFormPage />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/remainItem" element={<RemainItems />} />
            <Route path="/removeItems" element={<RemoveItems />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
