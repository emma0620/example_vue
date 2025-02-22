import { createApp } from "vue";
import App from "./App.vue";

// 確保 `#app` 內有內容
createApp(App).mount("#app");

// 確保 `#container-1` 存在才掛載

//   createApp({
//     data() {
//       return { message: "這是第一個 Vue 應用" };
//     },
//     template: `<h1>{{ message }}</h1>`,
//   }).mount("#container-1");


// // 確保 `#container-2` 存在才掛載

//   createApp({
//     data() {
//       return { message: "這是第二個 Vue 應用" };
//     },
//     template: `<h2>{{ message }}</h2>`,
//   }).mount("#container-2");

