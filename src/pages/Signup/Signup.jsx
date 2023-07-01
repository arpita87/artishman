import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen glass lg:py-0">
          <div className="w-full bg-gradient-to-r from-gray-200 to-blue-gray-400  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
                <div className="btn-group">
                  <button className="btn shadow-2xl  bg-blue-gray-400 hover:bg-blue-gray-200 border-0">
                    <Link to="/login ">Login</Link>
                  </button>
                  <button className="btn shadow-2xl  border-0">
                    <Link to="/signup">Signup</Link>
                  </button>
                </div>
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div className="flex gap-2 ">
                  <div className="w-1/2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Your name"
                      required=""
                    />
                  </div>
                  <div className="w-1/2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your mail"
                      required=""
                    />
                  </div>
                </div>
                <div className="flex gap-2 ">
                  <div className="w-1/2">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Password"
                      required=""
                    />
                  </div>
                  <div className="w-1/2">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Confirm password"
                      required=""
                    />
                  </div>
                </div>
                <div className="">
                  <input
                    type="file"
                    name="photo"
                    id="photo"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Confirm password"
                    required=""
                  />
                </div>
                <div className="">
                
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Gender</option>
                    <option value="US">Male</option>
                    <option value="CA">Female</option>
                    <option value="FR">Tiktoker</option>
                 
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full text-black bg-gradient-to-r from-blue-gray-500 to-gray-200  hover:bg-teal-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 "
                >
                  Sign up
                </button>
                <p className="text-sm font-semibold text-black  dark:text-gray-400">
                  Already registered?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-white hover:underline dark:text-primary-500"
                  >
                    Log in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
