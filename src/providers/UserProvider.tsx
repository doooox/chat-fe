import React from "react";
import { UserContext } from "../context/UserContext";
import useUser from "../hooks/useUser";

interface Props {
  children: React.ReactNode;
}

function UserProvider({ children }: Props) {
  const { user, setUser, singin, singout } = useUser();

  return (
    <UserContext.Provider value={{ user, setUser, singin, singout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
