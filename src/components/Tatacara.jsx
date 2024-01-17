const Tatacara = () => {
  return (
    <div className="bg-slate-900">
      <div className="p-24 w-10/12 m-auto">
        <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          TATA CARA SEWA KOST !!!
        </h2>
        <ul class="list-disc text-white">
          <li className="text-xl">
            cra yang pertama user dibebaskan memilih kost yang sesuai pilihan
            atau sesuai kriteria yang diinginkan
          </li>
          <li className="text-xl">
            jika user belum melakukan pendaftaran,maka user akan di arahkan ke
            halaman pendaftaran untuk mengisi pendaftaran data diriaaaaaaaa
            (akan langsung diarahkan ke halaman sewa jika user telah melakukan
            pendaftaran di awal)
          </li>
          <li className="text-xl">
            setelah melakukan pendaftaran, user akan diarahkan ke halam detail
            dari kos yang telah dipilih,setelah itu user dapat mempertimbangkan
            apakah user bersedia dengan kententuan yang terdapat pada kos
            tersebut atau tidak,jika user setuju user dapat menekan tombol sewa
          </li>
          <li className="text-xl">
            lanjut user akan diarahkan kehalaman pemilihan hari,tanggal dan lama
            sewa
          </li>
          <li className="text-xl">
            kemudian user akan di arahkan untuk melakukan pembayaran baik secara
            online ataupun offline denagn menakan fitur yang tersedia di halaman
            sewa
          </li>
          <li className="text-xl">
            setelah user melakukan pembayaran,maka nantinya akan keluar sebuah
            struk penyewaan yang dapat menjadi bukti bawahsannya user telah
            menyewa kamar yang diinginkan dan juga telah menyelesaikan
            pembayaran{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tatacara;
