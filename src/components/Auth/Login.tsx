import { useDispatch } from "react-redux";
import { LogoIcon } from "../../assets/icons";
import { FcGoogle } from "react-icons/fc";
import { setIsUserExists } from "../../redux/features/UserSlice";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-[20px]">
      <div className="w-[320px] md:w-[400px] space-y-8">
        <div>
          <div className="cursor-pointer font-header flex justify-center items-center ">
            <LogoIcon />
            <span className=""> LRK</span>{" "}
            <span className="font-bold text-black">SHOP</span>
          </div>

          <h2 className="mt-6 text-center">Welcome Back</h2>
          <p className="mt-2 text-center text-md text-gray-600">
            Not registered?
            <span
              onClick={() => dispatch(setIsUserExists())}
              className="cursor-pointer ml-2 font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </span>
          </p>
        </div>
        <form className="mt-8 space-y-6">
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
                autoComplete="email"
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
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <span className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </span>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4  font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Login in
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
          <button className="group relative flex w-full justify-center items-center rounded-md border border-transparent bg-gray-600 py-2 px-4  font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
            <FcGoogle className="mr-2" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
