import { useCallback, useEffect } from "react";
import { useHistory } from "react-router";
import { useUserContext } from "../context";

function AuthRoute({ children }) {
  const { user, setUser } = useUserContext();
  const history = useHistory();

  const fetchCallBack = useCallback(() => {
    if (!user?.userid) {
      history.replace("/login");
    }
  });

  useEffect(fetchCallBack, [fetchCallBack]);

  return <>{children}</>;
}

export default AuthRoute;
