import { useSelector } from "react-redux";
import AuthModal from "./components/Modal/AuthModal";
import Footer from "./components/partials/Footer";
import Navbar from "./components/partials/Navbar";
import { RootReduxStateType } from "./redux/types";
import RouteRouter from "./routes";

function App() {
  const { showAuthModal } = useSelector(
    (state: RootReduxStateType) => state.auth
  );

  return (
    <>
      {showAuthModal && <AuthModal />}
      <Navbar />
      <div className="pt-[70px]">
        <RouteRouter />
        <Footer />
      </div>
    </>
  );
}

export default App;
