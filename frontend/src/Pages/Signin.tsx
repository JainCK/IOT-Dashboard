import React from "react"
import SigninForm from "../Components/SigninFrom"
import Quote from "../Components/Quote"

const Signin = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:block">
          <Quote />
        </div>
        <div>
          <SigninForm />
        </div>
      </div>
    </>
  )
}

export default Signin