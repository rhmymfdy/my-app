const Umum = ({ kost }) => {
  const dataFasilitasLainnya = kost[0].attributes.fasilitas_lainnya.data.attributes
  const dataLokasi = kost[0].attributes.lokases.data
  return (
    <div className="bg-slate-200 w-1/2 p-8 rounded-md">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Fasilitas Lainya</h1>
      </div>
      <div className="ml-10">
        <ul className="list-disc py-3">
          <li className="text-lg font-bold">Informasi Kost</li>
          <li className="ml-6">{dataFasilitasLainnya.informasiKost}</li>
        </ul>
        <ul className="list-disc py-3">
          <li className="text-lg font-bold">Ketentuan</li>
          <li className="ml-6">{dataFasilitasLainnya.ketentuan}</li>
        </ul>
        <ul className="list-disc py-3">
          <li className="text-lg font-bold">Layanan Tambahan</li>
          <li className="ml-6">{dataFasilitasLainnya.layananTambahan}</li>
        </ul>
        <ul className="list-disc py-3">
          <li className="text-lg font-bold">Area Sekitar Kost</li>
          {dataLokasi.map((lok) => (
            <li className="ml-6">{lok.attributes.lokasi}</li>
          ))}

        </ul>
      </div>
    </div>
  );
};

export default Umum;
