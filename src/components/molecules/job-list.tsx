"use client";

import React, { useRef, useEffect, useState } from "react";
import JobCard from "./job-card";
import { useJobStore } from "@/stores/useJobStore";
import { Job } from "./types/job-list.types";
import { CircleButton } from "../atoms/circle-button";

const JobList: React.FC = () => {
  const { jobs, fetchJobs } = useJobStore();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const handleScrollUp = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        top: -300,
        behavior: "smooth",
      });
    }
  };

  const handleScrollDown = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        top: 300,
        behavior: "smooth",
      });
    }
  };

  const formatTimeAgo = (date: string): string => {
    const now = new Date();
    const jobDate = new Date(date);
    const differenceInTime = now.getTime() - jobDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

    if (differenceInDays === 0) {
      return "Today";
    } else if (differenceInDays === 1) {
      return "1 day";
    } else {
      return `${differenceInDays} days`;
    }
  };

  if (!jobs || jobs.length === 0) {
    return <div>Loading jobs...</div>;
  }

  return (
    <div className="flex gap-2 items-center lg:w-1/2">
      <div ref={containerRef} className="flex flex-col gap-3 md:h-[520px] h-96 overflow-hidden rounded-xl border-2 md:px-10 p-5 text-sm md:text-base bg-white">
        {jobs.map((job: Job) => (
          <JobCard
            key={job.id}
            title={job.title}
            city={job.city}
            country={job.country}
            company={job.company}
            type={job.jobtype}
            timeListed={formatTimeAgo(job.created)}
          />
        ))}
      </div>
      <div>
        <CircleButton className="px-3 mb-2" variant="black" onClick={handleScrollUp}>↑</CircleButton>
        <CircleButton className="px-3" variant="black" onClick={handleScrollDown}>↓</CircleButton>
      </div>
    </div>
  );
};

export default JobList;
