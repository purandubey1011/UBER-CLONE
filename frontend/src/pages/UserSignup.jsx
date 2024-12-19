import { useState } from "react"
import { Link } from "react-router-dom"

const UserSignup = () => {
   const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [userData, setUserData] = useState({})
    console.log(userData)
    function submitHandler (e) {
      e.preventDefault()
      setUserData({
        fullname:{
          firstname, lastname
        },
        email,
        password
      })
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
        <form className="flex flex-col items-start justify-center mx-5 pt-5 " onSubmit={submitHandler}>

          <div className="mb-3">
          <h3 className="font-bold text-gray-700 pb-1 text-sm">
            What is your name?
          </h3>
          <div className="flex gap-1">

          <input
            className="px-4 py-2 bg-gray-100 rounded w-1/2 placeholder:text-gray-400 placeholder:text-sm placeholder:font-medium"
            type="text"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />

          <input
            className="px-4 py-2 bg-gray-100 rounded w-1/2 placeholder:text-gray-400 placeholder:text-sm placeholder:font-medium"
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          </div>
          </div>

          <h3 className="font-bold text-gray-700 pb-1 text-sm">
            What is your email?
          </h3>

          <input
            className="px-4 py-2 bg-gray-100 rounded w-full placeholder:text-gray-400 placeholder:text-sm placeholder:font-medium"
            type="email"
            placeholder="mia@khalifa.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className="font-bold text-gray-700 pb-1 mt-3 text-sm">
            Enter password
          </h3>

          <input
            className="px-4 py-2 bg-gray-100 rounded w-full placeholder:text-gray-400 placeholder:text-sm placeholder:font-medium"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="px-4 py-2 bg-black text-[#dadada] font-semibold rounded w-full mt-5">
            Signup
          </button>
        </form>
        <h3 className="flex items-center justify-center mt-3 font-semibold tracking-tight text-gray-800 ">
          Already have an account??{" "}
          <Link to="/login" className="inline-block pl-2 text-blue-600">
            {" "}
            Login here
          </Link>
        </h3>
      </div>

      <div className="w-full flex items-center justify-center px-4 mb-4">
        <p className="text-[10px] leading-tight">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa molestiae ut illo cum voluptates corrupti illum fugit maxime nulla quasi facilis, rerum alias velit repudiandae sapiente reiciendis ullam, impedit natus!</p>
      </div>
    </div>
  )
}

export default UserSignup
