"use client"

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation'

const SigninForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (result?.error) {
      alert("Error signing in");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-6 p-8 bg-white rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign In</h2>
        <input 
          type="email" 
          placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="password" 
          placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          type="submit" 
          className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
        >
          Sign In
        </button>
        <p className="text-center text-gray-600">
          Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a>
        </p>
      </form>
    </div>
  );
}

export default SigninForm;