import Link from 'next/link';

export default function Navbar() {
  return (
    <div className=" bg-black text-slate-50 flex  items-center p-5  mb-4">
      <Link href={'/'}>
        <h2 className=" font-bold text-2xl text-cyan-500 hover:text-slate-50 mr-10">
          Event App
        </h2>
      </Link>
      <ul className="flex gap-4">
        <Link href={'/events'}>
          <li  className="hover:text-cyan-500 border-r-2 pr-4">All Events</li>
        </Link>
        {/* <Link href={'/about'}>
          <li className="hover:text-cyan-500">About Us</li>
        </Link> */}
      </ul>
    </div>
  );
}
