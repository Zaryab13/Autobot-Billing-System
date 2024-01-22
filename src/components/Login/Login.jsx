import React from "react";

const Login = () => {
  return (
    <main className="flex bg-gray-200/70 h-screen">
      <div className="w-2/4 bg-login-side-image bg-cover bg-center"></div>
      <div className="flex w-2/4 items-center justify-center px-4">
        <div className="text-center flex flex-col gap-[0.5rem]">
          <div className="mb-4">
            <h1 className="text-3xl">AutoBot Billing System</h1>
            <h3 className="text-xl text-gray-500/80">Log in to Continue</h3>
          </div>
          <form className="flex flex-col gap-4">
            {/* <input
              type="text"
              className="outline-none rounded-md bg-[rgb(232, 240, 254)] shadow-md py-[0.32rem] px-[0.75rem]  font-normal focus:border focus:border-gray-500"
              placeholder="Username"
            /> */}
            <input
              type="text"
              placeholder="Username"
              class="mt-1 font-normal block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
            <input
              type="password"
              className="mt-1 font-normal block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
             focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              placeholder="Password"
            />
            <button
              type="submit"
              className="outline-none bg-[rgba(238,80,87,0.9)] py-2 text-white/90 hover:bg-[rgba(238,80,87,1)] focus:outline focus:outline-blue-300 rounded-xl transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
