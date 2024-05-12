import { useState } from "react";
import LabelInput from "../Components/Labelinput"
import { Link } from "react-router-dom"

const SigninForm = () => {
    const [signUpInputs, setSignUpInputs] = useState({
        email: "",
        password: "",
      });

      function signUp() {
        alert("Your are signed Up")
      }

  return (
    <div>    
      <div className="h-screen flex justify-center flex-col">
    <div className="flex justify-center">
      <div>
        <div className="px-10">
          <div className="text-3xl font-extrabold">Sign into your account</div>
          <div className="text-slate-400 text-lg text-center">
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
              setSignUpInputs({ ...signUpInputs, email: e.target.value })
            }
          />
          <LabelInput
            
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setSignUpInputs({ ...signUpInputs, password: e.target.value })
            }
          />
          <button
            onClick={signUp}
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