import Card from "@/components/kategori/card";
import { useRouter } from "next/router";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Link from "next/link";
const PageCtgr = ({ kost }) => {
  console.log(kost.data[0].attributes.fasilitas_umum.data.attributes.ac)
  return (
    <div className="p-8 m-auto">
      <div className="text-center">
        <p className="text-2xl font-bold mb-10">
          KOST {kost.data[0].attributes.kategoriKost} Banyuwangi
        </p>
      </div>
      <div>
        {kost.data.map((kos) => (
          <div className="mt-5">
            <div className="m-auto">
              <Link
                href={{
                  pathname: "/user/detail",
                  query: { kdKost: kos.attributes.kdKost }
                }}
                className="flex m-auto flex-col items-center bg-white border border-gray-200 p-2 rounded-sm shadow md:flex-row md:w-4/6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  className="object-cover w-full  h-96 md:h-auto md:w-4/12 md:rounded-none "
                  src={`http://127.0.0.1:1337${kos.attributes.gambar.data.attributes.url}`}
                  alt
                />
                <div className="flex flex-col justify-between p-4 leading-normal w-full">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {kos.attributes.namaKost}
                  </h5>
                  <p className="mb-3 font-normal text-gray-900 dark:text-slate-200">
                    {kos.attributes.alamatKost}
                  </p>
                  <div className="w-[200px] flex justify-between">
                    <p className="text-slate-500 ">
                      KASUR : {kos.attributes.fasilitas_umum.data.attributes.kasur}
                    </p>
                    <p className="text-slate-500 ">
                      AC : {kos.attributes.fasilitas_umum.data.attributes.ac}
                    </p>
                  </div>

                  <p className="bg-white mt-5 text-center w-1/4 rounded-3xl">{kos.attributes.kategoriKost}</p>
                  <p className="text-gray-400 mt-5 text-right ">
                    <span className="font-bold text-green-500">Rp. {kos.attributes.hargaKost},00</span>
                    /bulan
                  </p>
                </div>
              </Link>
            </div>
            <hr className="mt-5 border-black" />
          </div>
        ))}
      </div>

    </div>
  );
};

export async function getServerSideProps({ query }) {
  const client = new ApolloClient({
    uri: `http://127.0.0.1:1337/graphql`,
    cache: new InMemoryCache(),
  })

  let kategoriKost = query.kategoriKost
  {
    typeof kategoriKost == "string" ? (kategoriKost = kategoriKost) : (kategoriKost = "")
  }
  const { data: kost } = await client.query({
    query: gql`
    query getKategori{
      kosts (filters:{kategoriKost:{contains:"${kategoriKost}"}}){
        data{
          id
          attributes{
            kdKost
            namaKost
            alamatKost
            kategoriKost
            jumlahKamar
            kontak
            fasilitas_umum{
              data{
                id
                attributes{
                  ac
                  dapur
                  cctv
                  kasur
                  kursi
                }
              }
            }
            kamars{
              data{
                id
                attributes{
                  kdKamar
                  ukuranKamar
                }
              }
            }
            lokases{
              data{
                id
                attributes{
                  lokId
                  lokasi
                }
              }
            }
            gambar{
              data{
                id
                attributes{
                  url
                }
              }
            }
          }
        }
      }
    }
    `
  })

  return {
    props: {
      kost: kost.kosts,
    }
  }
}

export default PageCtgr;
