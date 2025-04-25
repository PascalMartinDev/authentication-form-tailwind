import React from "react";

const SignInSignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 p-8">
      <div className="@container max-w-md w-full p-8 bg-blue-950/30 rounded-2xl shadow-[0_20px_50px_rgba(0,_29,_61,_0.7)] backdrop-blur-xl border border-blue-800/50 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 to-transparent rounded-2xl"></div>
        <div className="relative">
          <h2 className="text-3xl font-extrabold text-yellow-300 text-center mb-2 -tracking-tight">
            Create an Account
          </h2>
          <p className="text-blue-200 text-center mb-8">
            Join our community tday
          </p>
          <form className="mt-8 space-y-5">
            <div className="group">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 bg-blue-900/30 rounded-xl border border-blue-700/50 text-white placeholder-blue-300/50 outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent transition-all"
              />
            </div>
            <div className="group">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 bg-blue-900/30 rounded-xl border border-blue-700/50 text-white placeholder-blue-300/50 outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent transition-all"
              />
            </div>
            <div className="group">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 bg-blue-900/30 rounded-xl border border-blue-700/50 text-white placeholder-blue-300/50 outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent transition-all"
              />
            </div>
            
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
