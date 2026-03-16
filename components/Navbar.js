import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center md:top-0 md:bottom-auto md:border-b md:border-t-0 z-50">
      <div className="hidden md:block font-bold text-xl text-blue-600">
        <Link href="/">PreLoved</Link>
      </div>
      
      <div className="flex justify-around w-full md:w-auto md:gap-8">
        <Link href="/" className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600">
          <span className="text-xl">🏠</span>
          <span className="text-[10px] uppercase font-bold md:text-sm">Home</span>
        </Link>
        
        <Link href="/sell" className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600">
          <span className="text-xl">➕</span>
          <span className="text-[10px] uppercase font-bold md:text-sm">Sell</span>
        </Link>
        
        <Link href="/profile" className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600">
          <span className="text-xl">👤</span>
          <span className="text-[10px] uppercase font-bold md:text-sm">Profile</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;