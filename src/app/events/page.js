import EventCard from '@/components/eventCard';

async function getData() {
  const res = await fetch('http://localhost:3000/api/events/allevents', {
    cache: 'no-store',
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function EventsPage() {
  const data = await getData();
  return (
    <div className="minh-[85vh] flex-col flex items-center ">
      <h2 className="text-2xl font-bold mb-4">All Events</h2>
      {data.map((d) => {
        return <EventCard key={d.id} event={d} />;
      })}
    </div>
  );
}
