//Homepage

import { Accordion } from "@/components/atoms/accordion";
import Badge from "@/components/atoms/badge";
import { Sosmed } from "@/components/atoms/circle-button";
import { Header } from "@/components/molecules/header";
import JobList from "@/components/molecules/job-list";
import React from "react";

export default function Home() {
  return (
    <>
      <h1 className="hidden">
        Kursus Online Bersertifikat dan Kelas Keterampilan Kerja - Cakap
      </h1>
      <Header />
      {/* -----banner----- */}
      <div className="lg:w-1/2 md:px-32 sm:px-20 p-12 flex flex-col gap-4">
        <div className="text-4xl font-extrabold">
          Raih <span className="text-[#00ADC6]">tujuan</span> dan{" "}
          <span className="text-[#00ADC6]">sasaran Anda</span> di masa mendatang
        </div>
      </div>
      {/* -------course preview------- */}
      <div className="lg:px-32 md:px-20 p-12 bg-[#E1EDF7]">
        <div className="text-center">
          <div className="text-xl lg:text-4xl md:text-3xl sm:text-2xl font-extrabold">Jelajahi Dua Cara Belajar Terbaik</div>
          <div className="mt-2 text-sm sm:text-base">
            Belajar langsung dari pakarnya dengan live webinar atau atur sendiri ritme belajar Anda dengan kursus mandiri.
          </div>
        </div>
      </div>
      {/* -------Kategori-------- */}
      <div className="lg:px-32 md:px-20 p-12">
        <div className="text-3xl font-extrabold">
          Beragam <span className="text-[#00ADC6]">Kategori</span>,
        </div>
        <div className="text-3xl font-extrabold">Tak Terbatas Kesempatan</div>
      </div>
      {/* -------Kursus Terlaris------ */}
      <div className="lg:px-32 md:px-20 p-12 bg-[#E1EDF7]">
        <div className="text-center">
          <div className="text-xl lg:text-4xl md:text-3xl sm:text-2xl font-extrabold">Jangan Lewatkan, Ini yang Paling Dicari!</div>
          <div className="mt-2 text-sm sm:text-base">
            Daftar sekarang untuk bergabung dengan kursus terbaik kami.
          </div>
        </div>
      </div>
      {/* -------Bahasa Asing-------- */}
      <div className="lg:px-32 md:px-20 p-12">
        <div className="text-3xl font-extrabold">Kelas Live Bahasa Asing</div>
        <div className="text-3xl font-extrabold">
          di <span className="text-[#00ADC6]">Cakap Club</span>,
        </div>
      </div>
      {/* -------Karir-------- */}
      <div className="lg:px-32 md:px-20 p-12 bg-[#E1EDF7] flex flex-col gap-10 md:flex-row items-center">
        <div className="flex flex-col justify-center gap-5 lg:w-1/2 md:w-1/3 lg:p-16">
          <div className="text-4xl font-extrabold">
            Temukan <div className="text-[#00ADC6]">Peluang Karier</div> Impian Anda
          </div>
          <div>
            <div className="text-lg mb-5">
            Jelajahi berbagai 
            lowongan pekerjaan yang sesuai dengan keahlian dan minat Anda.
            </div>
            <Badge label="Lihat Semua ↗" link="" bgcolor="white"/>
          </div>
        </div>
        <JobList />
      </div>
      {/* --------Prakerja------- */}
      <div className="lg:px-32 md:px-20 p-12 bg-[#00ADC6]">
          <div className="text-2xl lg:text-4xl sm:text-3xl font-extrabold text-center text-white">Cakap X Prakerja</div>
      </div>
      {/* --------Mitra-------- */}
      <div className="lg:px-32 md:px-20 p-12 border-b-2 border-black shadow-md">
        <div className="text-2xl lg:text-4xl sm:text-3xl font-extrabold text-center">Mitra Kursus Kami</div>
      </div>
      {/* --------FAQ--------- */}
      <div className="lg:px-32 md:px-20 p-12 flex flex-col md:flex-row md:gap-10 gap-2 text-center md:text-left">
        <div className="flex flex-col justify-between md:w-1/2">
          <div className="text-xl lg:text-4xl sm:text-3xl font-extrabold">
            <span className="text-yellow-500">FAQ</span>: Jawaban Cepat untuk Anda
          </div>
          <div className="text-sm sm:text-base">
            Cari tahu segala hal yang Anda butuhkan dengan mudah
          </div>
        </div>
        <div>
          <Accordion />
        </div>
      </div>
    </>
  );
}
