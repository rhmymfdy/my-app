import Link from "next/link";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
const client = new ApolloClient({
  uri: `http://127.0.0.1:1337/graphql`,
  cache: new InMemoryCache(),
})

const Pembayaran = ({ penyewa }) => {
  // console.log(sewa[0].attributes)
  // const nik = penyewa[0].attributes.nik
  // console.log(nik)
  return (
    <div className=" w-9/12 m-auto mt-8">
      <p className="text-3xl py-3 font-bold mb-20">Pembayaran</p>
      <p className="bg-slate-900 p-3 text-2xl text-white rounded-lg mb-5">
        Cash Or Delevery
      </p>
      <p className="text-2xl py-5">Kirimkan data boking ke pemilik</p>
      <p className="text-2xl py-5">Via WhatApps</p>
      <Link href={{
        pathname: "/user/boking3",
        query: { nik: penyewa[0].attributes.nik }
      }}>
        <p className="bg-slate-950 text-white text-center w-3/12 m-auto p-5 rounded-lg text-2xl mt-20">
          NEXT
        </p>
      </Link>
    </div>
  );
};

// export async function createDetilSewa({nik}){
//   let nik = query.nik
//   {
//     typeof nik == "string" ? (nik = nik) : (nik = '')
//   }

//   const {data : detil_sewa} = await client.mutate({
//     mutation : gql`
//     mutation{
//       createDetilSewa(data:{
//         idDetil : "2"
//         })
//         {
//         data{
//           id
//         }
//       }
//     }`
//   })
//   return detil_sewa
// }

export default Pembayaran;
