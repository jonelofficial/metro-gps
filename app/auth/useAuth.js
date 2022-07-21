import { useContext } from "react";
import AuthContext from "./context";
import jwtDecode from "jwt-decode";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    // const user = jwtDecode(authToken);
    setUser(authToken);
  };

  const logOut = (authToken) => {
    setUser(null);
  };

  return { user, logIn, logOut };
};
