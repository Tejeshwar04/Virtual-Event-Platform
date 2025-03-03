import React from 'react';
import { useNavigate } from 'react-router-dom';

const DemoPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-700 via-blue-500 to-indigo-600 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-bold mb-4 animate-pulse">Welcome to the Demo!</h1>
      <p className="text-xl mb-8 text-center max-w-xl">
        Experience the power of virtual events with our platform. We are excited to help you engage your audience like never before!
      </p>
      <button 
        onClick={goHome}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-110"
      >
        Back to Home
      </button>
    </div>
  );
};

export default DemoPage;
