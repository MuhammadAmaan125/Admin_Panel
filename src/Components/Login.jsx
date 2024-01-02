import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Login() {


  const nav =useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleValidation = () => {
    if (!email || !password) {
      // Display toast for empty fields
      toast.error('Please enter both email and password.');
      return;
    }

    // Your existing validation logic here...

    // Example: Check if email is valid
    if (email =="" || password=="") {
      toast.error('Invalid email address or Password ');
      return;
    }

    // Example: Check if password is valid
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long.');
      return;
    }

if(email=="admin@admin.com" || password=="admin123"){
  toast.success('Login successfully!');
  nav("/AddPost")
}

    // If validation passes, perform further actions
    // ...

    // Example: Display success toast

  };



  return (
    <>
      

      <section>
  <div className="grid grid-cols-1 lg:grid-cols-2">
    <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        <h2 className="text-3xl font-bold leading-tight text-green-700 sm:text-4xl">
          Sign in
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Don&#x27;t have an account?{" "}
          <a
            href="#"
            title=""
            className="font-semibold text-green-700 transition-all duration-200 hover:underline"
          >
            Create a free account
          </a>
        </p>
        <form action="#" method="POST" className="mt-8">
          <div className="space-y-5">
            <div>
              <label for="" className="text-base font-medium text-gray-900">
                {" "}
                Email address{" "}
              </label>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label for="" className="text-base font-medium text-gray-900">
                  {" "}
                  Password{" "}
                </label>
                <a
                  href="#"
                  title=""
                  className="text-sm font-semibold text-black hover:underline"
                >
                  {" "}
                  Forgot password?{" "}
                </a>
              </div>
              <div className="mt-2">
                <input
                   onChange={(e)=>setPassword(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <button
              onClick={handleValidation}
                type="button"
                className="inline-flex w-full items-center justify-center rounded-md bg-green-700 px-3.5 py-2.5 font-semibold leading-7 duration-300 text-white hover:bg-green-800"
              >
                Login
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="ml-2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </form>
    
      </div>
    </div>
    <div className="h-full w-full">
      <img
        className="mx-auto h-full w-full rounded-md object-cover"
        src="https://covid19.unitedpeople.global/wp-content/uploads/2020/10/Saylani.jpg"
        alt=""
      />
    </div>
  </div>
</section>




    </>
  )
}

export default Login
