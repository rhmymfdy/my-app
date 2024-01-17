const Edit = () => {
  return (
    <div className="p-28 ">
      <div className="bg-slate-300 rounded-md">
        <p className="text-center bg-gray-900 text-white py-2 font-bold text-xl rounded-t-md">
          EDIT PROFIL
        </p>
        <img
          src="/amanda.jpg"
          alt=""
          className="m-auto mt-9  rounded-full w-56 h-56 border-spacing-2 border-slate-950 border-double"
        />
        <div className="w-10/12 m-auto mt-10">
          <div className="flex  p-2">
            <p className="mr-24 w-44 p-1 font-bold">Nama Lengkap</p>
            <input
              type="text"
              className="border border-gray-900 w-10/12 p-2 rounded-t-lg"
              placeholder="Masukan nama..."
            />
          </div>
          <div className="flex  p-2">
            <p className="mr-24 w-44 p-1 font-bold">Jenis Kelamin</p>
            <input
              type="text"
              className="border border-gray-900 w-10/12 p-2 rounded-t-lg"
              placeholder="Masukan jenis kelamin..."
            />
          </div>
          <div className="flex  p-2">
            <p className="mr-24 w-44 p-1 font-bold">Tanggal lahir</p>
            <input
              type="text"
              className="border border-gray-900 w-10/12 p-2 rounded-t-lg"
              placeholder="Masukan tanggal lahir..."
            />
          </div>
          <div className="flex  p-2">
            <p className="mr-24 w-44 p-1 font-bold">Pekerjaan</p>
            <input
              type="text"
              className="border border-gray-900 w-10/12 p-2 rounded-t-lg"
              placeholder="Masukan pekerjaan..."
            />
          </div>
          <div className="flex  p-2">
            <p className="mr-24 w-44 p-1 font-bold">Nama Instansi</p>
            <input
              type="text"
              className="border border-gray-900 w-10/12 p-2 rounded-t-lg"
              placeholder="Masukan nama instansi..."
            />
          </div>
          <div className="flex  p-2">
            <p className="mr-24 w-44 p-1 font-bold">Kota Asal</p>
            <input
              type="text"
              className="border border-gray-900 w-10/12 p-2 rounded-t-lg"
              placeholder="Masukan nama..."
            />
          </div>
          <div className="flex  p-2">
            <p className="mr-24 w-44 p-1 font-bold">Status</p>
            <input
              type="text"
              className="border border-gray-900 w-10/12 p-2 rounded-t-lg"
              placeholder="Masukan nama kota asal..."
            />
          </div>
          <div className="flex  p-2">
            <p className="mr-24 w-44 p-1 font-bold">Pendidikan Terakhir</p>
            <input
              type="text"
              className="border border-gray-900 w-10/12 p-2 rounded-t-lg  mb-12"
              placeholder="Masukan pendidikan terakhir..."
            />
          </div>
          <div className="flex">
            <p className="bg-slate-200 text-gray-950 font-bold text-center p-2 px-5 rounded-lg mb-8">
              Batall
            </p>
            <p className="bg-slate-950 text-white font-bold text-center p-2 px-5 ml-8 rounded-lg mb-8">
              Simpan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
