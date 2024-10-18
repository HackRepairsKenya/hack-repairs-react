import SignIn from "@/components/auth/SignIn";
interface PropTypes {
    
    setToken: (token: string) => void;  // Ensure it expects a token string
    setUser: (user: string) => void;    // Ensure it expects a user string
    token: string;
  }

export default function Login({  }:PropTypes) {
  return (
    <div>
      <SignIn   />
    </div>
  )
}
