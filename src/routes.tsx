import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./utils/static";
import SinginPage from "./pages/SinginPage";
import SingupPage from "./pages/SingupPage";
import SingoutPage from "./pages/SingoutPage";
import CreateChatRoom from "./pages/CreateChatRoom";
import ChatPage from "./pages/ChatPage";

const AppRoute = () => {
  return (
    <Routes>
      <Route path={ROUTES.MAIN} element={<ChatPage />}>
        <Route path={ROUTES.CHATROOM}></Route>
      </Route>
      <Route path={ROUTES.CREATECHATROOM} element={<CreateChatRoom />} />
      <Route path={ROUTES.SINGIN} element={<SinginPage />}></Route>
      <Route path={ROUTES.SINGUP} element={<SingupPage />}></Route>
      <Route path={ROUTES.SINGOUT} element={<SingoutPage />}></Route>
      <Route path="*" element={<p>Page not found</p>} />
    </Routes>
  );
};

export default AppRoute;
