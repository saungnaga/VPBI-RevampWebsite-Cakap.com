//Homepage
"use client"
import Badge from "@/components/atoms/badge";
import { CircleButton } from "@/components/atoms/circle-button";
import { Input } from "@/components/atoms/input";
import FaqHome from "@/components/molecules/faq-home";
import { CardLanguage } from "@/components/molecules/card-language";
import cardLanguage from "../data/cardLanguage";
import PartnerList from "@/components/molecules/partnerHome-list";
import React from "react";
import JobList from "@/components/molecules/job-list";
import CourseList from "@/components/molecules/prakerja-list";
import { Carousel } from "@/components/molecules/carousel";

export default function Home() {
  return (
    <>
      <h1 className="hidden">
        Kursus Online Bersertifikat dan Kelas Keterampilan Kerja - Cakap
      </h1>
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
          <div className="text-xl lg:text-4xl md:text-3xl sm:text-2xl font-extrabold">
            Jelajahi Dua Cara Belajar Terbaik
          </div>
          <div className="mt-2 text-sm sm:text-base">
            Belajar langsung dari pakarnya dengan live webinar atau atur sendiri
            ritme belajar Anda dengan kursus mandiri.
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
          <div className="text-xl lg:text-4xl md:text-3xl sm:text-2xl font-extrabold">
            Jangan Lewatkan, Ini yang Paling Dicari!
          </div>
          <div className="mt-2 text-sm sm:text-base">
            Daftar sekarang untuk bergabung dengan kursus terbaik kami.
          </div>
        </div>
      </div>
      {/* -------Bahasa Asing-------- */}
      <div className="lg:px-32 md:px-20 p-12">
        <div className="text-3xl font-extrabold">Kelas Live Bahasa Asing</div>
        <div className="text-3xl font-extrabold">
          di <span className="text-[#00ADC6]">Cakap Club</span>
        </div>
        <div className="mt-6 text-left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="relative border shadow-md p-6 rounded-2xl bg-white hover:shadow-lg sm:grid gap-2 text-2xl items-center hidden">
            Pilih mentor native atau guru lokal profesional untuk pengalaman
            belajar terbaik.
          </div>
          <CardLanguage languages={cardLanguage} />
        </div>
      </div>
      {/* -------Karir-------- */}
      <div className="lg:px-32 md:px-20 p-12 bg-[#E1EDF7] flex flex-col gap-10 md:flex-row items-center">
        <div className="flex flex-col justify-center gap-5 lg:w-1/2 md:w-1/3 lg:p-16">
          <div className="text-4xl font-extrabold">
            Temukan <div className="text-[#00ADC6]">Peluang Karier</div> Impian
            Anda
          </div>
          <div>
            <div className="text-lg mb-5">
              Jelajahi berbagai lowongan pekerjaan yang sesuai dengan keahlian
              dan minat Anda.
            </div>
            <Badge bgcolor="white">Lihat Semua ↗</Badge>
          </div>
        </div>
        <JobList />
      </div>
      {/* --------Prakerja------- */}
      <div className="lg:px-32 md:px-20 p-12 bg-[#00ADC6] flex flex-col items-center gap-5">
        <div className="text-2xl lg:text-4xl sm:text-3xl font-extrabold text-center text-white">
          Cakap X Prakerja
        </div>
        <div className="flex gap-2 w-full lg:w-2/3">
          <div className="border-2 border-black rounded-full bg-white p-[2px] flex items-center w-full justify-between">
            <Input placeholder="Kode Belajar Prakerja" />
            <CircleButton
              variant="black"
              className="bg-[#FFBB00] w-1/3 text-gray-950 text-sm hidden sm:flex"
            >
              Tukar Kode →
            </CircleButton>
            <CircleButton
              variant="black"
              className="bg-[#FFBB00] text-gray-950 text-sm sm:hidden w-8"
            >
              →
            </CircleButton>
          </div>
          <CircleButton variant="black" className="text-xs ">
            Cara Tukar Kode ?
          </CircleButton>
        </div>
        <CourseList/>
        <a className="pl-2 pr-1 rounded-full hover:scale-105 bg-white" href="/courses">Lihat Semua ↗</a> 
      </div>
      {/* --------Mitra-------- */}
      <div className="lg:px-32 md:px-20 p-12 border-b-2 border-black shadow-md flex flex-col gap-10 items-center">
        <div className="text-2xl lg:text-4xl sm:text-3xl font-extrabold text-center">
          Mitra Kursus Kami
        </div>
        <div className="scroll-container">
          <PartnerList />
          <PartnerList />
          <PartnerList />
        </div>
        <a className="border border-black pl-2 pr-1 rounded-full hover:scale-105" href="/partners">Lihat Semua ↗</a>        
      </div>
      {/* --------FAQ--------- */}
      <div className="lg:px-32 md:px-20 p-12 flex flex-col md:flex-row md:gap-10 gap-2 text-center md:text-left">
        <div className="flex flex-col justify-between md:w-1/2">
          <div className="text-xl lg:text-4xl sm:text-3xl font-extrabold">
            <span className="text-yellow-500">FAQ</span>: Jawaban Cepat untuk
            Anda
          </div>
          <div className="text-sm sm:text-xl lg:px-10 md:pb-32 text-gray-600">
            Cari tahu segala hal yang Anda butuhkan dengan mudah
          </div>
        </div>
        <div>
          <FaqHome />
        </div>
      </div>
    </>
  );
}
