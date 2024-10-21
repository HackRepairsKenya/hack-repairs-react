import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc'; // Import Google icon
import axios from 'axios'; // Import axios
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';

const SignUp = () => {
  const [name, setName] = useState<string>(''); // New state for name
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false); // Optional: for showing loading state
  const navigate = useNavigate();
  const [showAlert,setShowAlert] = useState<boolean>(false);
  const [showForm,setShowForm] = useState<boolean>(true);



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
      // Prepare the data, including the name
      const data = {
        name,
        email,
        password,
      };

      // Send a POST request to the API
      const response = await axios.post('https://api.hackrepairs.co.ke/clients', data);
      console.log(response.data)
      const { id } = response.data;
      localStorage.setItem('client_id', id);
      // Handle success response
      console.log('Sign-up successful:', response.data);
      setShowForm(false)
      setShowAlert(true)
      setTimeout(()=>{
        navigate('/')
      },3000);
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

  return (<div>
    
    {showForm &&  <div className="bg-gradient-to-r from-gray-800 to-green-800 h-screen absolute top-0 left-0 w-full flex justify-center items-center">
     <div className="bg-white w-[90%] md:w-1/2 shadow-lg rounded-lg mx-auto p-8 max-w-lg">
        <h1 className="text-2xl text-center md:text-2xl font-bold mb-2">Create Your Account</h1>
        <p className="text-center">Welcome! Please sign up to continue</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 text-base md:text-lg font-medium">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
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
            className="w-full text-base md:text-lg py-2 px-4 bg-button text-white font-semibold rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        <p className="mt-4 text-center cursor-pointer">
          Have an account? <span className="text-blue-500 hover:underline" onClick={() => navigate('/login')}>Sign In</span>
        </p>
      </div>
      
    </div>}
    <div className='bg-white h-screen items-center flex justify-center'>
    {showAlert && <Alert variant="filled" severity="success">
  Account created successfully.
</Alert>}
</div>
    </div>
  );
};

export default SignUp;
