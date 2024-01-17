const Data = ({ penyewa }) => {
  // console.log(sewa)
  const data = penyewa[0].attributes
  return (
    <div className="w-9/12 m-auto py-5 ">
      <div className="py-5 font-bold text-xl ">
        <div className="flex  w-9/12  ">
          <p className="text-left   w-52">Nama Lengkap</p>
          <p className="text-left px-5 ml-24">:</p>
          <p>{data.nama}</p>
        </div>
        <hr className="border-black mt-2" />
      </div>
      <div className="py-5 font-bold text-xl ">
        <div className="flex  w-9/12  ">
          <p className="text-left   w-52">No Telpon</p>
          <p className="text-left px-5 ml-24">:</p>
          <p>{data.telp}</p>
        </div>
        <hr className="border-black mt-2" />
      </div>
      <div className="py-5 font-bold text-xl ">
        <div className="flex  w-9/12  ">
          <p className="text-left   w-52">Alamat Rumah</p>
          <p className="text-left px-5 ml-24">:</p>
          <p>{data.alamat}</p>
        </div>
        <hr className="border-black mt-2" />
      </div>
      <div className="py-5 font-bold text-xl ">
        <div className="flex  w-9/12  ">
          <p className="text-left   w-52">NIK KTP</p>
          <p className="text-left px-5 ml-24">:</p>
          <p>{data.nik}</p>
        </div>
        <hr className="border-black mt-2" />
      </div>
      <div className="py-5 font-bold text-xl ">
        <div className="flex  w-9/12  ">
          <p className="text-left   w-52">Tanggal Boking</p>
          <p className="text-left px-5 ml-24">:</p>
          <p>Belom </p>
        </div>
        <hr className="border-black mt-2" />
      </div>
      <div className="py-5 font-bold text-xl ">
        <div className="flex  w-9/12  ">
          <p className="text-left   w-52">Lama Sewa</p>
          <p className="text-left px-5 ml-24">:</p>
          <p>{data.lamaSewa} Bulan</p>
        </div>
        <hr className="border-black mt-2" />
      </div>
      <div className="py-5 font-bold text-xl ">
        <div className="flex  w-9/12  ">
          <p className="text-left   w-52">Pekerjaan</p>
          <p className="text-left px-5 ml-24">:</p>
          <p>{data.pekerjaan}</p>
        </div>
        <hr className="border-black mt-2" />
      </div>
      <div className="py-5 font-bold text-xl ">
        <div className="flex  w-9/12  ">
          <p className="text-left   w-52">Status</p>
          <p className="text-left px-5 ml-24">:</p>
          <p>{data.status}</p>
        </div>
        <hr className="border-black mt-2" />
      </div>
    </div>
  );
};

export default Data;
