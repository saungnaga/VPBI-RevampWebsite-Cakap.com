"use client";
import { Input } from "@/components/atoms/input";
import { Carousel } from "@/components/molecules/carousel";
import PartnerCard from "@/components/molecules/partner-card";
import { chunkArray } from "@/helpers/chunkArrayHelper";
import { usePartnerStore } from "@/stores/usePartnerStore";
import { useEffect, useState } from "react";

const Page = () => {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState("COURSE");
  const { partners, fetchPartners } = usePartnerStore();

  const groupedPartners = chunkArray(partners, 5);

  useEffect(() => {
    fetchPartners({
      partner_type: page,
      search: search,
    });
  }, [fetchPartners, page, search]);

  const handlePaymentPage = () => {
    setPage("PAYMENT");
  };

  const handleCoursePage = () => {
    setPage("COURSE");
  };

  return (
    <>
      <div className="flex flex-col gap-4 items-center mt-10">
        <div className="text-center flex flex-col gap-3 w-3/5 lg:w-3/4">
          <div className="text-3xl font-bold">
            Lebih dari 100 Perusahaan Terpercaya
          </div>
          <div className="text-lg">
            Kami bekerja sama dengan berbagai mitra pendidikan untuk
            menghadirkan solusi belajar terbaik dan mitra pendukung untuk
            menyediakan berbagai benefit ketika kamu bertransaksi.
          </div>
          <div className="text-lg font-bold">
            Kepercayaan mereka adalah bukti kualitas layanan kami.
          </div>
        </div>
        <div className="border-2 border-black rounded-full px-[2px] flex items-center w-80">
          <Input
            id="search"
            value={search}
            placeholder="Cari Mitra Upskill"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="space-x-8 mb-8 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleCoursePage}
            className={`${
              page === "COURSE"
                ? "text-[#00ADC6] font-medium border-b-2 border-[#00ADC6]"
                : "text-gray-400"
            } transition-all duration-300 ease-in-out`}
          >
            Mitra Pendidikan
          </button>

          <button
            onClick={handlePaymentPage}
            className={`${
              page === "PAYMENT"
                ? "text-[#00ADC6] font-medium border-b-2 border-[#00ADC6]"
                : "text-gray-400"
            } transition-all duration-300 ease-in-out`}
          >
            Mitra Pendukung
          </button>
        </div>

        <div className=" bg-gray-100 p-6 rounded-lg w-3/5 lg:w-3/4">
          <Carousel>
            {groupedPartners.map((group, index) => (
              <div key={index} className="flex justify-center gap-4">
                {group.map((partner) => (
                  <PartnerCard key={partner.partnerId} partner={partner} />
                ))}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Page;
