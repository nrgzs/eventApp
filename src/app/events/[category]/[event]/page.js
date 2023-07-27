
import EventCard from "@/components/eventCard";




async function getData(event) {


  const res = await fetch('http://localhost:3000/api/events/event', {
    method: 'POST',
    body: JSON.stringify({ id: event }),
    cache: 'no-store',
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function EventPage({params}) {
  const { event } = params;
    const data = await getData(event);
 
  console.log(data);
  return (
    <div>
      <h2>EVENT PAGE</h2>
      <EventCard event={data[0]}/>

    </div>
  );
}
