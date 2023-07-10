import { Navigate } from "react-router-dom";

function PrivateRoute({ element: Element }) {
  const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));

  if (loggedIn) {
    return <Element />;
  } else {
    return <Navigate to="/login" />;
  }
}
export default PrivateRoute;
