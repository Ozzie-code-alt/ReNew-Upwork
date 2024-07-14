import HeroPage from '@/components/Hero';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <main className='h-auto  w-auto'>
      <Navbar />
      <HeroPage />
    </main>
  );
}
