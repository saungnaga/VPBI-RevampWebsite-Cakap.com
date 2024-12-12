"use client";

import Image from "next/image";
import { useState } from "react";

export default function CourseDetail({ courseData, courseRating }) {
  const [isAboutCourseExpanded, setIsAboutCourseExpanded] = useState(false);
  const [isCurriculumExpanded, setIsCurriculumExpanded] = useState(false);
  const [isFacilitiesExpanded, setIsFacilitiesExpanded] = useState(false);
  const [isScheduleExpanded, setIsScheduleExpanded] = useState(false);
  const [isTermAndConditionExpanded, setIsTermAndConditionExpanded] =
    useState(false);
  const [activeTab, setActiveTab] = useState("Beli Kursus");

  const toggleAboutCourseExpand = () => {
    setIsAboutCourseExpanded(!isAboutCourseExpanded);
  };

  const toggleCurriculumExpand = () => {
    setIsCurriculumExpanded(!isCurriculumExpanded);
  };

  const toggleFacilitiesExpand = () => {
    setIsFacilitiesExpanded(!isFacilitiesExpanded);
  };

  const toggleScheduleExpand = () => {
    setIsScheduleExpanded(!isScheduleExpanded);
  };

  const toggleTermAndConditionExpand = () => {
    setIsTermAndConditionExpanded(!isTermAndConditionExpanded);
  };
  const renderSidebarContent = () => {
    if (activeTab === "Beli Kursus") {
      return (
        <>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Apa yang Kamu Dapat
            </h3>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html: isFacilitiesExpanded
                    ? courseData.courseDescription.facilities ||
                      "Tidak tersedia"
                    : (courseData.courseDescription.facilities || "").substring(
                        0,
                        200
                      ) +
                      (courseData.courseDescription.facilities.length > 200
                        ? "..."
                        : ""),
                }}
              />
              {courseData?.courseDescription?.facilities?.length > 200 && (
                <button
                  onClick={toggleFacilitiesExpand}
                  className="text-blue-500 font-medium hover:underline mt-2"
                >
                  {isFacilitiesExpanded ? "Sembunyikan" : "Baca Selengkapnya"}
                </button>
              )}
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Jadwal</h3>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html: isScheduleExpanded
                    ? courseData.courseDescription.schedule || "Tidak tersedia"
                    : (courseData.courseDescription.schedule || "").substring(
                        0,
                        200
                      ) +
                      (courseData.courseDescription.schedule.length > 200
                        ? "..."
                        : ""),
                }}
              />
              {courseData?.courseDescription?.schedule?.length > 200 && (
                <button
                  onClick={toggleScheduleExpand}
                  className="text-blue-500 font-medium hover:underline mt-2"
                >
                  {isScheduleExpanded ? "Sembunyikan" : "Baca Selengkapnya"}
                </button>
              )}
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Harga</h3>
            <ul className="text-gray-700 text-base font-bold space-y-2">{`Rp ${Number(
              courseData.finalPrice
            ).toLocaleString("id-ID")}`}</ul>
          </div>
        </>
      );
    }

    if (activeTab === "S&K") {
      return (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Syarat & Ketentuan
          </h3>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: isTermAndConditionExpanded
                  ? courseData.courseDescription.termAndCondition ||
                    "Tidak tersedia"
                  : (
                      courseData.courseDescription.termAndCondition || ""
                    ).substring(0, 200) +
                    (courseData.courseDescription.termAndCondition.length > 200
                      ? "..."
                      : ""),
              }}
            />
            {courseData?.courseDescription?.termAndCondition?.length > 200 && (
              <button
                onClick={toggleTermAndConditionExpand}
                className="text-blue-500 font-medium hover:underline mt-2"
              >
                {isTermAndConditionExpanded
                  ? "Sembunyikan"
                  : "Baca Selengkapnya"}
              </button>
            )}
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-6">
        {courseData && (
          <div className="w-full">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-3/4 mb-4 lg:mb-0 grid gap-4">
                <div className="border rounded-lg bg-white shadow-lg p-4">
                  <div className="grid gap-1">
                    <p className="text-dark text-sm dark:text-white md:mt-0">
                      {courseData.categoriesName}
                    </p>
                    <h2 className="font-bold text-dark text-3xl dark:text-white md:mt-0">
                      {courseData.courseName}
                    </h2>
                    <p className="flex justify-end text-dark text-sm dark:text-white md:mt-0">
                      Rating : {""}
                      <span className="font-semibold">
                        {courseData.rating} / 5.0 | (
                        {courseRating?.totalReviewer || 0} Ulasan )
                      </span>
                    </p>
                    <Image
                      src={courseData.icon.large}
                      alt={courseData.courseName}
                      width={1000}
                      height={500}
                    />
                  </div>
                  <div className="flex gap-2 my-3">
                    <Image
                      src={courseData.partner.partnerLogo.square}
                      alt="Partner Logo"
                      width={50}
                      height={50}
                    />
                    <div className="flex flex-col">
                      <div className="font-bold text-lg">
                        {courseData.partner.partnerName}
                      </div>
                      <div className="text-sm">{courseData.tutorName}</div>
                    </div>
                  </div>
                  <hr className="border-gray-300" />
                  <div className="grid gap-4 my-4">
                    <div className="flex flex-wrap gap-3">
                      <div className="font-bold text-xl">Tentang Kursus</div>
                      <div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: isAboutCourseExpanded
                              ? courseData.courseDescription.aboutCourse ||
                                "Tidak tersedia"
                              : (
                                  courseData.courseDescription.aboutCourse || ""
                                ).substring(0, 200) +
                                (courseData.courseDescription.aboutCourse
                                  .length > 200
                                  ? "..."
                                  : ""),
                          }}
                        />
                        {courseData?.courseDescription?.aboutCourse?.length >
                          200 && (
                          <button
                            onClick={toggleAboutCourseExpand}
                            className="text-blue-500 font-medium hover:underline mt-2"
                          >
                            {isAboutCourseExpanded
                              ? "Sembunyikan"
                              : "Baca Selengkapnya"}
                          </button>
                        )}
                      </div>
                    </div>
                    <hr className="border-gray-300" />
                    <div className="flex flex-col gap-3">
                      <div className="font-bold text-xl">Kurikulum</div>
                      <div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: isCurriculumExpanded
                              ? courseData?.courseDescription?.curriculum ||
                                "Tidak tersedia"
                              : (
                                  courseData?.courseDescription?.curriculum ||
                                  ""
                                ).substring(0, 200) +
                                ((
                                  courseData?.courseDescription?.curriculum ||
                                  ""
                                ).length > 200
                                  ? "..."
                                  : ""),
                          }}
                        />
                        {courseData?.courseDescription?.curriculum?.length >
                          200 && (
                          <button
                            onClick={toggleCurriculumExpand}
                            className="text-blue-500 font-medium hover:underline mt-2"
                          >
                            {isCurriculumExpanded
                              ? "Sembunyikan"
                              : "Baca Selengkapnya"}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border rounded-lg bg-white shadow-lg p-4"></div>
              </div>
              <div className="w-full lg:w-1/4 ">
                <aside className="w-full border rounded-lg bg-white shadow-lg p-4 sticky top-20 lg:ml-2 mt-6 lg:mt-0 grid">
                  <div className="flex border-b mb-4">
                    <button
                      className={`flex-1 py-2 text-center font-semibold ${
                        activeTab === "Beli Kursus"
                          ? "border-b-2 border-blue-500 text-blue-500"
                          : "text-gray-500 hover:text-blue-500"
                      }`}
                      onClick={() => setActiveTab("Beli Kursus")}
                    >
                      Beli Kursus
                    </button>
                    <button
                      className={`flex-1 py-2 text-center font-semibold ${
                        activeTab === "S&K"
                          ? "border-b-2 border-blue-500 text-blue-500"
                          : "text-gray-500 hover:text-blue-500"
                      }`}
                      onClick={() => setActiveTab("S&K")}
                    >
                      S&K
                    </button>
                  </div>
                  {renderSidebarContent()}
                  <button
                    onClick={() => alert("Proses beli barang dimulai!")}
                    className="mt-6 py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                  >
                    Beli Barang
                  </button>
                </aside>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
