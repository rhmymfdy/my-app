import { MailFilled, PhoneFilled } from "@ant-design/icons";
import Link from "next/link";

const Baner2 = () => {
  return (
    <div className="p-16">
      <div className="flex w-10/12 m-auto mb-20 mt-16">
        <div className="flex w-1/2  p-3">
          <div className="w-2/6 mr-3">
            <img
              src="/amanda.jpg"
              alt=""
              className=" m-auto   rounded-full w-56 h-48 border-spacing-2 border-slate-950 border-double"
            />
          </div>
          <div className="w-4/6">
            <h1 className="text-2xl font-bold ">
              Bu HJ Amanda Manopo Istri Konesz{" "}
            </h1>
            <p className="mt-2">JL Cungkingan gang palapa No 76</p>
            <p className="py-3 font-bold mt-6">
              Facebook <span className="font-medium"> : amanda7776</span>
            </p>
            <p className="mb-4 font-bold">
              Facebook <span className="font-medium"> : amanda_oke</span>
            </p>
            <p className="font-bold mb-2 mt-10">Tentang saya</p>
            <p className="text-justify w-10/12">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              ipsa labore assumenda velit laudantium corrupti libero, delectus
              voluptates.
            </p>
            <Link href="/user/pageEditProfil">
              <p className="bg-slate-900 w-20 text-center text-white font-bold p-2 rounded-md mt-6">
                Edit
              </p>
            </Link>
          </div>
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
                  <p className="text-sm -ml-1">Siti maimun.com </p>
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
                  <p className="text-sm -ml-1">0876354657 </p>
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

export default Baner2;
