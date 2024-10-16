import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc'; // Import Google icon
import axios from 'axios'; // Import axios
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false); // Optional: for showing loading state
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Set loading to true
    setLoading(true);

    try {
      // Prepare the data
      const data = {
        email,
        password,
      };

      // Send a POST request to the API
      const response = await axios.post('https://api.hackrepairs.co.ke/clients', data);
      
      // Handle success response
      console.log('Sign-up successful:', response.data);
      alert('Account created successfully!');
      navigate('/')
    } catch (error) {
      // Handle error
      console.error('Error signing up:', error);
      alert('There was an error creating your account. Please try again later.');
    } finally {
      // Set loading to false
      setLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    // Implement Google Sign-In logic here
  };

  return (
    <div className="bg-black h-screen absolute top-0 left-0 w-full bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-[90%] md:w-1/2 shadow-lg rounded-lg mx-auto p-8 max-w-lg">
        <h1 className="text-2xl text-center md:text-2xl font-bold mb-2">Create Your Account</h1>
        <p className="text-center">Welcome! Please sign up to continue</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-base md:text-lg font-medium">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 text-base md:text-lg font-medium">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirm-password" className="mb-2 text-base md:text-lg font-medium">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full text-base md:text-lg py-2 px-4 bg-button text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <button
          onClick={handleGoogleSignIn}
          className="w-full mb-4 flex items-center justify-center text-base md:text-lg py-2 px-4 bg-white border border-gray-300 text-gray-700 font-semibold rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <FcGoogle className="text-xl mr-2 " /> Sign up with Google
        </button>
        <p className="mt-4 text-center">
          Have an account? <span className="text-blue-500 hover:underline">Sign In</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
