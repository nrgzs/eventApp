import EventCard from '@/components/eventCard';
import { FetchDataError } from '@/app/lib/exceptions';
import { notFound } from 'next/navigation';

export const dynamicParams = false// true | false,


async function getData(category) {
  const res = await fetch('http://localhost:3000/api/events/allevents', {
    method: 'POST',
    body: JSON.stringify({ city: category }),
    cache: 'no-store',
  });

  if (!res) {
    // This will activate the closest `error.js` Error Boundary
    throw new FetchDataError();
  
  }

  return res.json();
}

export default async function CategoryPage({ params }) {
  const { category } = params;

  const data = await getData(category);
  return (
    <div className="min-h-[85vh] flex-col flex items-center ">
      <h2 className="text-2xl font-bold mb-4">{category.toUpperCase()}</h2>
      {data.map((d) => {
        return <EventCard key={d.id} event={d} />;
      })}
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await fetch('http://localhost:3000/api/events/categories').then(
    (res) => res.json()
  );

  const staticParams = posts.map((post) => ({
    category: post.id,
  }));
 

  return staticParams;
}