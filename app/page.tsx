import Dashbaord from './components/Dashboard';
import SidePannel from './components/SidePannel';

export default function Home() {
  return (
    <main className='flex min-h-screen justify-stretch flex-wrap'>
      <Dashbaord />
      <SidePannel />
    </main>
  );
}
