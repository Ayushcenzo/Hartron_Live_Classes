import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-slate-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden"
      >
        <div className="bg-blue-600 px-6 py-8 text-center bg-gradient-to-r from-blue-600 to-indigo-600">
          <img
            src="https://res.cloudinary.com/dnpn8ljki/image/upload/v1750770016/Hartron_Logo1_ryz9yl.png"
            alt="Hartron"
            className="h-10 mx-auto filter brightness-0 invert"
          />
          <h2 className="mt-4 text-white text-2xl font-bold">Welcome Back</h2>
          <p className="text-blue-100 text-sm mt-1">
            Sign in to access your courses
          </p>
        </div>

        <form className="px-8 py-10 space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Email Address
            </label>
            <input
              type="email"
              required
              className="mt-1 w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              required
              className="mt-1 w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 rounded border-slate-300"
              />
              <label className="ml-2 block text-sm text-slate-700">
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-all"
          >
            Sign in
          </button>

          <div className="text-center text-sm text-slate-600 mt-4">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-bold text-blue-600 hover:text-blue-500"
            >
              Sign up
            </Link>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
