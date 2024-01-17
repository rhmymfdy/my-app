const Foto = ({ kost }) => {
  console.log(kost[0].attributes.gambar.data.attributes.url)
  const gmbr = kost[0].attributes.gambar.data.attributes.url
  return (
    <div className="">
      <div className="flex flex-wrap bg-slate-300 " style={{ height: '500px' }} >
        <img className="w-1/2  " style={{ height: '500px' }} src={`http://127.0.0.1:1337${kost[0].attributes.gambar.data.attributes.url}`} alt="" />
        <img className="w-1/2" style={{ height: '500px' }} src={`http://127.0.0.1:1337${kost[0].attributes.gambar.data.attributes.url}`} alt="" />
      </div>
    </div>
  );
};

export default Foto;
