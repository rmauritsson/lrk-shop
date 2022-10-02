import { useDispatch } from "react-redux";
import { CloseIcon } from "../../assets/icons";
import { closeShowAuthModal } from "../../redux/features/AuthModalSlice";

type Proptypes = {
  children: JSX.Element;
};

const AuthModal: React.FC<Proptypes> = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <div className="block fixed flex justify-center items-center inset-x-0 top-0 z-20 min-h-screen bg-gray-500/50">
      <div className="relative">
        <div className="bg-white rounded">
          <div
            onClick={() => dispatch(closeShowAuthModal())}
            className="absolute p-1 cursor-pointer hover:bg-gray-200 -top-4 bg-white rounded-full -right-2"
          >
            <CloseIcon />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
