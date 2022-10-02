const Register = () => {
  return (
    <div className="flex">
      <div>
        <img
          className="w-[340px] rounded"
          src="assets/images/register.jpg"
          alt="register"
        />
      </div>
      <div className="p-[20px] flex flex-col justify-between">
        <div className="text-center mb-[50px]">
          <h1 className="font-semibold">Create an Account</h1>
          <p className="text-gray-700">
            Already registered?{" "}
            <span className="text-green-700 font-semibold">Login</span>
          </p>

          <div className="flex flex-col mt-[50px] min-w-[340px]">
            <label htmlFor="username" className={styles.label}>
              <input
                type="text"
                id="username"
                className={styles.inputs}
                placeholder="Enter your name"
              />
            </label>

            <label htmlFor="email" className={styles.label}>
              <input
                type="text"
                id="email"
                className={styles.inputs}
                placeholder="Enter your email"
              />
            </label>

            <label htmlFor="password" className={styles.label}>
              <input
                type="text"
                id="password"
                className={styles.inputs}
                placeholder="Enter your password"
              />
            </label>
          </div>
        </div>

        <button>Register</button>
      </div>
    </div>
  );
};

const styles = {
  inputs: "border p-2 rounded-[5px]",
  label: "flex flex-col mb-2",
};

export default Register;
