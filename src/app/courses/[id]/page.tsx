"use client";

import CourseDetail from "@/components/organism/course-detail";
import React, { useState, useEffect } from "react";
import { getCourseDetail, getCourseDetailReview } from "@/services/product-api";

const Page = ({ params }: { params: { id: string } }) => {
  const courseId = params.id;

  const [courseData, setCourseData] = useState<any>(null);

  const [courseRating, setCourseRating] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [detail, review] = await Promise.all([
          getCourseDetail({ courseId }),
          getCourseDetailReview({ courseId }),
        ]);
        setCourseData(detail);
        setCourseRating(review);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [courseId]);

  // Delete if unecessary

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <CourseDetail courseData={courseData} courseRating={courseRating} />
    </div>
  );
};

export default Page;
