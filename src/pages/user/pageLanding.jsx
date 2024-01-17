import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import Search from "@/components/Search";
import Promo from "@/components/Promo";
import Unggulan from "@/components/Unggulan";
import Area from "@/components/Area";
import Tatacara from "@/components/Tatacara";
import About from "@/components/About";
// const router = useRouter();

// const inter = Inter({ subsets: ["latin"] });

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import DaftarKost from "@/components/daftar-kost";

function Home({ kost, lokasi, kostUnggulan, kategoriKost }) {

  // console.log(kost)
  // console.log(kamar)
  // console.log(lokasi.data)
  return (
    <div>
      <div className="w-10/12 m-auto py-10 ">
        <h2 className="font-bold">Cari Kost Sesuai Keinginan Anda.....</h2>
        <p>Masukan Nama kost yang anda inginkan.....</p>
        <Search />
      </div>
      <di>
        <Promo kostUnggulan={kostUnggulan.data} />
      </di>
      <div>
        <Unggulan kostUnggulan={kostUnggulan.data} />
      </div>
      <div>
        <DaftarKost kost={kost.data} />
      </div>
      <div>
        <p className="text-3xl font-bold mt-12 ml-20">Pilih Area Kost Anda</p>
        <Area lokasi={lokasi.data} />
      </div>
      <div>
        <Tatacara />
      </div>
      <div>
        <About />
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const client = new ApolloClient({
    uri: `http://127.0.0.1:1337/graphql`,
    cache: new InMemoryCache(),
  })

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
            kdKamar
            ukuranKamar
          }
        }
      }
    }
    `
  })
  let kdKost = query.kdKost
  {
    typeof kdKost == "string" ? (kdKost = kdKost) : (kdKost = "K")
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
      kostUnggulan: kostUnggulan.kosts,
      kamar: kamar.kamars,
    }
  }
}
export default Home