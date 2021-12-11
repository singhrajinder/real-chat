import React from "react";
function Login() {
  return (
    <>
      <section className="bg-hero-pattern bg-cover bg-center h-screen login-section">
        <div class="container px-5 py-24 mx-auto">
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:m-auto w-full md:py-8 px-4 mt-8 md:mt-0 backdrop-blur-sm bg-white-transparent rounded-xl shadow-3xl">
            <h3 className="text-center text-3xl font-bold">Login</h3>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">
                User Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Type your username"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="psw" class="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="psw"
                name="psw"
                placeholder="Type your password"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Login
            </button>
            <p class="text-sm text-center text-gray-500 mt-5">
              Or Sign Up Using
            </p>
            <div className="flex flex-row justify-center items-center mt-5 space-x-4 ...">
              <a
                href="/"
                className="w-10 h-10 text-2xl bg-white flex justify-center items-center rounded-full"
              >
                <em class="bx bxl-facebook"></em>
              </a>
              <a
                href="/"
                className="w-10 h-10 text-2xl bg-white flex justify-center items-center rounded-full"
              >
                <em class="bx bxl-twitter"></em>
              </a>
              <a
                href="/"
                className="w-10 h-10 text-2xl bg-white flex justify-center items-center rounded-full"
              >
                <em class="bx bxl-google"></em>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
