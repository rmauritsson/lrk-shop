import { useSelector } from "react-redux";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import AuthModal from "./components/Modal/AuthModal";
import Footer from "./components/partials/Footer";
import Navbar from "./components/partials/Navbar";
import { RootReduxStateType } from "./redux/types";
import RouteRouter from "./routes";

function App() {
  const state = useSelector((state: RootReduxStateType) => state);

  console.log("Testing", state);

  return (
    <>
      {state.auth.showAuthModal && (
        <AuthModal>
          <div>{state.user.isUserExists ? <Login /> : <Register />}</div>
        </AuthModal>
      )}
      <Navbar />
      <div className="pt-[70px]">
        <RouteRouter />
        <Footer />
      </div>
    </>
  );
}

export default App;
