const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-blue mb-10">About Me</h2>
      <p className="text-white ">
        Ghebi mempunyai pengalaman pada bidang industri digital yaitu di bidang
        desain visual sebagai logo desainer dan pekerja part-time pada
        Laboratorium Teknik Digital UNILA serta pelayanan pelanggan di Counter
        YFF CELL. Mengikuti beberapa organisasi dan kepanitiaan di kampus.
        Tertarik di bidang IT Programmer dan juga Desainer Grafis, yang mana
        sedang mengikuti perkuliahan pada program studi Teknik Informatika di
        Universitas Lampung.
      </p>
      <button className="border border-lightblue rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-lightblue text-white hover:text-lightOrange transition-all duration-500 cursor-pointer md:self-start sm:self-end ">
        My Project
      </button>
    </div>
  );
};

export default AboutMeText;
