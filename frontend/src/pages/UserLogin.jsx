import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";

const UserLogin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  function submitHandler (e) {
    e.preventDefault()
    setUserData({email, password})
    setEmail('')
    setPassword('')
  }

  return (
    <div className="flex flex-col items-start justify-between h-screen w-full">
      <div>
        <div className="w-16 h-16 ml-5 mt-5">

        <img
          className="w-16"
          src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
          alt=""
        />
        </div>
        <form className="flex flex-col items-start justify-center ml-8 pt-5 " onSubmit={submitHandler}>
          <h3 className="font-bold text-gray-700 pb-1 text-sm">
            What is your email?
          </h3>

          <input
            className="px-4 py-2 bg-gray-100 rounded w-[80vw] placeholder:text-gray-400 placeholder:text-sm placeholder:font-medium"
            type="email"
            placeholder="mia@khalifa.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className="font-bold text-gray-700 pb-1 mt-3 text-sm">
            Enter password
          </h3>

          <input
            className="px-4 py-2 bg-gray-100 rounded w-[80vw] placeholder:text-gray-400 placeholder:text-sm placeholder:font-medium"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="px-4 py-2 bg-black text-[#dadada] font-semibold rounded w-[80vw] mt-5">
            Login
          </button>
        </form>
        <h3 className="flex items-center justify-center mt-3 font-semibold tracking-tight text-gray-800 ">
          New here?{" "}
          <Link to="/signup" className="inline-block pl-2 text-blue-600">
            {" "}
            Create new Account
          </Link>
        </h3>
      </div>

      <div className="w-full flex items-center justify-center ">
        <Link
          className="px-4 py-2 bg-green-600 text-white font-semibold rounded w-[80vw] flex items-center justify-center mb-8"
          to="/captain-login"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
