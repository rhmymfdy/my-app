import { MailFilled, PhoneFilled } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: `http://127.0.0.1:1337/graphql`,
  cache: new InMemoryCache(),
})


const ProfilPemilik = ({ pemilik }) => {
  // console.log(pemilik.data[0])
  const data = pemilik.data[0].attributes
  const idKost = pemilik.data[0].id
  console.log(idKost)
  const router = useRouter()

  return (
    <div>
      <div>
        <img src={`http://127.0.0.1:1337${data.gambar.data.attributes.url}`} alt="kamar kost" className="h-96 w-screen " />
      </div>
      <div className="flex w-9/12 m-auto relative bottom-32">
        <img
          src={`http://127.0.0.1:1337${data.gambar.data.attributes.url}`}
          alt=""
          className="rounded-full w-56 h-56 border-spacing-2 border-slate-950 border-double"
        />
        <p className="mt-16 ml-10 text-5xl font-bold opacity-90 text-gray-400 ">
          {data.nama}
        </p>
      </div>
      <div className="flex w-10/12 m-auto mb-24">
        <div className="w-1/2">
          <h1 className="text-2xl font-bold ">
            {data.kost.data.attributes.namaKost}
          </h1>
          <p className="mt-2">{data.kost.data.attributes.alamatKost}</p>

          <p className="mb-4 font-bold">
            Pekerjaan <span className="font-medium"> : {data.pekerjaan}</span>
          </p>
          <p className="font-bold mb-2 mt-10">Tentang saya</p>
          <p className="text-justify w-10/12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa
            labore assumenda velit laudantium corrupti libero, delectus
            voluptates, incidunt veritatis doloribus rerum et quidem fuga
            consectetur officia alias modi aliquid. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero, molestias pariatur distinctio
            deleniti, laboriosam facere dolores totam a dignissimos odit saepe
            ad natus cum vitae voluptates modi placeat quam rem!
          </p>
          <button
            onClick={() => router.push({
              pathname: '/user/pageEditProfil',
              query: { id: idKost }
            })}
            className="bg-slate-900 w-20 text-center text-white font-bold p-2 rounded-md mt-6">
            Edit
          </button>
        </div>
        <div className="w-1/2 bg-slate-100   rounded-md p-8">
          <h1 className="font-bold text-xl">Email dan No Telpon</h1>
          <p className="font-bold mt-6">Mengapa verisikasi penting?</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis aliquid suscipit, aperiam quia esse vel sunt ea modi
            earum! Libero officia earum temporibus quas quo provident voluptates
            omnis illum dolor.
          </p>
          <div className="flex justify-between mt-14">
            <div>
              <div className="flex">
                <MailFilled className="text-4xl mr-4 -mt-2" />
                <div>
                  <p className="font-bold">E-Mail</p>
                  <p className="text-sm -ml-1">{data.email} </p>
                  <hr />
                </div>
              </div>
              <hr className="border-black ml-12" />
            </div>
            <p className="bg-slate-950 text-white px-6 rounded-2xl py-2 font-bold">
              Ubah
            </p>
          </div>
          <div className="flex justify-between mt-8">
            <div>
              <div className="flex">
                <PhoneFilled className="text-4xl mr-4 -mt-2" />
                <div>
                  <p className="font-bold">Telepon</p>
                  <p className="text-sm -ml-1">{data.kost.data.attributes.kontak} </p>
                  <hr />
                </div>
              </div>
              <hr className="border-black ml-12" />
            </div>
            <p className="bg-slate-950 text-white px-6 rounded-2xl py-2 font-bold">
              Ubah
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ query }) {
  let nama = query.nama
  {
    typeof nama == "string" ? (nama = nama) : (nama = "K")
  }

  const { data: pemilik } = await client.query({
    query: gql`
    query getNamaPemilik{
      penyewas(filters:{nama:{contains:"${nama}"}}){
        data{
          id
          attributes{
            nama
            alamat
            jenisKelamin
            pekerjaan
            status
            email
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
      pemilik: pemilik.penyewas
    }
  }
}


export default ProfilPemilik;
