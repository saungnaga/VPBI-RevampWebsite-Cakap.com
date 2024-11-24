import { getJobs } from "@/services/job-api";
import { create } from "zustand";

interface IJobType {
    jobs: []
    fetchJobs: () => Promise<void>
}

export const useJobStore = create<IJobType>()(
    (set) => ({
        jobs: [],
        fetchJobs: async () => {
            try {
                const jobs = await getJobs();
                set({ jobs: jobs });
            } catch (error) {
                console.error("Error fetching jobs:", error);
                throw error;
            }
        }
    })
)