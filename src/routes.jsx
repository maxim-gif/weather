import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Main } from "./pages/main/main";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};