import UserProvider from "./providers/UserProvider";
import AppRoute from "./routes";

function App() {
  return (
    <UserProvider>
      <main>
        <AppRoute />
      </main>
    </UserProvider>
  );
}

export default App;
