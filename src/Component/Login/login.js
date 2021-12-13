import React,{useState} from "react";
import { useDispatch } from "react-redux";
import {signUp} from '../../actions/index'



function Login() {

  // const[ userObj,setUserObj] = useState({
  //   firstname: "",
  //   lastname:"",
  //   email : "",
  //   password:""
  // });

  // const Dispatcher = useDispatch();

  // const changeHandler = (e)=>{
  //   setUserObj((prev)=>({
  //    ...prev,
  //    [e.target.name] : e.target.value
  //   }));

  // }


  // const clickHandler = ()=>{
  //       Dispatcher(signUp(userObj));
  //       setUserObj((prev)=>({
  //         ...prev,
  //          firstname: "",
  //          lastname:"",
  //          email : "",
  //          password:""
       
  //          }))
  // }




  return (
    <>
      <section className="bg-hero-pattern bg-cover bg-center  h-screen login-section">
        <div className="container px-5 py-20  mx-auto">
          <div className="lg:w-1/3 md:w-1/2 flex py-6 flex-col md:m-auto w-full md:py-8 px-4 mt-8 md:mt-0 backdrop-blur-sm bg-white-transparent rounded-xl shadow-3xl">
            <h3 className="text-center text-3xl mb-6 font-bold">SignUp</h3>
            <div className="relative mb-3">
              {/* <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                First Name
              </label> */}
              <input
                type="text"
                id="firstname"
                //  value= {userObj.firstname}
                //  onChange = {changeHandler}
                name="firstname"
                placeholder="Enter your First Name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              {/* <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Last Name
              </label> */}
              <input
                type="text"
                id="lastname"
                // value= {userObj.lastname}
                // name="lastname"
                // onChange = {changeHandler}
                placeholder="Enter your Last Name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              {/* <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                E-mail
              </label> */}
              <input
                type="email"
                id="email"
                // value= {userObj.email}
                // name="email"
                // onChange = {changeHandler}
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
                // value= {userObj.password}
                // onChange = {changeHandler}
                name="password"
                placeholder="Enter your password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <button /*onClick={clickHandler}*/ className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              SignUp
            </button>
            <p className="text-sm text-center text-gray-500 mt-5">
              Or Sign Up Using
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
    </>
  );
}

export default Login;
