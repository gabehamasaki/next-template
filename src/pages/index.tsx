import { trpc } from '../utils';

export default function Home() {
  const hello = trpc.hello.useQuery({ text: 'world' });

  if (!hello.data)
    return (
      <div className="container h-screen w-screen mx-auto flex items-center justify-center">
        <h1 className="">Carregando</h1>
      </div>
    );

  return (
    <div className="container h-screen w-screen mx-auto flex items-center justify-center flex-col">
      <div className="flex flex-col items-center justify-center w-80 bg-gray-700 shadow-gray-800 p-5 rounded-md">
        <div className="flex flex-row items-center justify-center">
          <img
            src="https://github.com/poolar2021.png"
            className="w-16 rounded-full"
          />
          <div className="flex flex-col ml-4">
            <h1 className="text-indigo-200 text-lg">@poolar2021</h1>
            <p className="text-indigo-400 text-sm mt-1">Software Engineer</p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-row  mt-4 border-t border-t-gray-900 w-full">
          <p className="text-indigo-200 mt-4 capitalize hover:uppercase cursor-pointer">
            {hello.data.greeting}
          </p>
        </div>
      </div>
    </div>
  );
}
