import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginValidationSchema } from "../validations/ValidationSchemas.js";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const handleSubmit = (values) => {
    console.log("Login values:", values);
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
      }}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Glassmorphic login box */}
      <div className="relative z-10 w-96 p-8 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl text-white">
        <h2 className="text-3xl font-bold text-center drop-shadow-lg">
          Welcome Back
        </h2>
        <p className="text-center text-sm text-gray-200 mb-6 drop-shadow-md">
          Login with your mobile number
        </p>

        <Formik
          initialValues={{ mobile: "", password: "" }}
          validationSchema={loginValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-4">
            {/* Mobile */}
            <div>
              <Field
                type="tel"
                name="mobile"
                maxLength={10}
                placeholder="Mobile Number"
                className="w-full px-4 py-2 rounded-lg bg-white/40 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-blue-400 shadow-inner"
              />
              <ErrorMessage
                name="mobile"
                component="div"
                className="text-red-400 text-sm mt-1"
              />
            </div>

            {/* Password */}
            <div>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-2 rounded-lg bg-white/40 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-blue-400 shadow-inner"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-400 text-sm mt-1"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition font-semibold shadow-lg"
            >
              Login
            </button>
          </Form>
        </Formik>

        {/* Links */}
        <div className="flex justify-between mt-4 text-sm">
          <Link to="/forgot" className="hover:underline text-gray-200">
            Forgot Password?
          </Link>
          <Link to="/signup" className="hover:underline text-gray-200">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
