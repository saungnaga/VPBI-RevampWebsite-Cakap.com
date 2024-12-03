"use client";

import React, { useEffect, useState } from "react";
import JobCard from "./job-card";
import { Job } from "../atoms/types/job-list.types";
import { useJobStore } from "@/stores/useJobStore";

const JobList: React.FC = () => {
  const { jobs, fetchJobs } = useJobStore();

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

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
    <div className="flex flex-col gap-3 lg:w-1/2 md:h-[520px] h-96 overflow-hidden rounded-xl border-2 md:px-10 p-5 text-sm md:text-base overflow-y-auto bg-white">
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
  );
};

export default JobList;
