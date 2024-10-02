import { Link } from "react-router-dom";


export default function PageNotFound() {
  return (
    <div className='h-screen flex flex-col items-center justify-center '>
        <h1 className="text-2xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-4">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="text-green-800 hover:underline">
        Back to Home Page
      </Link>
      
    </div>
  )
}
