import CategoryCard from '@/components/categoryCard';
import Image from 'next/image';
import { FetchDataError } from './lib/exceptions';

async function getData() {
  const res = await fetch('http://localhost:3000/api/events/categories', {
    cache: 'no-store',
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new FetchDataError();
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
 
  return (
    <div className="min-h-[85vh] flex-col flex items-center ">
      {data.map((d) => {
        return <CategoryCard key={d.id} event={d} />;
      })}
    </div>
  );
}
