import React from "react";

const SignInSignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-135 from-blue-950 via-blue-900 to-blue-800 p-8">
      <div className="@container max-w-md w-full p-8 bg-blue-950/30 rounded-2xl shadow-[0_20px_50px_rgba(0,_29,_61,_0.7)] backdrop-blur-xl border border-blue-800/50 relative">
        <div className="absolute inset-0 bg-gradient-t-br from-blue-800/20 to-transparent rounded-2xl"></div>
        <div className="relative">
          <h2 className="text-3xl font-extrabold text-yellow-300 text-center mb-2 -tracking-tight">
            Create an Account
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
