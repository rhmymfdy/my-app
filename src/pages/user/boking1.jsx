import Box from "@/components/boking/box1";

import React from "react";
import { useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import Link from "next/link";
import DatePicker from "react-datepicker";

import { useRouter } from "next/router";

const client = new ApolloClient({
  uri: 'http://127.0.0.1:1337/graphql',
  cache: new InMemoryCache()
})



const BokingOne = ({ kost }) => {


  const idKost = kost.data[0].id
  const idPemilik = kost.data[0].attributes.pemilik.data.id
  const dataKamar = kost.data[0].attributes.kamars.data
  const dataPemilik = kost.data[0].attributes.pemilik.data.attributes
  const router = useRouter()

  const [nama, setNama] = useState('')
  const [telp, setTelp] = useState('')
  const [alamat, setAlamat] = useState('')
  const [nik, setNik] = useState('')
  const [kamar, setKamar] = useState('')
  // const [tglBok, setTglBok] = useState(new Date().toLocaleDateString('fr-FR'))
  const [lamaSewa, setLamaSewa] = useState(0)
  const [pekerjaan, setPekerjaan] = useState('')
  const [status, setStatus] = useState('')


  // console.log(idKost)
  console.log(kamar)

  async function submitHandler(e) {
    e.preventDefault()
    try {
      await client.mutate({
        mutation: gql`
        mutation{
          createDataPenyewa(data:{
            nama : "${nama}",
            alamat : "${alamat}",
            lamaSewa : ${lamaSewa},
            nik : "${nik}",
            telp : "${telp}",
            pekerjaan : "${pekerjaan}",
            status : "${status}",
            kamar : ${kamar},
            kost : ${idKost},
            pemilik : ${idPemilik}
          })
          {
            data{
              id
              attributes{
                nama
                alamat
                lamaSewa
                nik
                telp
                pekerjaan
                status
              }
            }
          }
        }
        `
      })
      alert("Sukses")
    } catch (e) {
      throw Error(e.message)
    }
  }


  return (
    <div className="p-10 ">
      <div>
        <Box />
      </div>
      <div>
        <form onSubmit={submitHandler} className=" mx-auto m-auto  py-5 mt-10">
          <div>
            <div className="mb-5 w-9/12 m-auto    ">
              <p className="text-2xl font-extrabold mb-10">Boking</p>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 ml-1"
              >
                Nama Lengkap :
              </label>
              <input
                id="nama"
                value={nama}
                onChange={(e) => {
                  setNama(e.target.value)
                }}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Masukan nama lengkap anda..."
                required
              />
            </div>
            <div className="mb-5 w-9/12 m-auto    ">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 ml-1"
              >
                No Telpon :
              </label>
              <input
                id="telp"
                value={telp}
                onChange={(e) => {
                  setTelp(e.target.value)
                }}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Masukan no telpon anda..."
                required
              />
            </div>
            <div className="mb-5 w-9/12 m-auto    ">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 ml-1"
              >
                Alamat Rumah :
              </label>
              <input
                id="alamat"
                value={alamat}
                onChange={(e) => {
                  setAlamat(e.target.value)
                }}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Masukan alamat anda..."
                required
              />
            </div>
            <div className="mb-5 w-9/12 m-auto    ">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 ml-1"
              >
                NIK KTP :
              </label>
              <input
                id="nik"
                value={nik}
                onChange={(e) => {
                  setNik(e.target.value)
                }}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Masukan NIK anda..."
                required
              />
            </div>
          </div>
          <div>
            <div className=" w-9/12 m-auto">
              <div>
                <p className="text-2xl font-bold mb-6">Tanggal Boking</p>
              </div>
              {/* <div className="relative max-w-sm">
                <DatePicker
                  dateType="dd/MM/yyyy"
                  value={tglBok}
                  onChange={(e) => {
                    setTglBok(e.target.value)
                  }}
                  inputWidth={140}
                  fontSize={16}
                />
              </div> */}
            </div>
          </div>
          <div>
            <div className="mb-5 w-9/12 m-auto    ">
              <label
                htmlFor="email"
                className="block mb-2 text-gray-900 ml-1 text-xl font-bold"
              >
                PILIH KAMAR :
              </label>
              <div className="flex justify-between">
                <select id="countries"
                  value={kamar}
                  onChange={(e) => {
                    setKamar(e.target.value)
                  }}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  {dataKamar.map((kamar) => (
                    <option value={kamar.id}>{kamar.attributes.kdKamar}</option>
                  ))}

                </select>
              </div>
            </div>
            <div>
              <div className="mb-5 w-9/12 m-auto    ">
                <label
                  htmlFor="email"
                  className="block mb-2 text-gray-900 ml-1 text-xl font-bold"
                >
                  LAMA SEWA :
                </label>
                <div className="flex justify-between">
                  <input
                    value={lamaSewa}
                    onChange={(e) => {
                      setLamaSewa(e.target.value)
                    }}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Masukan lama sewa...."
                    required
                  />
                  <p className=" text-2xl font-bold content-center">/ Bulan</p>
                </div>
              </div>
              <div className="mb-5 w-9/12 m-auto    ">
                <label
                  htmlFor="email"
                  className="block mb-2 text-gray-900 ml-1 text-xl font-bold"
                >
                  PEKERJAAN :
                </label>
                <input
                  value={pekerjaan}
                  onChange={(e) => {
                    setPekerjaan(e.target.value)
                  }}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Masukan pekerjaan...."
                  required
                />
              </div>
              <div className="mb-5 w-9/12 m-auto    ">
                <label
                  htmlFor="email"
                  className="block mb-2 text-gray-900 ml-1 text-xl font-bold"
                >
                  STATUS :
                </label>
                <input
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value)
                  }}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Masukan status...."
                  required
                />
                <div className="p-5">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-gray-900 ml-1 text-xl font-bold"
                  >
                    Nama Pemilik : {dataPemilik.nama}
                  </label>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-gray-900 ml-1 text-xl font-bold"
                  >
                    Alamat : {dataPemilik.alamat}
                  </label>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-gray-900 ml-1 text-xl font-bold"
                  >
                    Email : {dataPemilik.email}
                  </label>

                  <label
                    htmlFor="email"
                    className="block mb-2 text-gray-900 ml-1 text-xl font-bold"
                  >
                    KODE KOST :
                  </label>
                </div>
                <div className="mt-7 font-bold text-center">
                  <button
                    className="mt-10 bg-slate-950 text-white w-2/5 m-auto py-6 text-xl rounded-sm"
                    type="submit" onClick={() => router.push({
                      pathname: '/user/boking2',
                      query: { nik: nik }
                    })} >
                    <p  >
                      NEXT
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
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



export default BokingOne;
