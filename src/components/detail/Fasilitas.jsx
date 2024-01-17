const Flts = ({ kost }) => {
  const dataFasilitasUmum = kost[0].attributes.fasilitas_umum.data.attributes
  return (
    <div>
      <div className=" w-1/2 bg-slate-100 rounded-lg">
        <p className="p-5 font-bold text-2xl">Fasilitas Umum</p>
        <div className="flex p-8">
          <ul className="list-disc ">
            <li className="py-2">KASUR
              <span className="text-green-600 p-5">{dataFasilitasUmum.kasur}</span>
            </li>
            <li className="py-2">AC
              <span className="text-green-600 p-5">{dataFasilitasUmum.ac}</span>
            </li>
            <li className="py-2">DAPUR
              <span className="text-green-600 p-5">{dataFasilitasUmum.dapur}</span>
            </li>
          </ul>
          <ul className="list-disc ml-28">
            <li className="py-2">CCTV
              <span className="text-green-600 p-5">{dataFasilitasUmum.cctv}</span>
            </li>
            <li className="py-2">KURSI
              <span className="text-green-600 p-5">{dataFasilitasUmum.kursi}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Flts;
