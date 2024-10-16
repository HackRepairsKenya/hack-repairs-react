import axios from 'axios';
import { useFormik } from 'formik';
import { FcGoogle } from 'react-icons/fc'; 
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as Yup from "yup";


interface PropTypes {
  closeModal: () => void;
  setToken: (token: string) => void;  // Ensure it expects a token string
  setUser: (user: string) => void;    // Ensure it expects a user string
  token: string;
}

const SignIn = ({ closeModal , setToken,setUser,token }:PropTypes) => {
  const navigate = useNavigate();
  const location = useLocation();
 
  
  const redirectPath = location.state?.path || "/";
  

  // function to get user details
  const getUserDetails = async(token: string) =>{
    const response = await axios.get(`https://api.hackrepairs.co.ke/client/${token}`)
    setUser(response.data.name)
  }
  
  
  // Define validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Please enter email"),
    password: Yup.string().required("Please enter password"),
  });


   // useFormik hook
   const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        // Make API call to backend to confirm user details
        const response = await axios.post(
          "https://api.hackrepairs.co.ke/client/login",
          values
        );
        if (response) {
          // If user details are valid, login and navigate to the specified route
          setToken(response.data.token)
          await getUserDetails(token);
          console.log("token",token)
          
          
          navigate(redirectPath, { replace: true });
        } else {
          // If user details are invalid, display error message
          console.error("Invalid credentials");
          // Handle invalid credentials
          navigate("/login")
        }
      } catch (error) {
        console.error("Login failed:", error);
        // Handle login failure
        alert("Login failed. Please try again.");
      }
    },
  });
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <div>
      <div
        onClick={closeModal}
        className="bg-black hover:cursor-pointer h-screen absolute top-0 left-0 w-full bg-opacity-50 flex justify-center z-50 items-center"
      >
        <div
          onClick={stopPropagation} 
          className="bg-white w-[90%] md:w-1/2 shadow-lg rounded-lg mx-auto p-8 max-w-lg"
        >
          <h1 className="text-2xl text-center md:text-2xl font-bold mb-2">
            Login To Your Account
          </h1>
          <p className="text-center">Welcome! Please login to continue</p>
          <form className="space-y-4" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-base md:text-lg font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="Email Address"
                className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
               {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-2 text-base md:text-lg font-medium">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                placeholder="Password"
                className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
                {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500">{formik.errors.password}</div>
          ) : null}
            </div>

            <button
              type="submit"
              className="w-full text-base md:text-lg py-2 px-4 bg-button text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <button
            className="w-full mb-4 flex items-center justify-center text-base md:text-lg py-2 px-4 bg-white border border-gray-300 text-gray-700 font-semibold rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FcGoogle className="text-xl mr-2" /> Sign in with Google
          </button>
          <p className="text-center">
            <Link to="" className="text-button underline mt-4">
              Forgot Password
            </Link>
          </p>
          <p className="mt-4 text-button text-center">
            Don&rsquo;t have an account?{' '}
            <span
              onClick={()=>navigate('/sign-up')}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default SignIn;
