const Map = () => {
  return (
    <div className="bg-slate-200 w-1/2 p-8">
      <div>
        <p className="text-2xl font-bold mb-5">Lokasi Kost</p>
      </div>
      <div className="">
        <div className="m-auto">
          <img className="m-auto" src="/map.png" alt="" />
        </div>
        <div className="flex mt-4 w-3/4 m-auto justify-evenly ">
          <button className="bg-slate-900 text-gray-100 p-2 px-8 rounded-2xl">
            Tempat Terdekat
          </button>
          <button className="bg-slate-700 text-gray-100 px-8 rounded-2xl">
            Transportasi Terdekat
          </button>
        </div>
        <div className="ml-12 mt-8">
          <ul className="list-disc">
            <li className="mb-2 text-xl">Apotek Sulaiman</li>
            <li className="mb-2 text-xl">Indomart Banyuwangi</li>
            <li className="mb-2 text-xl">BarberShop Lek Son</li>
            <li className="mb-2 text-xl">Warung Bek Yem</li>
            <li className=" text-xl">OYO Awas</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Map;
