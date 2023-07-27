import Image from 'next/image';
import Link from 'next/link';

export default function CategoryCard({ event }) {
  return (
    <Link href={`/events/${event.id}`}>
      <div className=" bg-slate-100 p-4 flex items-center justify-between mb-10 max-w-5xl hover:bg-slate-50">
        <div className="">
          <h2 className="font-bold text-2xl text-cyan-700">{event.title}</h2>
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
