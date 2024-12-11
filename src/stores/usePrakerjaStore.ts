// store/useCoursesStore.ts
import { create } from "zustand";
import axios from "axios";

interface Course {
  id: number;
  courseName: string;
  partner: {
      partnerName: string;
  };
  basicPrice: number;
  reviews: {
    rating: number;
    total: number;
  };
  icon: { large: string };
}

interface CourseState {
  courses: Course[];
  fetchCourses: () => Promise<void>;
  loading: boolean;
  error: string | null;
}

export const usePrakerjaStore = create<CourseState>((set) => ({
  courses: [],
  loading: false,
  error: null,
  fetchCourses: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        "https://api-staging.cakap.com/v3/selfpaced/course/list",
        {
          params: {
            isSupportPrakerja: true,
            limit: 10,
            page: 1,
            courseOrderBy: "HIGHLIGHT_PRAKERJA",
          },
        }
      );
      set({ courses: response.data.data.course, loading: false });
    } catch (err) {
      set({ error: "Failed to fetch courses", loading: false });
    }
  },
}));
