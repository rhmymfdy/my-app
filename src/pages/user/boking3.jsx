import Box3 from "@/components/boking/box3";
import Data from "@/components/boking/formboking2";
import Biaya from "@/components/boking/Biaya";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
const client = new ApolloClient({
  uri: `http://127.0.0.1:1337/graphql`,
  cache: new InMemoryCache(),
})

const BokingThree = ({ penyewa }) => {
  // console.log(sewa.data)
  console.log(penyewa.data[0].attributes.kost.data.attributes)
  const data = penyewa.data[0].attributes
  const dataKost = penyewa.data[0].attributes.kost.data.attributes
  // console.log(sewa.data[0].attributes.detil_sewa.data.attributes.kost)
  // const dataSewa = sewa.data[0].attributes
  // const dataKost = sewa.data[0].attributes.detil_sewa.data.attributes.kost.data.attributes

  return (
    <div>
      <div className="p-10">
        <Box3 />
      </div>
      <div>
        <p className="bg-slate-950 text-white text-center text-2xl p-5 mb-3 mt-10">
          Data akan dikirimkan melalui WhatApps ke pemilik
        </p>
      </div>
      <div>
        <p className="p-10 text-3xl font-bold ml-28">Data Pemesanan</p>
      </div>
      <Data penyewa={penyewa.data} />
      <div className="mb-4 bg-black">
        <p>.</p>
      </div>
      <div>
        <p className="p-10 text-3xl font-bold ml-28">Data Biaya</p>
      </div>
      <div>
        <div className="w-9/12 m-auto py-5 ">
          <div className="py-5 font-bold text-xl ">
            <div className="flex  w-9/12  ">
              <p className="text-left   w-52">Harga Sewa / Bulan</p>
              <p className="text-left px-5 ml-24">:</p>
              <p>Rp {dataKost.hargaKost},00</p>
            </div>
            <hr className="border-black mt-2" />
          </div>
          <div className="py-5 font-bold text-xl ">
            <div className="flex  w-9/12  ">
              <p className="text-left   w-52">Lama Sewa</p>
              <p className="text-left px-5 ml-24">:</p>
              <p>{data.lamaSewa} Bulan</p>
            </div>
            <hr className="border-black mt-2" />
          </div>
          <div className="py-5 font-bold text-xl ">
            <div className="flex  w-9/12  ">
              <p className="text-left   w-52">Tanggal Masuk</p>
              <p className="text-left px-5 ml-24">:</p>
              <p>15 Desember 2023</p>
            </div>
            <hr className="border-black mt-2" />
          </div>
          <div className="py-5 font-bold text-xl ">
            <div className="flex  w-9/12  ">
              <p className="text-left   w-52">Tanggal Keluar</p>
              <p className="text-left px-5 ml-24">:</p>
              <p>23 Januari 2018</p>
            </div>
            <hr className="border-black mt-2" />
          </div>
          <div className="py-5 font-bold text-xl ">
            <div className="flex  w-9/12  ">
              <p className="text-left   w-52">Total Biaya Sewa</p>
              <p className="text-left px-5 ml-24">:</p>
              <p>Rp {dataKost.hargaKost * data.lamaSewa},00</p>
            </div>
            <hr className="border-black mt-2" />
          </div>
          <a href="/user/pageLanding">
            <p className=" bg-slate-950 rounded-lg text-center text-2xl p-7 text-slate-50 mt-14">
              Screenshot dan kembali ke menu
            </p>
          </a>
        </div>
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

export default BokingThree;
