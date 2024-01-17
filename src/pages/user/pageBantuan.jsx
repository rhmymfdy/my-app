const Bantuean = () => {
  return (
    <div className="flex">
      <div className="w-1/2 p-4 mt-40 mb-40">
        <h1 className="text-slate-900 text-4xl font-bold px-16">
          Hai....ada yang bisa kami bantu...?
        </h1>
        <form className="p-8 ml-4 px-12">
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Kirim Pesan Disini
          </label>
          <div className="relative">
            <input
              type="search"
              id="search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Kirim Pesan Disini....."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-slate-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Send
            </button>
          </div>
          <div>
            <ul className="flex text-center justify-evenly w-96 m-auto">
              <p className="text-center">| M.Arief |</p>
              <p className="text-center"> Rhomy M |</p>
              <p className="text-center"> Ilhan J |</p>
              <p className="text-center"> Ferdyno F |</p>
              <p className="text-center"> Tito S |</p>
            </ul>
          </div>
        </form>
      </div>

      <div className="bantuan2">
        <img src="" alt="THIS IS COGIL" />
      </div>
    </div>
  );
};

export default Bantuean;
