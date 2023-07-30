import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold text-cyan-700">Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        View{' '}
        <Link className=" font-bold text-cyan-700" href="/events">
          all events
        </Link>
      </p>
    </div>
  );
}
