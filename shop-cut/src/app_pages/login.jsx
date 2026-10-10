import { useState, useRef, useEffect } from "react";

export const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    rememberMe: false,
  })

  // varibles 

  const [Isloading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null)

  // with google ai

  const handleChange = (e) => {
    const { id, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with data:', formData);
    alert(`Logging in as: ${formData.username}`);
  };

  return (
    <div className="flex items-center justify-center p-4 font-sans h-[100vh] w-screen bg-linear-to-r/decreasing from-indigo-500 to-teal-400">
        <div className="w-full max-w-md rounded-xl bg-[rgb(255, 255, 255)] p-8 shadow-lg">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">Welcome to spicios'</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username Input */}
            <div className="flex flex-col text-left">
              <label htmlFor="username" className="mb-2 text-sm font-medium text-gray-600">
                Username or Email
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 p-3 text-base outline-none transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col text-left">
              <label htmlFor="password" className="mb-2 text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 p-3 text-base outline-none transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Actions: Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label htmlFor="rememberMe" className="flex items-center gap-2 text-gray-600 cursor-pointer select-none">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                Remember me
              </label>
              <a
                href="#forgot"
                onClick={(e) => e.preventDefault()}
                className="text-blue-600 hover:underline font-medium"
              >
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 p-3 text-base font-semibold text-white transition duration-200 hover:bg-blue-700 active:scale-[0.99]"
            >
              Log In
            </button>
          </form>

          {/* Signup Redirect */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a
              href="#signup"
              onClick={(e) => e.preventDefault()}
              className="text-blue-600 hover:underline font-medium"
            >
              Sign up
            </a>
          </p>
        </div>
    </div>
  );
};