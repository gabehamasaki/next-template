import { trpc } from '../utils';

export default function Home() {
  const hello = trpc.hello.useQuery({ text: 'world' });

  if (!hello.data) return <h1 className="">Carregando</h1>;

  return <h1 className="">{hello.data?.greeting}</h1>;
}
