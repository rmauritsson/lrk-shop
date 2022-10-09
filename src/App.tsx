import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Login from "./components/Auth/Login";
import SendRegisterEmail from "./components/Auth/SendRegisterEmail";
import AuthModal from "./components/Modal/AuthModal";
import Footer from "./components/partials/Footer";
import Navbar from "./components/partials/Navbar";
import { RootReduxStateType } from "./redux/types";
import RouteRouter from "./routes";

function App() {
  const state = useSelector((state: RootReduxStateType) => state);

  return (
    <>
      {state.auth.showAuthModal && (
        <AuthModal>
          <div>
            {state.user.isUserExists ? <Login /> : <SendRegisterEmail />}
          </div>
        </AuthModal>
      )}
      <Navbar />
      <div className="min-h-screen overflow-auto pt-[74px]">
        <div className="flex flex-grow">
          <ToastContainer />
          <RouteRouter />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
