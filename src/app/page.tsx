//Homepage
"use client"
import { Accordion } from "@/components/atoms/accordion";
import Badge from "@/components/atoms/badge";
import { CircleButton } from "@/components/atoms/circle-button";
import { Input } from "@/components/atoms/input";
import FaqHome from "@/components/molecules/faq-home";
import { CardLanguage } from "@/components/molecules/card-language";
import cardLanguage from "../data/cardLanguage";
import PartnerList from "@/components/molecules/partnerHome-list";
import React from "react";
import { useEffect } from "react";
import { useBannerStore } from "@/stores/useBannerStore";
import Link from "next/link";
import { ProductCardSkeleton } from "@/components/molecules/product-card-skeleton";
import { useProductHighlightStore } from "@/stores/useProductHighlightStore";
import JobList from "@/components/molecules/job-list";
import CourseList from "@/components/molecules/prakerja-list";
import { Carousel } from "@/components/molecules/carousel";
import { chunkArray } from "@/helpers/chunkArrayHelper";

export default function Home() {

  const { banners, fetchBanners } = useBannerStore();
  
  useEffect(() => {
  fetchBanners();
  }, [fetchBanners]);

  const { products, fetchProduct } = useProductHighlightStore();
  
  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const groupProduct = chunkArray(products, 5)

  return (
    <>
      <h1 className="hidden">
        Kursus Online Bersertifikat dan Kelas Keterampilan Kerja - Cakap
      </h1>
      {/* -----banner----- */}
      <div className="px-20 py-4 md:px-20 p-12 bg-white text-black banner bg-white">
                <div className="flex flex-row justify-between items-center tracking-tighter">
                    <div className="text-7xl font-semibold">
                        Raih <span className="text-lime-500">TUJUAN</span>
                        <p> dan <span className="text-cyan-500">SASARAN</span></p> 
                        <p>Anda di masa mendatang</p>
                        <Link href="CourseList">
                          <Badge bgcolor="blue">Pelajari lebih lanjut ↗</Badge>
                        </Link>
                    </div>
                    <Carousel>
                  {banners?.map((banners, index) => (
                        <Link href={banners.redirectUrl}>
                            <img
                                key={index}
                                src={banners.urlBanner} 
                                alt={banners.altTag}
                                className="object-fit w-screen h-[30vw] rounded-3xl "
                            />
                        </Link>
                        ))}
                </Carousel>
                </div>
            </div>
      {/* -------course preview------- */}
      <div className="lg:px-32 md:px-20 p-12 bg-[#E1EDF7]">
        <div>
          <div className="text-xl lg:text-4xl md:text-3xl sm:text-2xl font-extrabold text-center">
            Jelajahi Cara Belajar Terbaik
          </div>
          <div className="mt-2 text-sm sm:text-base text-center">
            Belajar langsung dari pakarnya dengan live webinar atau atur sendiri
            ritme belajar Anda dengan kursus mandiri.
          </div>
          <div>
              <Carousel>
              {groupProduct.map((group, index) => (
                <div key={index} className="flex gap-4 justify-center p-24">
                  {group.map((product) => (
                    <ProductCardSkeleton courseId={product.courseId}
                    courseName= {product.courseName}
                    categoriesName= {product.categoriesName}
                    partner={product.partner}
                    icon={product.icon}
                    basicPrice={product.basicPrice}
                    price={product.price}
                    discount={product.discount}
                    promoText={product.promoText}
                    nextAction={product.nextAction}/>
                  ))}
                </div>
              ))}
              </Carousel>
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
      <div className="bg-[#D9D9D9] mx-96 pb-24 pt-16 pr-20 rounded-3xl flex flex-col">
        <div className="flex justify-end">
          {products.slice(0, 5).map((product, index) => (
              <Link href="Kategori">
                <div key={index} className="m-2">
                  <Badge bgcolor="white">{product.categoriesName} ↗</Badge>
                </div>
              </Link>
          ))}
        </div>
        <div className="flex flex justify-end">
          {products.slice(6, 11).map((product, index) => (
              <Link href="Kategori">
                <div key={index} className="m-2">
                  <Badge bgcolor="white">{product.categoriesName} ↗</Badge>
                </div>
              </Link>
          ))}
        </div>
        <div className="flex flex justify-end">
          {products.slice(12, 13).map((product, index) => (
              <Link href="Kategori">
                <div key={index} className="m-2">
                  <Badge bgcolor="white">{product.categoriesName} ↗</Badge>
                </div>
              </Link>
              
          ))}
        </div>
        <div className="text-4xl w-3/4 px-20">
          Eksplorasilah kategori kami untuk memperluas keterampilan Anda
        </div>
        <div className="text-sm w-2/4 px-20 flex flex-col">
            Punya Kode Belajar? Masukkan
            <input
            className="py-2 w-3/4 rounded-2xl"
            id="1"
            name="Masukkan kode belajar Anda"
            value=""
            onChange="d"
            placeholder="Masukkan kode belajar Anda"
        />
        </div>
          
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
