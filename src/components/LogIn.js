import React from "react";

function LogIn() {
  return (
    <div class="bg-gray-100 flex justify-center items-center h-screen">
      <div class="w-1/2 h-full hidden lg:block rounded-tr-[8rem]">
        <img
          src="https://images.unsplash.com/photo-1586842855916-86c7d1f32057?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEdvbGR8ZW58MHx8MHx8fDA%3D"
          alt="Placeholder Image"
          class="object-cover w-full h-full rounded-tr-2xl"
        />
      </div>

      <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 class="text-3xl font-semibold mb-6 text-black text-center mb-4">
          Login
        </h1>
        <form action="#" method="POST">
          <div class="mb-4 ">
            <label for="username" class="block text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              class="bg-gray-100 text-gray-600 mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 "
              autocomplete="off"
            />
          </div>

          <div class="mb-4">
            <label for="password" class="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              class="bg-gray-100 text-gray-600 mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
              autocomplete="off"
            />
          </div>

          <div class="mb-4 flex items-center bg-gray-100">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              class="text-blue-500 "
            />
            <label for="remember" class="text-gray-600 ml-2 ">
              Remember Me
            </label>
          </div>

          <div class="mb-6 text-blue-500">
            <a href="#" class="hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            class="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
          >
            Login
          </button>
        </form>
        <div class="mt-6 text-gray-600 text-center">
          <a href="/signup" class="hover:underline">
            Sign up Here
          </a>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
