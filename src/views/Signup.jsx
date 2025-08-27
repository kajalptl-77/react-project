import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { signupValidationSchema } from "../validations/ValidationSchemas.js";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000')",
      }}
    >
      {/* Dark overlay (same as login) */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Glassmorphic signup box (same style as login) */}
      <div className="relative z-10 w-96 p-8 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl text-white">
        <h2 className="text-3xl font-bold text-center drop-shadow-lg">
          Create Account
        </h2>
        <p className="text-center text-sm text-gray-200 mb-6 drop-shadow-md">
          Start your travel journey with us 🌍
        </p>

        <Formik
          initialValues={{
            name: "",
            mobile: "",
            email: "",
            password: "",
          }}
          validationSchema={signupValidationSchema}
          onSubmit={(values) => {
            console.log("✅ Signup Data:", values);
          }}
        >
          {() => (
            <Form className="space-y-4">
              {/* Full Name */}
              <div>
                <Field
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-green-400"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <Field
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-green-400"
                />
                <ErrorMessage
                  name="mobile"
                  component="div"
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              {/* Email */}
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-green-400"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              {/* Password with Eye Icon */}
              <div className="relative">
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-green-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {/* Place error message OUTSIDE so it won’t shift the icon */}
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-400 text-sm mt-1"
              />

              {/* Signup Button (same look as login button) */}
              <button
                type="submit"
                className="w-full py-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition font-semibold"
              >
                Sign Up
              </button>
            </Form>
          )}
        </Formik>

        {/* Already have an account */}
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="hover:underline text-gray-200">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
