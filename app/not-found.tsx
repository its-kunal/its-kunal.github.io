import React from "react";

const NotFoundContent: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-2xl text-gray-800 mb-6">Oops! Page not found.</p>
        <p className="text-lg text-gray-600 mb-8">
          Are you sure you typed that URL correctly? Or perhaps you're on a
          quest for something that doesn't exist?
          <br />
          Like a unicorn riding a narwhal? Or a pizza that sings opera?
          <br />
          Seriously though, what exactly are you looking for?
        </p>
        <a
          href="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

const NotFoundBackDrop = () => {
  return (
    <div className="absolute -z-10 inset-0 overflow-hidden">
      <div className="h-52 w-10 bg-green-200 absolute top-[27%] left-[63%] blur-3xl m-20"></div>
      <div className="h-44 w-10 bg-yellow-200 absolute top-[1%] left-[36%] blur-3xl m-20"></div>
      <div className="h-52 w-10 bg-amber-200 absolute top-[9%] left-[13%] blur-3xl m-20 opacity-75"></div>
      <div className="h-36 w-10 rotate-6 bg-fuchsia-200 absolute top-[56%] left-[35%] blur-3xl m-20"></div>
      <div className="h-52 w-10 rotate-12 bg-orange-200 absolute top-[53%] left-[1%] blur-3xl m-20"></div>
      <div className="h-52 w-20 rotate-45 bg-rose-100 absolute top-[66%] left-[80%] blur-3xl m-20"></div>
    </div>
  );
};

const NotFoundPage = () => {
  return (
    <div className="relative min-h-screen">
      <NotFoundContent />
      <NotFoundBackDrop />
    </div>
  );
};

export default NotFoundPage;
