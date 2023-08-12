import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/HomePage";
import RecipieDetails from "../Pages/RecipieDetails";
export default function NavRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/recipie/:recipieId" element={<RecipieDetails />} />
    </Routes>
  );
}
