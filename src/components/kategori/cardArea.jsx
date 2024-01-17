import Link from "next/link";

const Card = () => {
  return (
    <div className="m-auto">
      <Link
        href="/user/detail"
        className="flex m-auto flex-col items-center bg-white border border-gray-200 p-2 rounded-sm shadow md:flex-row md:w-4/6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full  h-96 md:h-auto md:w-4/12 md:rounded-none "
          src="/kamar.JPG"
          alt
        />
        <div className="flex flex-col justify-between p-4 leading-normal w-full">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Ananda Kost Cungking
          </h5>
          <p className="mb-3 font-normal text-gray-900 dark:text-slate-200">
            Jl Minak Jinggo No 11
          </p>
          <p className="text-slate-500">
            km dalam .wifi .kasur .free .food .water
          </p>
          <p className="bg-white mt-5 text-center w-1/4 rounded-3xl">Putra</p>
          <p className="text-gray-400 mt-5 text-right ">
            <span className="font-bold text-green-500">Rp.450.000,00</span>
            /bulan
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
