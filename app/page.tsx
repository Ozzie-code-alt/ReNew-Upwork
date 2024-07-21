import Categories from '@/components/Categories';
import CustomerReview from '@/components/CustomerReview';
import HeroPage from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <main className='flex overflow-x-hidden flex-col '>
      <Navbar />
      <HeroPage />
      <Categories />
      <CustomerReview />
      <Newsletter />
    </main>
  );
}
