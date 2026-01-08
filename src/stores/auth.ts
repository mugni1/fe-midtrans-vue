import type { UserDataStore } from "@/types/user";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore('auth_store', () => {
  const user = ref<undefined | null | UserDataStore>()

  const setUser = (data: UserDataStore | null | undefined) => {
    user.value = data
  }
  const removeUser = () => {
    user.value = undefined
  }

  return { user, setUser, removeUser }
}, { persist: true })
