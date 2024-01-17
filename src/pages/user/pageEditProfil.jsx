import Link from "next/link";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


const EditProfil = ({ pemilik }) => {
  const data = pemilik.data.attributes
  const id = pemilik.data.id
  console.log(data)
  const router = useRouter()
  const [_nama, _setNama] = useState('')
  const [_alamat, _setAlamat] = useState('')
  const [_email, _setEmail] = useState('')
  const [_jenisKelamin, _setJenisKelamin] = useState('')
  const [_pekerjaan, _setPekerjaan] = useState('')
  const [_status, _setStatus] = useState('')

  useEffect(() => {
    if (typeof data.nama == 'string') {
      _setNama(data.nama)
    }
    if (typeof data.alamat == 'string') {
      _setAlamat(data.alamat)
    }
    if (typeof data.email == 'string') {
      _setEmail(data.email)
    }
    if (typeof data.jenisKelamin == 'string') {
      _setJenisKelamin(data.jenisKelamin)
    }
    if (typeof data.pekerjaan == 'string') {
      _setPekerjaan(data.pekerjaan)
    }
    if (typeof data.status == 'string') {
      _setStatus(data.status)
    }
  }, [data.nama, data.alamat, data.email, data.jenisKelamin, data.pekerjaan, data.status])

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      await client.mutate({
        mutation: gql`
        mutation{
          updatePenyewa(id:${id},data:{
            nama : "${_nama}",
            alamat: "${_alamat}",
            email : "${_email}",
            pekerjaan: ${_pekerjaan},
            jenisKelamin: ${_jenisKelamin},
            status : ${_status},
          }){
            data{
              id
              attributes{
                nama
                alamat
                email
                jenisKelamin
                pekerjaan
                status
              }
            }
          }
        }
        `
      })
      router.reload()
      // alert("sukses edit")
    } catch (e) {
      console.log({ message: e.message })
    }
  }
  return (
    <div>
      <div className="p-28 ">
        <form className="bg-slate-300 rounded-md" onSubmit={handleUpdate}>
          <p className="text-center bg-gray-900 text-white py-2 font-bold text-xl rounded-t-md">
            EDIT PROFIL
          </p>
          <img
            src={`http://127.0.0.1:1337${data.gambar.data.attributes.url}`}
            alt=""
            className="m-auto mt-9  rounded-full w-56 h-56 border-spacing-2 border-slate-950 border-double"
          />
          <div className="w-10/12 m-auto mt-10">
            <div className="flex  p-2">
              <p className="mr-24 w-44 p-1 font-bold">Nama Lengkap</p>
              <input
                type="text"
                value={_nama}
                id="nama"
                onChange={(e) => { _setNama(e.target.value) }}
                className="border border-gray-900 w-10/12 p-2 rounded-t-lg"
                placeholder="Masukan nama..."
              />
            </div>
            <div className="flex  p-2">
              <p className="mr-24 w-44 p-1 font-bold">Alamat</p>
              <input
                type="text"
                value={_alamat}
                id="alamat"
                onChange={(e) => { _setAlamat(e.target.value) }}
                className="border border-gray-900 w-10/12 p-2 rounded-t-lg"
                placeholder="Masukan Alamat..."
              />
            </div>
            <div className="flex  p-2">
              <p className="mr-24 w-44 p-1 font-bold">Email</p>
              <input
                type="email"
                value={_email}
                id="email"
                onChange={(e) => { _setEmail(e.target.value) }}
                className="border border-gray-900 w-10/12 p-2 rounded-t-lg"
                placeholder="Masukan email..."
              />
            </div>
            <div className="flex items-center p-2 ">
              <p className="mr-24 w-44 p-1 font-bold">Jenis Kelamin</p>
              <div className="flex items-center justify-between w-10/12">
                <select id="jenisKelamin" onChange={(e) => { _setJenisKelamin(e.target.value) }} className="bg-gray-50 w-full border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  ">
                  <option value="laki_Laki">Laki Laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
            </div>
            <div className="flex  p-2">
              <p className="mr-24 w-44 p-1 font-bold">Pekerjaan</p>
              <div className="flex items-center justify-between w-10/12">
                <select id="pekerjaan" onChange={(e) => { _setPekerjaan(e.target.value) }} className="bg-gray-50 w-full border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  ">
                  <option value="Pelajar">Pelajar</option>
                  <option value="Mahasiswa">Mahasiswa</option>
                  <option value="Karyawan">Karyawan</option>
                </select>
              </div>
            </div>
            <div className="flex  p-2">
              <p className="mr-24 w-44 p-1 font-bold">Status</p>
              <div className="flex items-center justify-between w-10/12">
                {/* <label htmlFor="status">{data.status}</label> */}
                <select id="status" onChange={(e) => { _setStatus(e.target.value) }} className="bg-gray-50 w-full border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  ">
                  <option value="Menikah">Menikah</option>
                  <option value="Belum_Menikah">Belum Menikah</option>
                </select>
              </div>
            </div>
            <div className="flex">
              <Link href={`/user/pageProfilPemilik?nama=${data.nama}`}>
                <button className="bg-slate-200 text-gray-950 font-bold text-center p-2 px-5 rounded-lg mb-8">
                  Kembali
                </button>
              </Link>
              <button
                onClick={() => router.push({
                  pathname: '/user/pageProfilPemilik',
                  query: { nama: _nama }
                })}
                type="submit"
                className="bg-slate-950 text-white font-bold text-center p-2 px-5 ml-8 rounded-lg mb-8">
                Simpan
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const client = new ApolloClient({
  uri: `http://127.0.0.1:1337/graphql`,
  cache: new InMemoryCache(),
})
export async function getServerSideProps({ query }) {
  let idKost = query.id

  console.log("data", idKost)
  {
    typeof idKost == "string" ? (idKost = idKost) : (idKost = "")
  }

  const { data: pemilik } = await client.query({
    query: gql`
    query{
      penyewa(id:"${idKost}"){
        data{
          id
          attributes{
            nama
            jenisKelamin
            pekerjaan
            alamat
            email
            status
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
      pemilik: pemilik.penyewa
    }
  }
}

export default EditProfil;