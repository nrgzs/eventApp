import EventCard from '@/components/eventCard';
import { FetchDataError } from '@/app/lib/exceptions';


async function getData(category) {
  const res = await fetch('http://localhost:3000/api/events/allevents', {
    method: 'POST',
    body: JSON.stringify({ city: category }),
    cache: 'no-store',
  });

  if (!res.ok) {
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
