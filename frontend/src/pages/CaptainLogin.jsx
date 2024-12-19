import { useState } from "react"
import { Link } from "react-router-dom"

const CaptainLogin = () => {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setcaptainData] = useState({})
  
    function submitHandler (e) {
      e.preventDefault()
      setcaptainData({email, password})
      setEmail('')
      setPassword('')
    }
  return (
    <div className="flex flex-col items-start justify-between h-screen w-full">
    <div>
    <div className="w-16 h-16 ml-5 mt-5">

    <img
        className="w-24"
        src="https://www.svgrepo.com/show/505031/uber-driver.svg"
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
        Join a fleet?{" "}
        <Link to="/captain-signup" className="inline-block pl-2 text-blue-600">
          {" "}
          Register as a Captain
        </Link>
      </h3>
    </div>

    <div className="w-full flex items-center justify-center ">
      <Link
        className="px-4 py-2 bg-orange-600 text-white font-semibold rounded w-[80vw] flex items-center justify-center mb-8"
        to="/login"
      >
        Sign in as User
      </Link>
    </div>
  </div>
  )
}

export default CaptainLogin