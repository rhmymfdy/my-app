import Link from "next/link";
import { GoogleSquareFilled, FacebookFilled } from "@ant-design/icons";
import { useState } from "react";

const FormLogn = ({}) => {
  return (
    <div className="flex">
      <div className="w-1/2 bg-slate-800">
        <img src="/rumah.png" alt="this is logo" className="h-full" />
      </div>
      <div className="w-1/2 bg-slate-900 p-36 ">
        <div className="flex text-right justify-between w-72 ml-64 relative bottom-28">
          <p className="text-xl mt-1 text-slate-50">Belum Punya Akun?</p>
          <Link href="/user/pageSignin">
            <p className="bg-blue-900 text-slate-200 font-semibold p-2 rounded-lg px-4">
              Daftar
            </p>
          </Link>
        </div>
        <form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                defaultValue
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          {/* <Link href={'/user/pageLanding'}> test</Link> */}
          <div className="text-center mt-10">
            <p className="text-white text-lg font-semibold">
              Buat Akun Dengan
              <span className="text-4xl px-6">
                <FacebookFilled />
              </span>
              <span className="text-4xl">
                <GoogleSquareFilled />
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormLogn;
