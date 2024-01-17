import Foto from "@/components/detail/Foto";
import Tipe from "@/components/detail/Tipe";
import Flts from "@/components/detail/Fasilitas";
import Jam from "@/components/detail/Jamkunjung";
import Umum from "@/components/detail/FasilitasUmum";
import TmKmLy from "@/components/detail/TipeKmLain";
import Pemilik from "@/components/detail/Pemilik";
import Map from "@/components/detail/Maps";



const Detail = ({ kamar }) => {
  console.log(kamar)
  return (
    <div className="p-5">
      <div>
        <Foto />
      </div>
      <div className="sticky -top-0 z-10">
        <Tipe />
      </div>
      <div className="relative z-40 ">
        <div className="py-2">
          <Flts />
        </div>
        <div className="py-4">
          <Jam />
        </div>
        <div>
          <Umum />
        </div>
        <div className="py-2">
          <TmKmLy />
        </div>
        <div>
          <Pemilik />
        </div>
        <div className="py-4">
          <Map />
        </div>
      </div>
    </div>
  );
};




export default Detail;
