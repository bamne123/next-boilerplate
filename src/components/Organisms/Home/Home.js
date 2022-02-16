import useSWR from 'swr';
import Config from 'Lib/config';
import HomeContainer from './HomeContainer';

function Index() {
  const { data, error } = useSWR(`${Config.API_URL}/welcome`);

  if (error) return <div>Get started by editing</div>;
  if (!data) return <div>loading...</div>;

  return <HomeContainer data={data} />;
}

export default Index;
