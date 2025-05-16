// Utilities
import axios from "axios";
import { ref } from "vue";
import { defineStore } from "pinia";
import { vi } from "vuetify/locale";

export const useAppStore = defineStore("app", () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = "https://www.googleapis.com/youtube/v3/search";

  const videos = ref([]); // 컴포넌트에서 사용할 반응형 데이터
  const channels = ref([
    {id: 1, title: '채널1', isSubscribed: false},
  ]);    // 저장된 채널 리스트

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

  // 저장된 비디오 찾는 getters
  const savedVideo = computed(() => {
    return videos.value.filter((video) => video.isSaved === true)
  })

  // 채널 삭제하기 >> 제거
  const deleteChannel = function (selectedId) {
    const index = channels.value.findIndex((channel) => channel.id === selectedId)
    if (index !== -1) {
      channels.value.splice(index, 1)
    }
  }

  // 비디오 삭제하기 >> 재배열
  const deleteVideo = function (selectedId) {
      videos.value = videos.value.filter((video) => video.id.videoId !== selectedId)
  }

  return {
    videos,
    channels,
    searchKeyword,
    savedVideo,
    deleteVideo,
    deleteChannel,

  };
});
