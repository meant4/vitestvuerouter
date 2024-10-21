import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "main",
  state: () => ({
    messages: [],
    userId: 1234,
    userName: 'Ewelina'
  }),
  actions: {
  },
});
