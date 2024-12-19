import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
     <div className="h-screen bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1587307293162-2fb7a3ebfc75?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] flex flex-col justify-between w-full bg-red-300 pt-5">
        <img className='w-20 ml-5 ' src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="" />
        <div className="w-full bg-white py-3 flex flex-col items-center">
            <h2 className='pb-2 text-2xl font-medium'>Get Started With Uber</h2>
            <Link to={'/login'} className='w-[80vw] flex items-center justify-center bg-black text-white py-2 rounded-lg font-medium text-lg'>Continue</Link>
        </div>
    </div> 
    </>
  )
}

export default Home
