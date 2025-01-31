import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-sans" >
      <div className="p-4 opacity-5" style={{ backgroundImage: 'url("/image/image copy 2.png")', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
      </div>
      <header className="flex justify-between items-center p-4 bg-white" >
        <Image
          src="/image/image.png"
          alt="Elemes.id Logo"
          width={120}
          height={40}
        />
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Promotions</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Blogs</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a>
        </nav>
        <div className="flex space-x-2">
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900">Masuk</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600">Daftar Sekarang</button>
        </div>
      </header>


      <main className="flex flex-col md:flex-row  items-center justify-between p-8 md:p-16" >
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-green-600 mb-4">
            Good Food Us<br />Good Mood
          </h1>
          <p className="text-gray-600 mb-6">
            I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600">
              Daftar Sekarang
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-600 rounded-full hover:bg-gray-100">
              About Us
            </button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="bg-gray-400 rounded-full w-[550px] h-[550px] flex items-center justify-center">
            <div className="flex items-center justify-center" >
              <Image
                src="/image/image copy.png"
                alt="Delicious Food"
                width={550}
                height={550}
                className="md:w-400 md:h-400"
              />
            </div>
          </div>          
          <div className="absolute bottom-0 left-0 bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center mr-2">
                <Image
                  src="/image/image copy.png"
                  alt="Green Salad Icon"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Green Salad Tomato</h3>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>  );
}


