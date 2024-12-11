"use client";
import { useEffect, useRef } from "react";
import CourseCard from "./prakerja-card";
import { usePrakerjaStore } from "@/stores/usePrakerjaStore";
import { CircleButton } from "../atoms/circle-button";

const CourseList: React.FC = () => {
  const { courses, fetchCourses, loading, error } = usePrakerjaStore();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="flex overflow-hidden w-full gap-2"
      >
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.courseName}
            provider={course.partner.partnerName}
            price={course.basicPrice}
            rating={course.reviews?.rating || 0}
            reviews={course.reviews?.total || 0}
            image={course.icon?.large || "/placeholder.png"}
          />
        ))}
      </div>
      <div className="flex gap-4 mt-4 justify-end">
        <CircleButton onClick={handleScrollLeft} variant="black" className="px-2">←</CircleButton>
        <CircleButton onClick={handleScrollRight} variant="black" className="px-2">→</CircleButton>
      </div>
    </div>
  );
};

export default CourseList;
