import Link from "next/link";

const DaftarKost = ({ kost }) => {
  // console.log(kost)
  return (
    <div className="bg-slate-900" >
      <div>
        <h1 className="p-8 text-2xl font-bold text-white">Daftar Kost</h1>
      </div>
      <div className="flex flex-wrap content-center justify-center">
        {kost.map((kos) => (
          <div className="p-4 ">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link href="/user/detail  ">
                <img style={{ width: "400px", height: "300px" }} className="rounded-t-lg" src={`http://127.0.0.1:1337${kos.attributes.gambar.data.attributes.url}`} alt />
              </Link>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {kos.attributes.namaKost}
                  </h5>
                </a>
                <Link
                  href="/user/detail"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >

                  {kos.attributes.kategoriKost}

                </Link>
                <p className="mt-3 font-normal text-gray-700 dark:text-gray-200">
                  {kos.attributes.alamatKost}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Jumlah Kamar : {kos.attributes.jumlahKamar}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Lokasi Terdekat : {kos.attributes.lokasi}
                </p>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Contact : {kos.attributes.kontak}
                </p>
                <Link
                  href={{
                    pathname: "/user/detail",
                    query: { kdKost: kos.attributes.kdKost }
                  }}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
};

export default DaftarKost;
