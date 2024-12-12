import { careerInstance } from "@/config/axiosInstance";

export const getJobs = async () => {
    const response = await careerInstance.get('/jobs');
    return response.data;
};