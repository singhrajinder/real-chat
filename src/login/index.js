import React,{useState} from "react";
import { useDispatch } from "react-redux";
import {logIn} from '../actions/index'



const  Login = ()=> {
  const[ userObj,setUserObj] = useState({
    email : "",
    password:""
  });


  const Dispatcher = useDispatch();

  const changeHandler = (e)=>{
    setUserObj((prev)=>({
     ...prev,
     [e.target.name] : e.target.value
    }));
  }


  const clickHandler = ()=>{
        Dispatcher(logIn(userObj));
        setUserObj((prev)=>({
          ...prev,
           email : "",
           password:""
           }))
  }

  return (
    <>
     <div style={{position : "relative"}}>
      <section  className="bg-hero-pattern bg-cover bg-center  h-h-vh login-section">
        <div className="container px-5 py-20  mx-auto">
          <div className="lg:w-1/3 md:w-1/2 flex py-6 flex-col md:m-auto w-full md:py-8 px-4 mt-8 md:mt-0 backdrop-blur-sm bg-white-transparent rounded-xl shadow-3xl">
            <h3 className="text-center text-3xl mb-6 font-bold">Log-in</h3>
              {/* <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                First Name
              </label> */}

            <div className="relative mb-4">
              {/* <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                E-mail
              </label> */}
              <input
                type="email"
                id="email"
                value= {userObj.email}
                name="email"
                onChange = {changeHandler}
                placeholder="Enter your Email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-6">
              {/* <label htmlFor="psw" className="leading-7 text-sm text-gray-600">
                Password
              </label> */}
              <input
                type="password"
                id="psw"
                value= {userObj.password}
                onChange = {changeHandler}
                name="password"
                placeholder="Enter your password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button onClick={clickHandler} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Log-in
            </button>
            <p className="text-sm text-center text-gray-500 mt-5">
              Or Log-in Using
            </p>
            <div className="flex flex-row justify-center items-center mt-5 space-x-4 ...">
              <a
                href="/"
                className="w-10 h-10 text-2xl bg-white flex justify-center items-center rounded-full"
              >
                <em className="bx bxl-facebook"></em>
              </a>
              <a
                href="/"
                className="w-10 h-10 text-2xl bg-white flex justify-center items-center rounded-full"
              >
                <em className="bx bxl-twitter"></em>
              </a>
              <a
                href="/"
                className="w-10 h-10 text-2xl bg-white flex justify-center items-center rounded-full"
              >
                <em className="bx bxl-google"></em>
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

export default Login;
