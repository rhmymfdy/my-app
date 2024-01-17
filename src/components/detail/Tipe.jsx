import Link from "next/link";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: `http://127.0.0.1:1337/graphql`,
  cache: new InMemoryCache(),
})


const Tipe = ({ kost }) => {
  // console.log(kost[0].attributes)
  const data = kost[0].attributes

  return (
    <div className="py-5 flex flex-wrap  ">
      {/* KANAN */}
      <div className=" w-1/2 p-5 drop-shadow-md bg-slate-50">
        <h1 className="font-extrabold text-2xl">{data.namaKost}</h1>
        <div className="p-5">
          <p className="bg-slate-900 w-28 text-xl text-center text-white font-bold m-auto p-1 rounded-2xl">
            {data.kategoriKost}
          </p>
        </div>

        <ul className="list-disc p-5">
          <li>
            Jumlah Kamar <span className="text-green-600">{data.jumlahKamar}</span>
          </li>
          <li>{data.alamatKost}</li>
        </ul>

        <p className="font-bold text-xl mt-5 mb-2">Rating Kost</p>
        <div class="flex items-center">
          <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            {data.rating}
          </p>
        </div>

        {/* <div className="flex p-5">
          {dataKamar.map((kamar) => (
            <div>
              <Link href={{
                pathname: `/user/detailKamar`,
                query: { kdKamar: kamar.attributes.kdKamar }
              }}>
                <h1 className="p-5 font-extrabold text-2xl">{kamar.attributes.kdKamar}</h1>
              </Link>
            </div>
          ))}
        </div> */}

        {/* <div className="py-3 flex flex-wrap">
          <p className="bg-slate-900 w-36 text-lg text-center text-white font-bold p-1 rounded-2xl mr-5">
            Simpan
          </p>
          <p className="bg-slate-900 w-36 text-lg text-center text-white font-bold p-1 rounded-2xl">
            Simpan
          </p>
        </div> */}

        <div className="mt-24">
          <Link href="/user/pageProfilPemilik">
            <p className="font-bold text-base">Kost ini dikelola oleh samsul</p>
            <p className="text-green-600">Online 3 Jam yang lalu</p>
          </Link>
        </div>
      </div>
      {/* KIRI */}
      <div className=" w-1/2 p-5 drop-shadow-md bg-slate-100  ">
        <p className="font-bold text-3xl text-center mb-8 mt-10">
          Rp. {data.hargaKost},00 / Orang
        </p>
        <p className="bg-slate-900 w-80 text-lg text-center m-auto mt-16 text-white font-bold p-1 rounded-2xl">
          Tanya Pemilik
        </p>
        <Link href={{
          pathname: "/user/boking1",
          query: { kdKost: data.kdKost }
        }}>
          <p className="bg-white w-80 text-lg text-center m-auto mt-6 text-green-900 font-bold p-1 rounded-2xl">
            Ajukan Sewa
          </p>
        </Link>
      </div>
    </div>
  );
};


export async function getServerSideProps({ query }) {

  let kdKamar = query.kdKamar
  {
    typeof kdKamar == "string" ? (kdKamar = kdKamar) : (kdKamar = "KM")
  }
  const { data: kamar } = await client.query({
    query: gql`
    query getByKdKamar {
      kamars(filters:{kdKamar:{contains:"${kdKamar}"}}){
        data{
          id
          attributes{
            hargaKamar
            kdKamar
            ukuranKamar
          }
        }
      }
    }
    `
  })
  return {
    props: {
      kamar: kamar.kamars
    }
  }
}


export default Tipe;
