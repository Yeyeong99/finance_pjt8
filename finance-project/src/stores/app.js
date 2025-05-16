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
      maxResults: 15,
    };

    try {
      const res = await axios.get(API_URL, { params });
      videos.value = res.data.items;

      for (let i=0; i<videos.value.length; i++) {
        videos.value[i].isSaved = false
        videos.value[i].isLiked = false
      }
      
      console.log(videos.value);
    } catch (error) {
      console.error("검색 실패:", error);
    }
  };

  // 저장된 비디오 찾는 getters
  const savedVideos = computed(() => {
    return videos.value.filter((video) => video.isSaved === true)
  })


  // 비디오 저장
  const saveVideo = function (selectedId) {
    // isSaved 처리하기
    const video = videos.value.find((video) => video.id.videoId === selectedId)
    video.isSaved = true
  }

  // 채널 추가
  const addChannel = function (channel) {
    channels.value.push(channel)
  }

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

  // 비디오 좋아요
  const likeVideo = function (selectedId) {
    // isSaved 처리하기
    const video = videos.value.find((video) => video.id.videoId === selectedId)
    video.isLiked = true
  }

  return {
    videos,
    channels,
    savedVideos,
    searchKeyword,
    saveVideo,
    deleteVideo,
    likeVideo,
    addChannel,
    deleteChannel,

  };
});
