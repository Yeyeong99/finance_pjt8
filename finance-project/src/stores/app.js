// Utilities
import axios from "axios";
import { ref } from "vue";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = "https://www.googleapis.com/youtube/v3/search";

  const videos = ref([]); // 컴포넌트에서 사용할 반응형 데이터

  const searchKeyword = async (keyword) => {
    const params = {
      key: API_KEY,
      part: "snippet",
      type: "video",
      q: keyword,
    };

    try {
      const res = await axios.get(API_URL, { params });
      videos.value = res.data.items;
      console.log(videos.value);
    } catch (error) {
      console.error("검색 실패:", error);
    }
  };

  return {
    videos,
    searchKeyword,
  };
});
