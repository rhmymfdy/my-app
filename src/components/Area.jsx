import Link from "next/link";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const Area = ({ lokasi }) => {
  // const dataLokasi = kost.attributes.lokasis.data
  console.log(lokasi)
  return (
    <div className="w-11/12 m-auto py-8 flex justify-center content-center  bg-gray-300">
      {lokasi.map((lok) => (
        <div>
          <Link href="/user/pageArea">
            <img style={{ width: "400px", height: "300px" }} className="p-2" src={`http://127.0.0.1:1337${lok.attributes.gambar.data.attributes.url}`} alt="" />
          </Link>
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
  );
};
export default Area;
