import Foto from "@/components/detail/Foto";
import Tipe from "@/components/detail/Tipe";
import Flts from "@/components/detail/Fasilitas";
import Jam from "@/components/detail/Jamkunjung";
import Umum from "@/components/detail/FasilitasUmum";
import TmKmLy from "@/components/detail/TipeKmLain";
import Pemilik from "@/components/detail/Pemilik";
import Map from "@/components/detail/Maps";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: `http://127.0.0.1:1337/graphql`,
  cache: new InMemoryCache(),
})

const Detail = ({ kost }) => {
  return (
    <div className="p-5">
      <div>
        <Foto kost={kost.data} />
      </div>
      <div className="sticky -top-0 z-10">
        <Tipe kost={kost.data} />
      </div>
      <div className="relative z-40 ">
        <div className="py-2">
          <Flts kost={kost.data} />
        </div>
        <div className="py-4">
          <Jam />
        </div>
        <div>
          <Umum kost={kost.data} />
        </div>
        <div>
          <Pemilik kost={kost.data} />
        </div>
        <div className="py-4">
          <Map />
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

  let kdKamar = query.kdKamar
  {
    typeof kdKamar == "string" ? (kdKamar = kdKamar) : (kdKamar = "KM")
  }

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
            rating
            hargaKost
            pemilik{
              data{
                attributes{
                  nama
                  alamat
                  jenisKelamin
                  pekerjaan
                  status
                  email
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
            fasilitas_umum{
              data{
                attributes{
                  ac
                  dapur
                  cctv
                  kasur
                  kursi
                }
              }
            }
            fasilitas_lainnya{
              data{
                attributes{
                  informasiKost
                  ketentuan
                  layananTambahan
                }
              }
            }
            kamars (filters:{kdKamar:{contains:"${kdKamar}"}}){
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
      kost: kost.kosts
    }
  }
}





export default Detail;
