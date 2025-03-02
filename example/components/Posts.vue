<script setup>
import { ref } from 'vue'

const posts = ref([
  { id: 1, title: '學習 Vue 3 的基本概念' },
  { id: 2, title: 'Vue 組件與 Props 教學' },
  { id: 3, title: '如何使用 Vue Router 進行路由管理' }
])
</script>

<template>
  <div>
    <h2>📝 Posts</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  color: #ff9800;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 5px;
  border-bottom: 1px solid #ddd;
}
</style>
