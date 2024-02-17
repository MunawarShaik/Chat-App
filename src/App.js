import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, auth = false }) => {
  const isLoggedIn = localStorage.getItem("user:token") !== null || false;

  if (!isLoggedIn && auth) {
    return <Navigate to={"/users/login"} />;
  } else if (
    isLoggedIn &&
    ["/users/login", "/users/signup"].includes(window.location.pathname)
  ) {
    return <Navigate to={"/"} />;
  }

  return children;
};

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute auth={true}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users/login"
          element={
            <ProtectedRoute>
              <Login isLoginPage={true} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users/signup"
          element={
            <ProtectedRoute>
              <Login isLoginPage={false} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
