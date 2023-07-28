import CategoryCard from '@/components/categoryCard';
import Image from 'next/image';

async function getData() {
  const res = await fetch('http://localhost:3000/api/events/categories', {
    cache: 'no-store',
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <div className="minh-[85vh] flex-col flex items-center ">
      {data.map((d) => {
        return <CategoryCard key={d.id} event={d} />;
      })}
    </div>
  );
}
