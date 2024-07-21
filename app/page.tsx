import Categories from '@/components/Categories';
import HeroPage from '@/components/Hero';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <main className='flex overflow-x-hidden flex-col '>
      <Navbar />
      <HeroPage />
      <Categories />
    </main>
  );
}
