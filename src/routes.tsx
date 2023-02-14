import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./utils/static";
import SinginPage from "./pages/SinginPage";
import SingupPage from "./pages/SingupPage";
import ChatPage from "./pages/ChatPage";
import SingoutPage from "./pages/SingoutPage";

const AppRoute = () => {
  return (
    <Routes>
      <Route path={ROUTES.MAIN} element={<ChatPage />}></Route>
      <Route path={ROUTES.SINGIN} element={<SinginPage />}></Route>
      <Route path={ROUTES.SINGUP} element={<SingupPage />}></Route>
      <Route path={ROUTES.SINGOUT} element={<SingoutPage />}></Route>
      <Route path="*" element={<p>Page not found</p>} />
    </Routes>
  );
};

export default AppRoute;
