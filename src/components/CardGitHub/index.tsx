import React from 'react';

interface CardGitHub {
  user: string;
  children?: React.ReactNode;
  role: string;
}

const CardGitHub: React.FC<CardGitHub> = ({ user, children, role }) => {
  return (
    <div className="flex flex-col items-center justify-center w-80 bg-gray-700 shadow-gray-800 p-5 rounded-md">
      <div className="flex flex-row items-center justify-center">
        <a href={`https://github.com/${user}`} target="_blank" rel="noreferrer">
          <img
            src={`https://github.com/${user}.png`}
            className="w-16 rounded-full"
          />
        </a>
        <div className="flex flex-col ml-4">
          <a
            className="text-indigo-200 text-lg hover:underline"
            href={`https://github.com/${user}`}
            target="_blank"
            rel="noreferrer"
          >
            @{user}
          </a>
          <p className="text-indigo-400 text-sm mt-1">{role}</p>
        </div>
      </div>
      <div className="flex items-center justify-center flex-row  mt-4 border-t border-t-gray-900 w-full">
        <p className="text-indigo-200 mt-4 capitalize hover:uppercase cursor-pointer">
          {children}
        </p>
      </div>
    </div>
  );
};

export default CardGitHub;
