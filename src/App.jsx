import { Route, Routes } from "react-router-dom";
import classes from "./App.module.css";
import LoginPage from "./pages/login";
import Statistics from "./pages/dashboard/statistics";
import MainDashBoard from "./pages/dashboard/main";
import NotFound from "./pages/notFound";
import Brands from "./pages/dashboard/brands";
import AddDevice from "./pages/dashboard/addDevice";

function App() {
  console.log(classes);
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<MainDashBoard />}>
        <Route path="stat" element={<Statistics />} />
        <Route path="brand" element={<Brands />} />
        <Route path="add-phone" element={<AddDevice />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
