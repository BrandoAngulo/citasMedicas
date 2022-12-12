import { HashRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { HomePage } from "../views/HomePage";
import { NotFound } from "../views/NotFound";
import { UserView } from "../views/UserView";
function App() {
  return (
    <>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<UserView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>

  );
}
export default App;
