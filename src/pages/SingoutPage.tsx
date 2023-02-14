import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const SingoutPage = () => {
  const { singout, user } = useContext(UserContext);

  useEffect(() => {
    if (user) singout();
  }, []);
  return <></>;
};

export default SingoutPage;
