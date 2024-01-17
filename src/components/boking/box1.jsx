const Box = () => {
  return (
    <div className="w-9/12 m-auto">
      <hr className="border-black relative top-8 w-9/12 m-auto " />
      <div className="flex justify-between relative z-10">
        <p className="bg-slate-950 text-slate-300 text-2xl font-bold py-4 px-10 rounded-lg">
          Boking
        </p>

        <p className="bg-slate-950 text-slate-300 text-2xl font-bold py-4 px-10 rounded-lg">
          Pembayaran
        </p>

        <p className="bg-slate-950 text-slate-300 text-2xl font-bold py-4 px-10 rounded-lg">
          Selesai
        </p>
      </div>
    </div>
  );
};

export default Box;
