import SignupForm from "../Components/SignupForm";
import Quote from "../Components/Quote";

const Signup = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:block">
          <Quote />
        </div>
        <div>
          <SignupForm />
        </div>
      </div>
    </>
  );
};

export default Signup;
