import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  CartIcon,
  HomeIcon,
  LogoIcon,
  MenuLeftIcon,
  SearchIcon,
  UserCircleIcon,
} from "../../../assets/icons";
import { setShowAuthModal } from "../../../redux/features/AuthModalSlice";
import { RootReduxStateType } from "../../../redux/types";

const Navbar = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootReduxStateType) => state.user);
  const dispatch = useDispatch();

  return (
    <>
      <div
        id="main-navigation"
        className="block flex justify-between fixed inset-x-0 top-0 bg-white z-10 shadow px-[10px] md:px-[20px] py-[20px]"
      >
        <div
          className="cursor-pointer font-header flex "
          onClick={() => navigate("/")}
        >
          <LogoIcon />
          <span className=""> LRK</span>{" "}
          <span className="font-bold text-black">SHOP</span>
        </div>

        <div className="hidden md:flex space-x-4">
          <div className="flex space-x-1 cursor-pointer">
            <div className="relative">
              <CartIcon />
              <div className="absolute -top-2 -right-2 w-[20px] h-[20px] bg-indigo-600 rounded-full text-white text-[14px] flex justify-center items-center">
                0
              </div>
            </div>
            <Link to="/cart">Cart</Link>
          </div>

          <div
            onClick={() => dispatch(setShowAuthModal())}
            className="flex space-x-1 cursor-pointer"
          >
            <UserCircleIcon />
            <p>
              {user.isUserExists
                ? user.isLoggedIn
                  ? "Log out"
                  : "Log in"
                : "Sign up"}
            </p>
          </div>
        </div>
      </div>
      <div
        id="bottom-navigation"
        className="md:hidden block fixed inset-x-0 bottom-0 bg-white z-10 shadow px-[10px] py-[20px]"
      >
        <div className="flex justify-between ">
          <div className="cursor-pointer">
            <MenuLeftIcon />
          </div>

          <div className="cursor-pointer">
            <SearchIcon />
          </div>

          <div className="cursor-pointer">
            <HomeIcon />
          </div>

          <div className="relative cursor-pointer">
            <div className="absolute -top-2 -right-2 w-[20px] h-[20px] bg-indigo-600 rounded-full text-white text-[14px] flex justify-center items-center">
              0
            </div>
            <CartIcon />
          </div>

          <div
            onClick={() => dispatch(setShowAuthModal())}
            className="cursor-pointer"
          >
            <UserCircleIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
