<script setup>
import Home from './src/components/Home.vue'
import Posts from './src/components/Posts.vue'
import Archive from './src/components/Archive.vue'
import { ref } from 'vue'

const currentTab = ref('Home')

const tabs = {
  Home,
  Posts,
  Archive
}
</script>

<template>
  <div>
    <!-- 按鈕切換不同頁籤 -->
    <button v-for="(_, tab) in tabs" :key="tab" @click="currentTab = tab">
      {{ tab }}
    </button>

    <!-- 動態渲染組件 -->
    <component :is="tabs[currentTab]"></component>
  </div>
</template>
