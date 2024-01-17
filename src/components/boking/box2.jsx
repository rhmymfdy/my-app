const Box2 = () => {
  return (
    <div className="w-9/12 m-auto">
      <hr className="border-black relative top-14 w-10/12 m-auto " />
      <div className="flex justify-between relative z-10 ">
        <spanp
          p
          className="bg-slate-950 text-slate-300 text-2xl font-bold  py-10 px-10 rounded-full"
        >
          Yes
        </spanp>

        <p className="bg-slate-950 text-slate-300 text-2xl text-center  font-bold px-10 pt-9 rounded-lg">
          Pembayaran
        </p>

        <p className="bg-slate-950 text-slate-300 text-2xl font-bold px-10 pt-9 rounded-lg">
          Selesai
        </p>
      </div>
    </div>
  );
};

export default Box2;
