import { useState } from "react";
import { useDispatch } from "react-redux";
import { LogoIcon, PadlockIcon } from "../../assets/icons";
import { setIsUserExists } from "../../redux/features/UserSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";
//@ts-ignore
import bcrypt from "bcryptjs";

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      setLoading(true);
      const hashedPassword = bcrypt.hashSync(password, 10);

      console.log("Account Created");
      setLoading(false);
      toast.success(
        `Click on the link that has been sent to ${email} to complete your registration`
      );

      // save to local storage
      //window.localStorage.setItem("emailForRegistration", email);
    } catch (error) {
      console.log("Failed to Create account");
    }
  };

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-[20px]">
      <div className="w-[400px] space-y-8">
        <div>
          <div className="cursor-pointer font-header flex justify-center items-center ">
            <LogoIcon />
            <span className=""> LRK</span>{" "}
            <span className="font-bold text-black">SHOP</span>
          </div>
          <h2 className="mt-6 text-center">Create your Account</h2>
          <p className="mt-2 text-center text-md text-gray-600">
            Already registered?
            <span
              onClick={() => dispatch(setIsUserExists())}
              className="cursor-pointer ml-2 font-medium text-indigo-600 hover:text-indigo-500"
            >
              Login
            </span>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />

          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                autoFocus
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-md"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group disabled:bg-indigo-600/80 relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4  font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <PadlockIcon />
              </span>
              {loading ? <ClipLoader color="#FFF" /> : "Register"}
            </button>
          </div>
        </form>
        <div>
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-b border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-gray-500">OR</span>
            </div>
          </div>
          <button>Continue with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
