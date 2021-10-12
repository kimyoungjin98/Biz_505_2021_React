import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router";
import { useTodoContext } from "../context/AppContextProvider.jsx";
import { fetchLogout } from "../modules/fetchModule.js";

export default function Logout() {
  const history = useHistory();
  const { setUser } = useTodoContext();
  const fetch_logout = useCallback(async () => {
    await fetchLogout();
    await setUser([]);
    history.replace("/");
  }, [setUser]);

  return <div onClick={fetch_logout} className="btn_logout">Logout</div>;
}
