import { useState } from "react";
import LabelInput from "../Components/Labelinput"
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../../config"
import axios from "axios"

const SigninForm = () => {
  const navigate = useNavigate();
  const [signInInputs, setSignInInputs] = useState({
    email: "",
    password: "",
  });

  async function signIn() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signin`,
        signInInputs
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/dashboard");
    } catch (error) {
      alert("Error while signing in");
    }
  }

  return (
    <div>    
      <div className="h-screen flex justify-center flex-col">
    <div className="flex justify-center">
      <div className="font-Raleway">
        <div className="px-10">
          <div className="text-3xl font-extrabold">Sign into your account</div>
          <div className="text-slate-400 text-sm text-center">
            Or
            <Link className="pl-2 text-blue-700" to="/signup">
              signup for a new account
            </Link>
          </div>
        </div>
        <div className="pt-2">
        <LabelInput
            type="email"
            placeholder="Email Address"
            onChange={(e) =>
              setSignInInputs({ ...signInInputs, email: e.target.value })
            }
          />
          <LabelInput
            
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setSignInInputs({ ...signInInputs, password: e.target.value })
            }
          />
          <button
            onClick={signIn}
            type="button"
            className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Sign up
          </button>

        </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default SigninForm