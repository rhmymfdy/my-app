import Card from "@/components/kategori/cardArea";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Link from "next/link";
const PageCtgr = ({ kost }) => {

  const data = kost.data
  console.log(data)
  // console.log(lokasi.data[0].attributes.kosts.data)
  // const dataKost = lokasi.data[0].attributes.kosts.data


  return (
    <div className="p-8 m-auto">
      <div className="text-center">
        <p className="text-2xl font-bold mb-10">
          {data[0].attributes.namaKost}
        </p>
      </div>

      <div>
        {data.map((kos) => (
          <div className="m-auto">
            <div
              className="flex m-auto flex-col items-center bg-white border border-gray-200 p-2 rounded-sm shadow md:flex-row md:w-4/6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full  h-96 md:h-auto md:w-4/12 md:rounded-none "
                src={`http://127.0.0.1:1337${kos.attributes.gambar.data.attributes.url}`}
                style={{ width: '300px', height: '200px' }}
                alt
              />
              <div className="flex flex-col justify-between p-4 leading-normal w-full">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {kos.attributes.namaKost}
                </h5>
                <p className="mb-3 font-normal text-gray-900 dark:text-slate-200">
                  {kos.attributes.alamatKost}
                </p>
                <p className="text-slate-500">
                  Jumlah Kamar : {kos.attributes.jumlahKamar}
                </p>
                <p className="bg-white mt-5 text-center w-1/4 rounded-3xl">Putra</p>
                <Link href={`/user/detail?kdKost=${kos.attributes.kdKost}`}><p className="text-gray-400 mt-5 text-right ">
                  <span className="font-bold text-green-500"> See More </span>
                </p></Link>

              </div>
            </div>
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

  let namaKost = query.namaKost
  {
    typeof namaKost == "string" ? (namaKost = namaKost) : (namaKost = "K")
  }
  const { data: kost } = await client.query({
    query: gql`
    query getByNama {
      kosts (filters:{namaKost:{contains:"${namaKost}"}}){
        data{
          id
          attributes{
            kdKost
            namaKost
            alamatKost
            kategoriKost
            jumlahKamar
            kontak
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
