import { ref } from "vue";
import { defineStore } from "pinia";

export const useMenuStore = defineStore("menuStore", () => {
  const menuList = ref([
    { name: "login", show: true, routeName: "login" },
    { name: "sign up", show: true, routeName: "signup" },
    { name: "logout", show: false, routeName: "logout" },
    { name: "my page", show: false, routeName: "mypage" },
  ]);

  const changeMenuState = () => {
    menuList.value = menuList.value.map((item) => ({ ...item, show: !item.show }));
  };
  return {
    menuList,
    changeMenuState,
  };
}, { persist: true });
