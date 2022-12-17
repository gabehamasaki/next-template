import CardGitHub from 'components/CardGitHub';

import { trpc } from '../utils';

export default function Home() {
  const hello = trpc.hello.useQuery({ text: 'world' });

  if (!hello.data)
    return (
      <div className="container h-screen w-screen mx-auto flex items-center justify-center">
        <h1 className="text-indigo-200 text-lg">Carregando</h1>
      </div>
    );

  return (
    <div className="container h-screen w-screen mx-auto flex items-center justify-center flex-col">
      <CardGitHub user="gabehamasaki" role="Desenvolvedor full Stack">
        {hello.data.greeting}
      </CardGitHub>
    </div>
  );
}
