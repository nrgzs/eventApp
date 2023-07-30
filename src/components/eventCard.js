import Image from 'next/image';
import Link from 'next/link';

export default function EventCard({ event }) {
  const category = event?.city
  const id = event?.id
  return (
    <Link href={`/events/${category}/${id}`}>
      <div className=" bg-slate-100 p-4 flex items-center justify-between mb-10 max-w-5xl hover:bg-slate-50">
        <div className="flex flex-col">
          <h2 className="font-bold text-2xl text-cyan-700">{event?.title}</h2>
          <h2 className="font-bold text-xl text-cyan-700">{event?.city}</h2>
          <p className="">{event?.description}</p>
        </div>
        <div className="w-96 h-48 overflow-clip ">
          <Image
            width={250}
            height={200}
            alt={'event img'}
            src={event?.image}
          ></Image>
        </div>
      </div>
    </Link>
  );
}
