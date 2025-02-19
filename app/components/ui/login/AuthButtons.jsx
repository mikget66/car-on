import { FaApple, FaGoogle } from "react-icons/fa";

const AuthButtons = () => {
  return (
    <>
    <button className="btn-dark  signin-btn">
          <FaApple /> Sign up with Apple
        </button>
        <button className="btn-light signin-btn ">
          <FaGoogle />
          Sign up with Google
        </button>
    </>
  )
}

export default AuthButtons