import { Job } from "@/components/molecules/types/job-list.types";
import { getJobs } from "@/services/job-api";
import { create } from "zustand";

interface IJobType {
    jobs: Job[]
    fetchJobs: () => Promise<void>
}

export const useJobStore = create<IJobType>()(
    (set) => ({
        jobs: [],
        fetchJobs: async () => {
            try {
                const data = await getJobs();

                const filteredJobs = data.filter((job: Job) => {
                    return(
                        job.id &&
                        job.title &&
                        job.company &&
                        job.city &&
                        job.country &&
                        job.jobtype &&
                        job.created
                    )
                })

                const sortedJobs = filteredJobs.sort((a: Job, b: Job) => {
                    const dateA = new Date(a.created);
                    const dateB = new Date(b.created);
                    return dateB.getTime() - dateA.getTime();
                })

                const limitJobs = sortedJobs.slice(0, 10);

                set({jobs: limitJobs});

            } catch (error) {
                console.error("Failed to fetch jobs:", error);
                throw error;
            }
        }
    })
)