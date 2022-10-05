import { useState, useEffect } from "react";
import { useToken } from "./useToken";
const useUser = function () {
  const [token] = useToken();

  const getPayloadFromToken = function (token) {
    const encodedPayload = token.split(".")[1];
    return JSON.parse(window.atob(encodedPayload));
  };

  const [user, setUser] = useState(() => {
    if (!token) return null;
    return getPayloadFromToken(token);
  });

  useEffect(() => {
    if (!token) {
      setUser(null);
    } else {
      setUser(getPayloadFromToken(token));
    }
  }, [token]);

  return user;
};
export default useUser;
