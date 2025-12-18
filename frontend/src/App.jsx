import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MainLayout from "./layouts/MainLayout";
import "./App.css";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Login />
            </MainLayout>
          }
        />
        <Route />
        <Route
          path="/signup"
          element={
            <MainLayout>
              <Signup />
            </MainLayout>
          }
        />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
