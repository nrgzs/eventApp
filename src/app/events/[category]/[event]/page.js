import EventCard from '@/components/eventCard';
import { FetchDataError } from '@/app/lib/exceptions';

async function getData(event) {
  const res = await fetch('http://localhost:3000/api/events/event', {
    method: 'POST',
    body: JSON.stringify({ id: event }),
    cache: 'force-cache',
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new FetchDataError();
  }

  return res.json();
}

export default async function EventPage({ params }) {
  const { event } = params;
  const data = await getData(event);


  return (
    <div className='min-h-[85vh]'>
      <h2>EVENT PAGE</h2>
      <EventCard event={data[0]} />
    </div>
  );
}
