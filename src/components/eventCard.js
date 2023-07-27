import Image from 'next/image';
import Link from 'next/link';

// "id": "sigala-at-electric-brixton",
//       "title": "Sigala at Electric Brixton",
//       "city": "london",
//       "description": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscisfa.",
//       "image": "https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

export default function EventCard({ event }) {
  return (
    <Link href={`/events/${event.city}/${event.id}`}>
      <div className=" bg-slate-100 p-4 flex items-center justify-between mb-10 max-w-5xl hover:bg-slate-50">
        <div className="">
          <h2 className="font-bold text-2xl text-cyan-700">{event.title}</h2>
          <h2 className="font-bold text-xl text-cyan-700">{event.city}</h2>
          <p className="">{event.description}</p>
        </div>
        <div className="w-96 h-48 overflow-clip ">
          <Image
            width={250}
            height={200}
            alt={'event img'}
            src={event.image}
          ></Image>
        </div>
      </div>
    </Link>
  );
}
