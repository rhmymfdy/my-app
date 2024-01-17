import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Link from "next/link";
const AreaSekitar = ({ lokasi }) => {
  console.log(lokasi)
  const area = lokasi.data


  return (
    <div>
      <div className="p-20  ">
        <p className="text-3xl font-bold mb-8">Kost Area Sekitar</p>
        <div className="flex flex-row">
          {area.map((lok) => (
            <div>
              <img className="w-1/1 p-3 rounded-md" src={`http://127.0.0.1:1337${lok.attributes.gambar.data.attributes.url}`} alt="" />
              <div>
                <Link
                  href={`/user/pageDaftarArea?lokId=${lok.attributes.lokId}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {lok.attributes.lokasi}
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
          ))}
        </div>
      </div>

    </div>
  );
};

export async function getServerSideProps({ query }) {
  let kdKost = query.kdKost
  {
    typeof kdKost == "string" ? (kdKost = kdKost) : (kdKost = "K")
  }
  const client = new ApolloClient({
    uri: `http://127.0.0.1:1337/graphql`,
    cache: new InMemoryCache(),
  })
  const { data: kost } = await client.query({
    query: gql`
    query getByKdKost {
      kosts (filters:{kdKost:{contains:"${kdKost}"}}){
        data{
          id
          attributes{
            kdKost
            namaKost
            alamatKost
            kategoriKost
            jumlahKamar
            kontak
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
  const { data: lokasi } = await client.query({
    query: gql`
    query getLokasi{
      lokasis{
        data{
          id
          attributes{
            lokId
            lokasi
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

  const { data: kostUnggulan } = await client.query({
    query: gql`
    query {
      kosts(filters:{
    rating:{gte:4,lte:7},
  	and : {kdKost:{contains:"${kdKost}"}}}){
    data{
      id
    	attributes {
        kdKost
        namaKost
        alamatKost
        rating
        kategoriKost
        jumlahKamar
        kontak
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
      lokasi: lokasi.lokasis,
      kostUnggulan: kostUnggulan.kosts
    }
  }
}
export default AreaSekitar;
