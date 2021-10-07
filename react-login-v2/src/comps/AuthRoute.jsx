/**
 * 로그인을 수행해야 열어볼 수 있는 페이지들을
 * 통합 관리할 컴포넌트
 * 로그인을 수행해야 접근할 수 있는 Route들을 모아서 관리
 */

import { useHistory } from "react-router-dom";
import { useUserContext } from "../context/UserContextProvider";
import { useCallback, useEffect } from "react";
import { fetchUser } from "..//modules/fetchModule";

const AuthRoute = ({ children }) => {
  const { setUser } = useUserContext();
  const history = useHistory();

  const fetchCb = useCallback(async () => {
    const response = fetchUser();
    if (response?.ok) {
      // 데이터가 왔다면
      const resultUser = await fetchUser();
      if (resultUser?.userid) {
        await setUser(resultUser);
      } else {
        history.replace("/login");
      }
    } else {
      history.replace("/login");
    }
  }, [setUser]);

  useEffect(fetchCb, [fetchCb]);

  // <AuthRoute>내용</AuthRoute>
  return <>{children}</>;
};

export default AuthRoute;
