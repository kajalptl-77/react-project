import * as Yup from "yup";

// 🔹 Login validation (Mobile + Password)
export const loginValidationSchema = Yup.object({
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
    .required("Mobile number is required"),

  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      "Password must contain at least 6 characters, one uppercase, one lowercase, one number, and one special character"
    )
    .required("Password is required"),
});

// 🔹 Signup validation (Name + Mobile + Password + Email)
export const signupValidationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Name must only contain letters and spaces")
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),

  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
    .required("Mobile number is required"),

  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      "Password must contain at least 6 characters, one uppercase, one lowercase, one number, and one special character"
    )
    .required("Password is required"),

  email: Yup.string()
    .matches(
      /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      "Enter a valid email (lowercase letters, numbers, @ required)"
    )
    .required("Email is required"),
});
