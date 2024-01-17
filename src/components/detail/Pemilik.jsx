import Link from "next/link";

const Pemilik = ({ kost }) => {
  console.log(kost[0].attributes)
  const dataPemilik = kost[0].attributes.pemilik.data.attributes
  console.log(dataPemilik)
  return (
    <div className="bg-slate-200 w-1/2 rounded-md">
      <Link href={{
        pathname: "/user/pageProfilPemilik",
        query: { nama: dataPemilik.nama }
      }}>
        <div>
          <p className="p-5 text-2xl font-bold">Pemilik Kost</p>
        </div>
        <div className="flex m-auto ">
          <div className=" w-1/2">
            <img style={{ borderRadius: '50px', height: '170px', margin: 'auto' }} src={`http://127.0.0.1:1337${dataPemilik.gambar.data.attributes.url}`} alt="" />
          </div>
          <div className="w-1/2 mb-10">
            <p className="text-3xl font-bold">{kost[0].attributes.namaKost}</p>
            <p className="mb-5 text-3xl font-bold" >{dataPemilik.nama}</p>

            <p className="py-2">
              <span className="font-bold">Alamat</span>: {dataPemilik.alamat}
            </p>
            <p>
              <span className="font-bold">email</span>: {dataPemilik.email}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Pemilik;
