import Box2 from "@/components/boking/box2";
import Pembayaran from "@/components/boking/pembayaran";


import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
const client = new ApolloClient({
  uri: `http://127.0.0.1:1337/graphql`,
  cache: new InMemoryCache(),
})

const BokingTwo = ({ penyewa }) => {
  console.log(penyewa.data[0])
  // console.log(sewa.data[0].attributes)

  // async function submitHandler(e) {
  //   e.preventDefault()
  //   try {
  //     await client.mutate({
  //       mutation: gql`
  //       createDetilSewa(data:{

  //       })
  //       `
  //     })
  //   } catch (e) {
  //     throw Error(e.message)

  //   }
  // }
  return (
    <div className="p-10">
      <div>
        <Box2 />
      </div>
      <div>
        <Pembayaran penyewa={penyewa.data} />
      </div>

    </div>
  );
};

export async function getServerSideProps({ query }) {

  let nik = query.nik
  {
    typeof nik == "string" ? (nik = nik) : (nik = "0")
  }
  const { data: penyewa } = await client.query({
    query: gql`
    query getAllPenyewa {
      dataPenyewas(filters:{nik:{contains:"${nik}"}}){
        data{
          id
          attributes{
            tglBok
            nama
            alamat
            lamaSewa
            nik
            telp
            pekerjaan
            status
            kost{
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
                  lokases{
                    data{
                      attributes{
                        lokasi
                        lokId
                      }
                    }
                  }
                }
              }
            }
            kamar{
              data{
                id
                attributes{
                  kdKamar
                  ukuranKamar
                  deskripsiKamar
                  gambar{
                    data{
                      attributes{
                        url
                      }
                    }
                  }
                }
              }
            }
            pemilik{
              data{
                id
                attributes{
                  nama
                  alamat
                  jenisKelamin
                  pekerjaan
                  status
                  email
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
      penyewa: penyewa.dataPenyewas
    }
  }
}

export default BokingTwo;


// query {
//   sewas{
//     data{
//       id
//       attributes{
//         nama
//         alamat
//         lamaSewa
//         tglBok
//         nik
//         telp
//         pekerjaan
//         status
//         pemilik{
//           data{
//             attributes{
//               nama
//             }
//           }
//         }
//         detil_sewa{
//           data{
//             attributes{
//               kost{
//                 data{
//                   attributes{
//                     namaKost
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }