const App = () => {
  return (
    <div className="min-h-screen flex">
      {/* Rectangle-2 Çerçevesi arka plan */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <img
          src="/images/Rectangle-2.svg"
          alt="Rectangle Frame"
          className="w-[95%] max-w-[1300px] h-[95%] max-h-[850px] object-contain"
        />
      </div>

      {/* Sol Bölüm */}
      <div
        className="w-2/5 flex items-center justify-center"
        style={{
          backgroundImage: `url('/images/Rectangle-1.svg')`, // Rectangle-1.svg yeşil iç çerçeve
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <img src="/images/image-1.png" alt="Lion" className="ml-24 w-[70%]" />
      </div>

      {/* Sağ Bölüm */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white">
        <h1 className="text-gray-800 text-5xl font-bold mb-6 text-center tracking-widest">
          LOGIN
        </h1>
        {/* Form */}
        <form className="space-y-4 w-3/4 max-w-[400px] z-10">
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-green-400 outline-none"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-green-400 outline-none"
          />
        </form>
        {/* Alt Bağlantılar ve Login Butonu */}

        <div className="w-3/4 max-w-[400px] mt-10 z-10">
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-[#1AEBB7] w-[48%] text-white font-bold py-2 px-6 hover:bg-green-400 transition"
            >
              LOGIN
            </button>
            <div className="flex flex-col justify-between space-y-2 w-[48%] text-sm text-gray-600">
              <a href="#" className="hover:underline text-right">
                Forgot password
              </a>
              <a href="#" className="hover:underline text-right">
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App

/*
z-index z-0 ile rectangle-2 çerçevesini geri plana atıp input ve buttonlara tıklanmayı sağlamak için z-10 ile ön plana çıkardım. 

inset-0 : absolute konumlandırılmış elemanı tüm kenarlara sıfır yerleştirir.

object-contain : içeriği en-boy bozmadan yerleştir


*/
