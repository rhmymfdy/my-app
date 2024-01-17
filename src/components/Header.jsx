import Link from "next/link";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
// import axios from "axios";


const Header = ({ kost }) => {
  return (
    <div className=" top-0 w-full z-50 sticky">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              KostBaen
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/user/pageLanding"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Kategori{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {/* Dropdown menu */}
                <div
                  id="dropdownNavbar"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    {/* {kategories.map((jenis) => (
                      <li key={jenis} onClick={() => handleClick(jenis)}>
                        <Link
                          href={`/user/pageKategori?kategoriKost=${jenis}`}
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"> {jenis}</Link>
                      </li>
                    ))} */}
                    <li>
                      <Link
                        href={{
                          pathname: "/user/pageKategori",
                          query: { kategoriKost: "Putra" }

                        }}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        PUTRA
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={{
                          pathname: "/user/pageKategori",
                          query: { kategoriKost: "Putri" }

                        }}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        PUTRI
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={{
                          pathname: "/user/pageKategori",
                          query: { kategoriKost: "Campur" }

                        }}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        CAMPUR
                      </Link>
                    </li>
                  </ul>
                  {/* <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </div> */}
                </div>
              </li>
              <li>
                <Link
                  href="/user/pageBantuan"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Bantuan
                </Link>
              </li>
              <li>
                <Link
                  href="/user/pageArea"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Area Sekitar
                </Link>
              </li>
              <li>
                <Link
                  href="/user/pageSyarat"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Syarat
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/user/pageProfilUser"
                  className="block -mt-5 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-3xl"
                >
                  <UserOutlined />
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

// export async function getServerSideProps({ query }) {
//   const client = new ApolloClient({
//     uri: `http://127.0.0.1:1337/graphql`,
//     cache: new InMemoryCache(),
//   })

//   let kdKamar = query.kdKamar
//   {
//     typeof kdKamar == "string" ? (kdKamar = kdKamar) : (kdKamar = "KM")
//   }
//   const { data: kamar } = await client.query({
//     query: gql`
//     query getByKdKamar {
//       kamars{
//         data{
//           id
//           attributes{
//             kdKamar
//             ukuranKamar
//           }
//         }
//       }
//     }
//     `
//   })
//   return {
//     props: {
//       kamar: kamar.kamars,
//     }
//   }
// }

// export async function getServerSideProps({ query }) {
//   const kategoriKost = query.kategoriKost
//   let url = 'http://127.0.0.1:1337/api/kosts'
//   if (kategoriKost) {
//     url = `http://127.0.0.1:1337/api/kosts?filters[kategoriKost][$contains]=${kategoriKost}`
//   }
//   const res = await axios.get(url)
//   const kost = res.data
//   console.log(kost)
//   return ({
//     props: { kost }
//   })
// }

export default Header;
